export default class FoodDispenser {
    constructor() {
        this.element = document.getElementById('food-dispenser');
    }

    dispenseFood() {
        this.element.style.backgroundColor = 'yellow';
        setTimeout(() => {
            this.element.style.backgroundColor = 'green';
        }, 500);
    }
}
