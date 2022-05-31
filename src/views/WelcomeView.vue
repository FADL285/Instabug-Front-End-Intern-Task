<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";

const router = useRouter();
const authStore = useAuthStore();

const username = authStore.getUsername;

const logoutF = async () => {
  await authStore.logout();
  router.push({
    name: "login",
  });
};
</script>

<template>
  <div id="welcome" class="flex-center align-center flex-col">
    <img alt="Vue logo" src="../assets/logo.svg" />
    <div class="text-center">
      <h2>Hey {{ username || "User" }}, Welcome to BugSquad!</h2>
      <button class="btn-primary" @click="logoutF">Log out</button>
    </div>
  </div>
</template>

<style lang="scss">
#welcome {
  min-height: 100vh;
  gap: 1rem;

  img {
    width: 250px;
  }

  h2 {
    margin-block: 1.75rem;
    font-size: calc(var(--font-large) * 1.5);
  }
}
</style>
