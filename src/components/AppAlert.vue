<script setup>
import { defineProps } from "vue";

defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "danger",
  },
});
</script>

<template>
  <div>
    <p class="alert" :class="{ 'alert--danger': type === 'danger' }">
      {{ message }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  padding: 0.5rem;
  margin-block-end: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: #445065;
  font-size: var(--font-small);

  &--danger {
    background-color: #fce6e2;
  }
}
</style>
