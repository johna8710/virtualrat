export default class ExperimentData {
    constructor() {
        this.timeData = [];
        this.leverPressStrengthData = [];
    }

    addDataPoint(leverPressStrength) {
        this.timeData.push(this.timeData.length + 1);
        this.leverPressStrengthData.push(leverPressStrength);
    }

    exportAsCSV() {
        let csvContent = "Time,LeverPressStrength\n";
        this.timeData.forEach((time, index) => {
            csvContent += `${time},${this.leverPressStrengthData[index]}\n`;
        });
        return csvContent;
    }
}
