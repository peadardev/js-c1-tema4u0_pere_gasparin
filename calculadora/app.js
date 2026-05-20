import { Square, Rectangle, Circle, Triangle } from "./figures.js";
const { createApp, ref, computed} = Vue;

const figures = [new Square(), new Rectangle(), new Triangle(), new Circle()];

const app = createApp({
    setup() {
        const currentFigure = ref(figures[0]);
        const computedArea = computed(() => currentFigure.value.computeArea().toFixed(2))

        return {
            figures,
            currentFigure,
            computedArea,
        };
    },
});

app.mount("#appCalculator");
