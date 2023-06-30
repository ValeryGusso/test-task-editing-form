<template>
  <main>
    <editingForm />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import editingForm from "@/components/editingForm.vue";

export default defineComponent({
  name: "App",
  data() {
    return {};
  },
  components: { editingForm },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}
:root {
  --color-light: #e5e5e5;
  --color-dark: #232527;
  --transition-fast: 0.3s;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #635e5e;
}
::-webkit-scrollbar-thumb {
  background: #9b9797;
  border-radius: 5px;
}
body {
  background-color: var(--color-dark);
}
main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
