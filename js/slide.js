export default class Slide {
    constructor() {
       this.slide = document.querySelector(slide)
       this.wrapper = document.querySelector(wrapper);
    }
    onStart(event) {
        event.preventDefault();
        this.wrapper.addEventListener('mousemove', this.onMove);
    }

    onMove(event) {
    }

    onEnd(event) {
        this.wrapper.removeEventListener('mousemove', this.onMove);
    }

    addSlidEvents() {
        this.wrapper.addEventListener('mousedown', this.onStart);
        this.wrapper.addEventListener('moseup', this.onEnd);
    }

    blindEvents() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    init() {
        this.blindEvents();
        this.addSlidEvents();
        return this;
    }
}