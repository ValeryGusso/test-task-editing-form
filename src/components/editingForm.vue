<template>
  <div class="container__form">
    <div class="select">
      <p>Выберите необходимый элемент</p>
      <formSelect
        @setValue="setValue"
        v-model="currentIndex"
        :items="$store.state.data.items"
        :selected="currentIndex"
      />
    </div>
    <form class="form" @submit.prevent="submit">
      <div class="form__title">
        <p>Выбранный элемент:</p>
        <p class="form__title__obj">
          <span>{</span>
          <span>name: "{{ $store.state.data.items[currentIndex].name }}",</span>
          <span
            >value: "{{ $store.state.data.items[currentIndex].value }}"</span
          >
          <span>}</span>
        </p>
      </div>
      <formInput
        v-model="newValue"
        :placeholder="$store.state.data.items[currentIndex].name"
        width="250"
        height="50"
      />
      <button class="button" :disabled="!newValue">Редактировать</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import formInput from "@/components/UI/formInput.vue";
import formSelect from "@/components/UI/formSelect.vue";
import { DataMutationTypes } from "@/store/modules/data/mutations";

export default defineComponent({
  data() {
    return { currentIndex: 0, newValue: "" };
  },
  methods: {
    submit() {
      this.$store.commit(DataMutationTypes.UPDATE_ITEM, {
        index: this.currentIndex,
        value: this.newValue,
      });
      this.newValue = "";
    },
    setValue() {
      this.newValue = "";
    },
  },
  components: {
    formInput,
    formSelect,
  },
});
</script>

<style scoped lang="scss">
.container__form {
  display: flex;
  flex-direction: column;
  padding: 36px 42px;
  row-gap: 60px;
  border-radius: 0.5rem;
  box-shadow: 2px -6px 2px 2px #fff4, -2px 3px 1px 1px #fff4;
}
.select {
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-light);
  & > p {
    font-size: 1.5rem;
    color: var(--color-light);
  }
}
.form {
  display: flex;
  align-items: center;
  column-gap: 12px;
}
.form__title {
  display: flex;
  height: 100%;
  column-gap: 8px;
  & > p {
    height: 100%;
    align-self: center;
    font-size: 1.25rem;
    color: var(--color-light);
  }
}
.form__title__obj {
  width: 300px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  & span:nth-child(2),
  & span:nth-child(3) {
    padding-left: 8px;
  }
}
.button {
  padding: 6px 12px;
  font-size: 22px;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--color-light);
  text-decoration: 2px underline aqua;
  transition-duration: var(--transition-fast);
  cursor: pointer;
  user-select: none;
  &:hover {
    color: aqua;
    text-decoration: 2px underline transparent;
    animation: tremor 0.5s ease-in 0s 1 normal forwards;
  }
  &:disabled {
    filter: blur(3px) opacity(0.75);
    cursor: default;
    pointer-events: none;
  }
  &:active {
    transform: scale(0.95);
  }
}
@keyframes tremor {
  11% {
    transform: translateX(0px);
  }
  22% {
    transform: translateX(-6px);
  }
  33% {
    transform: translateX(0px);
  }
  44% {
    transform: translateX(6px);
  }
  55% {
    transform: translateX(0px);
  }
  66% {
    transform: translateX(-3px);
  }
  77% {
    transform: translateX(0px);
  }
  88% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
