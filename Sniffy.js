import { SNIFFY_SVG } from './constants.js';

export default class Sniffy {
    constructor(skinnerBox) {
        this.element = document.createElement('div');
        this.element.id = 'sniffy';
        this.skinnerBox = skinnerBox;
        this.state = 'idle';
        this.svgs = SNIFFY_SVG;
        this.x = 0;
        this.y = 0;
        this.updatePosition();
        this.updateSVG();
    }

    move() {
        const newPosition = this.getRandomPosition();
        this.x = newPosition.x;
        this.y = newPosition.y;
        this.updatePosition();
        this.setState('moving');
    }

    updatePosition() {
        this.element.style.position = 'absolute';
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    getRandomPosition() {
        const maxX = this.skinnerBox.width - 32;
        const maxY = this.skinnerBox.height - 32;
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        };
    }

    isPressingLever(lever) {
        const sniffyRect = this.element.getBoundingClientRect();
        const leverRect = lever.element.getBoundingClientRect();
        const isPressed = this.calculateDistance(sniffyRect, leverRect) <= lever.pressingThreshold;
        if (isPressed) {
            this.setState('pressingLever');
        }
        return isPressed;
    }

    calculateDistance(rect1, rect2) {
        const dx = (rect1.left + rect1.width / 2) - (rect2.left + rect2.width / 2);
        const dy = (rect1.top + rect1.height / 2) - (rect2.top + rect2.height / 2);
        return Math.sqrt(dx * dx + dy * dy);
    }

    setState(newState) {
        if (this.state !== newState) {
            this.state = newState;
            this.updateSVG();
        }
    }

    updateSVG() {
        this.element.innerHTML = this.svgs[this.state];
    }

    eat() {
        this.setState('eating');
        setTimeout(() => this.setState('idle'), 1000);
    }
}