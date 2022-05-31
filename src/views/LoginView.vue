<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginForm from "@/components/LoginForm.vue";
import LoginWithProviders from "@/components/LoginWithProviders.vue";
import ClientList from "@/components/ClientList.vue";
import AppAlert from "@/components/AppAlert.vue";
import LoginSlider from "@/components/LoginSlider.vue";
import { useAuthStore } from "@/stores/auth.js";

const authStore = useAuthStore();
const router = useRouter();
const formError = ref(null);

const submitFrom = async (data) => {
  try {
    await authStore.login({ ...data });
    router.push({
      name: "welcome",
    });
  } catch (e) {
    if (e.message === "INVALID_CREDENTIALS")
      formError.value = "Your email and/or password are incorrect";
  }
};
</script>

<template>
  <div class="login">
    <div class="slider__wrapper flex-center align-center">
      <LoginSlider />
    </div>

    <div class="content__wrapper flex-center align-center">
      <div class="content">
        <div class="text-center head">
          <img alt="Vue logo" src="../assets/logo.svg" />
          <h1>Log in to Instabug</h1>
        </div>
        <LoginWithProviders />
        <p class="separator">OR</p>
        <AppAlert v-if="formError" :message="formError" />
        <LoginForm @submit-form="submitFrom" />
        <ClientList />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//Separator
.separator {
  margin-block: 1.2rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1em;

  &::before,
  &::after {
    content: "";
    border-top: 1px solid #dcdee3;
    align-self: center;
  }
}

// Login Form
.login {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 672px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .head {
    margin-block-end: 1rem;
  }

  .slider {
    &__wrapper {
      background-image: linear-gradient(
        to left bottom,
        #002177,
        #002176,
        #002174,
        #002173,
        #002171
      );

      overflow: hidden;

      @media (max-width: 672px) {
        display: none;
      }
    }
  }

  .content {
    max-width: 30rem;
    width: 100%;

    &__wrapper {
      padding: 1rem 1.5rem;
    }
  }
}
</style>
