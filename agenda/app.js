
const { createApp, ref, computed} = Vue;

const app = createApp({
    setup() {
        const contacts = ref([]);
        const emptyName = ref(false);
        const existContacts = computed(() => contacts.value.length > 0);
        const num_registers = computed(() => contacts.value.length);

        const nameContact = ref("");
        function addContact() {
            if (!nameContact.value.trim()) {
                emptyName.value = true;
                return;
            }
            contacts.value.push(nameContact.value.trim());
            emptyName.value = false;
            nameContact.value = "";
        }

        return {
            contacts,
            emptyName,
            existContacts,
            num_registers,
            nameContact,
            addContact,
        };
    },
});

app.mount("#appAgenda");
