console.log("Hello world");
console.log("Hello world from script");
console.log("Vue object --> ", Vue);

const gradesData = [
  { id: 1, name: "Alice Johnson", grade: 8.5 },
  { id: 2, name: "Bob Smith", grade: 7.2 },
  { id: 3, name: "Charlie Brown", grade: 9.0 },
  { id: 4, name: "Diana Prince", grade: 4.8 },
  { id: 5, name: "Ethan Hunt", grade: 5.9 },
  { id: 6, name: "Fiona Gallagher", grade: 8.1 },
  { id: 7, name: "George Miller", grade: 2.7 },
  { id: 8, name: "Hannah Lee", grade: 9.3 },
  { id: 9, name: "Ian Wright", grade: 3.4 },
  { id: 10, name: "Julia Roberts", grade: 7.9 },
];

const { createApp, ref, computed} = Vue;

const app = createApp({
    setup() {
        let name = ref("John");

        const updateName = () => {
            name.value = "sarah";
        };

        const isVisibleGrades = ref(true);
        const showGrades = () => {
            isVisibleGrades.value = !isVisibleGrades.value;
        };

        const approvedCount = computed(
            () => gradesData.filter((s) => s.grade >= 5).length
        );

        return {
            name,
            updateName,
            gradesData,
            isVisibleGrades,
            showGrades,
            approvedCount,
        };
    },
});

app.mount("#vueApp");
