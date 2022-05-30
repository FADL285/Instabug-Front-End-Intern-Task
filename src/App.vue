<script setup>
import { useAuthStore } from "@/stores/auth.js";
useAuthStore();
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
