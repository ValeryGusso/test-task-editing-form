<template>
  <div class="container">
    <div class="title">
      <p>{{ items[selected].name }}</p>
      <div @click="showList = !showList">
        <img
          src="@/assets/img/arrow_down.svg"
          alt="arrow"
          :style="{ transform: showList ? `rotate(-180deg)` : 'none' }"
        />
      </div>
    </div>
    <ul v-if="showList" class="list">
      <li v-for="(item, i) of items" @click="setValue(i)" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Item } from "@/store/modules/data/state";

export default defineComponent({
  data() {
    return {
      showList: false,
    };
  },
  props: {
    items: { type: Array as () => Item[], required: true },
    selected: { type: Number, required: true },
  },
  methods: {
    setValue(i: number) {
      this.$emit("update:modelValue", i);
      this.$emit("setValue");
      this.showList = false;
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 200px;
}
.title {
  width: 100%;
  height: 36px;
  border: 2px solid var(--color-light);
  overflow: hidden;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  user-select: none;
  cursor: default;
  & p {
    font-size: 1.5rem;
    color: var(--color-light);
    padding-left: 4px;
  }
  & div {
    position: absolute;
    top: 0;
    left: calc(100% - 36px);
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-light);
    overflow: hidden;
    user-select: none;
    cursor: pointer;
    border-top-right-radius: 0.5rem;
    & img {
      width: 24px;
      height: 24px;
      fill: var(--color-light);
      transition-duration: var(--transition-fast);
    }
  }
}
.list {
  position: absolute;
  top: 36px;
  width: 100%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  color: var(--color-light);
  background-color: var(--color-light);
  overflow-y: auto;
  user-select: none;
  z-index: 100;
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    color: var(--color-dark);
    border-bottom: 1px solid var(--color-dark);
    transition-duration: var(--transition-fast);
    cursor: pointer;
    &:hover {
      color: var(--color-light);
      background-color: #4f4e4a;
    }
  }
}
</style>
