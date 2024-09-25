export default class SkinnerBox {
    constructor() {
        this.element = document.getElementById('skinner-box');
        this.width = this.element.clientWidth;
        this.height = this.element.clientHeight;
    }
}
