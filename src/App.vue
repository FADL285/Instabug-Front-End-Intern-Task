<script setup>
import { useAuthStore } from "@/stores/auth.js";
const authStore = useAuthStore();

authStore.fetchUsers();
authStore.autoLogin();
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
