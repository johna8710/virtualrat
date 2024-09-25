import SkinnerBox from './SkinnerBox.js';
import Sniffy from './Sniffy.js';
import Lever from './Lever.js';
import FoodDispenser from './FoodDispenser.js';
import ExperimentData from './ExperimentData.js';
import Chart from './Chart.js';
import ReinforcementLearning from './reinforcement-learning.js';

export default class ExperimentController {
    constructor() {
        this.skinnerBox = new SkinnerBox();
        this.sniffy = new Sniffy(this.skinnerBox);
	this.skinnerBox.element.appendChild(this.sniffy.element);
        this.lever = new Lever();
        this.foodDispenser = new FoodDispenser();
        this.data = new ExperimentData();
        this.chart = new Chart(document.getElementById('chart').getContext('2d'), this.data);

        this.leverPressStrength = 0;
        this.timeSinceLastPress = 0;
        this.reinforcementRate = 0.5;
        this.extinctionSpeed = 0.05;
        this.pressesToReward = 5;
        this.leverPressCount = 0;

        this.isRunning = false;
        this.rl = new ReinforcementLearning();
        this.currentState = null;
        this.lastAction = null;

        this.setupControls();
        this.render();
    }

    setupControls() {
        const reinforcementRateSlider = document.getElementById('reinforcement-rate');
        const extinctionSpeedSlider = document.getElementById('extinction-speed');
        const reinforcementValueDisplay = document.getElementById('reinforcement-value');
        const extinctionValueDisplay = document.getElementById('extinction-value');

        reinforcementRateSlider.addEventListener('input', () => {
            this.reinforcementRate = parseFloat(reinforcementRateSlider.value);
            reinforcementValueDisplay.textContent = reinforcementRateSlider.value;
        });

        extinctionSpeedSlider.addEventListener('input', () => {
            this.extinctionSpeed = parseFloat(extinctionSpeedSlider.value);
            extinctionValueDisplay.textContent = extinctionSpeedSlider.value;
        });

        document.getElementById('start-pause').addEventListener('click', () => this.toggleExperiment());
        document.getElementById('export-data').addEventListener('click', () => this.exportData());
        document.getElementById('manual-dispense').addEventListener('click', () => this.foodDispenser.dispenseFood());
    }

    toggleExperiment() {
        this.isRunning = !this.isRunning;
        if (this.isRunning) {
            this.startExperiment();
        } else {
            this.pauseExperiment();
        }
        this.render();
    }

    startExperiment() {
        this.experimentInterval = setInterval(() => this.runExperimentStep(), 1000);
    }

    pauseExperiment() {
        clearInterval(this.experimentInterval);
    }

    runExperimentStep() {
        const state = this.rl.getState(this.sniffy, this.lever);
        const action = this.rl.getAction(state);

        this.performAction(action);

        const reward = this.calculateReward();
        const newState = this.rl.getState(this.sniffy, this.lever);

        this.rl.update(state, action, reward, newState);

        this.currentState = newState;
        this.lastAction = action;

        this.data.addDataPoint(this.leverPressStrength);
        this.chart.update();
    }

    performAction(action) {
        if (action === 'move') {
            this.sniffy.move();
        } else if (action === 'press_lever') {
            if (this.sniffy.isPressingLever(this.lever)) {
                this.handleLeverPress();
            }
        }
    }

    calculateReward() {
        if (this.lastAction === 'press_lever' && this.sniffy.isPressingLever(this.lever)) {
            return 1;
        }
        return 0;
    }

    handleLeverPress() {
        this.timeSinceLastPress = 0;
        this.leverPressCount++;

        if (this.leverPressCount >= this.pressesToReward) {
            this.foodDispenser.dispenseFood();
            this.sniffy.eat();
            this.leverPressCount = 0;
            this.leverPressStrength += this.reinforcementRate;
        }

        console.log("Reinforced! Lever press strength:", this.leverPressStrength);
    }

    render() {
        document.getElementById('start-pause').textContent = this.isRunning ? 'Pause' : 'Start';
    }

    exportData() {
        const csvContent = this.data.exportAsCSV();
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = "sniffy_experiment_data.csv";
        downloadLink.click();
    }
}
