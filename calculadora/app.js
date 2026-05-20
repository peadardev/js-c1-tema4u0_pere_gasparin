import { Square, Rectangle, Circle, Triangle } from "./figures.js";
const { createApp, ref, computed} = Vue;

const figures = [new Square(), new Rectangle(), new Circle(), new Triangle()];

const app = createApp({
    setup() {
        const currentFigure = ref(figures[0]);

        return {
            figures,
            currentFigure,
        };
    },
});

app.mount("#appCalculator");
