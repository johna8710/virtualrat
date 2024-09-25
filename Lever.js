export default class Lever {
    constructor() {
        this.element = document.getElementById('lever');
        this.pressingThreshold = 30;
        const rect = this.element.getBoundingClientRect();
        this.x = rect.left + rect.width / 2;
        this.y = rect.top + rect.height / 2;
    }
}
