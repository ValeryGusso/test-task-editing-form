<template>
  <div
    class="container"
    :style="{
      '--w': width ? width + 'px' : 'auto',
      '--h': height ? height + 'px' : 'auto',
    }"
  >
    <label>
      <p class="placeholder" :class="active ? 'active' : ''">
        <span
          v-for="(letter, i) of placeholder"
          :key="i"
          :style="{ '--delay': i * 50 + 'ms' }"
          >{{ letter }}</span
        >
      </p>
      <input
        :value="modelValue"
        @input="change"
        @focus="focus"
        @blur="blur"
        type="text"
      />
    </label>
  </div>
</template>

<script scoped lang="ts">
import { defineComponent } from "vue";

import { SafeNumber } from "@/@types/safeNumber";

export default defineComponent({
  data() {
    return {
      active: false,
    };
  },
  methods: {
    focus() {
      this.active = true;
    },
    blur() {
      setTimeout(() => {
        if (!this.modelValue) {
          this.active = false;
        }
      }, 500);
    },
    change(e: Event) {
      this.$emit("update:modelValue", (e.target as HTMLInputElement).value);
    },
  },
  props: {
    placeholder: { type: String, required: true },
    width: String as () => SafeNumber,
    height: String as () => SafeNumber,
    modelValue: { type: String, required: true },
  },
});
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: var(--w);
  height: var(--h);
  & input {
    position: relative;
    width: var(--w);
    height: var(--h);
    padding-left: 4px;
    font-size: 20px;
    outline: none;
    color: var(--color-light);
    border: none;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom: 2px solid var(--color-light);
    background-color: transparent;
    transition-duration: var(--transition-fast);
    transition-delay: 0.5s;
    &:focus {
      border-bottom: 2px solid aqua;
      transition-delay: 0s;
    }
  }
}
.placeholder {
  position: absolute;
  top: calc(50% - 12px);
  left: 16px;
  font-size: 24px;
  color: var(--color-light);
  user-select: none;
  & span {
    position: relative;
    height: var(--h);
    top: 0px;
    left: 0px;
    transition-duration: var(--transition-fast);
    transition-delay: var(--delay);
  }
}
.active {
  & span {
    top: calc(var(--h) / -2 - 14px);
    left: -12px;
    font-size: 16px;
  }
}
</style>
