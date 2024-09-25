export default class Chart {
    constructor(canvasContext, data) {
        this.chart = new window.Chart(canvasContext, {
            type: 'line',
            data: {
                labels: data.timeData,
                datasets: [{
                    label: 'Lever Press Strength',
                    data: data.leverPressStrengthData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    update() {
        this.chart.update();
    }
}
