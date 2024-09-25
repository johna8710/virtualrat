class ReinforcementLearning {
    constructor(learningRate = 0.1, discountFactor = 0.9, explorationRate = 0.1) {
        this.learningRate = learningRate;
        this.discountFactor = discountFactor;
        this.explorationRate = explorationRate;
        this.qTable = {};
    }

    getState(sniffy, lever) {
        const distance = this.calculateDistance(sniffy, lever);
        const discreteDistance = Math.floor(distance / 10) * 10; // Discretize distance
        return `${sniffy.state}-${discreteDistance}`;
    }

    calculateDistance(sniffy, lever) {
        const dx = sniffy.x - lever.x;
        const dy = sniffy.y - lever.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    getAction(state) {
        if (Math.random() < this.explorationRate) {
            return this.getRandomAction();
        }
        return this.getBestAction(state);
    }

    getRandomAction() {
        const actions = ['move', 'press_lever'];
        return actions[Math.floor(Math.random() * actions.length)];
    }

    getBestAction(state) {
        if (!this.qTable[state]) {
            return this.getRandomAction();
        }
        const actions = Object.keys(this.qTable[state]);
        return actions.reduce((a, b) => this.qTable[state][a] > this.qTable[state][b] ? a : b);
    }

    update(state, action, reward, newState) {
        if (!this.qTable[state]) {
            this.qTable[state] = { move: 0, press_lever: 0 };
        }

        const currentQ = this.qTable[state][action];
        const bestNextQ = this.getBestNextQ(newState);

        this.qTable[state][action] = currentQ + this.learningRate * (reward + this.discountFactor * bestNextQ - currentQ);
    }

    getBestNextQ(state) {
        if (!this.qTable[state]) {
            return 0;
        }
        return Math.max(...Object.values(this.qTable[state]));
    }
}

export default ReinforcementLearning;