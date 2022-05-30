<template>
  <div class="login">
    <div class="slider__wrapper flex-center align-center">
      <img
        src="../assets/images/slider/products-overview.svg"
        alt="products overview"
      />
    </div>
    <div class="content__wrapper flex-center align-center">
      <div class="content">
        <div class="text-center head">
          <img alt="Vue logo" src="../assets/logo.svg" />
          <h1>Log in to Instabug</h1>
        </div>
        <LoginWithProviders />
        <p class="separator">OR</p>
        <LoginForm />
        <ClientList />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import LoginWithProviders from "@/components/LoginWithProviders.vue";
import ClientList from "@/components/ClientList.vue";
export default {
  name: "HomeView",
  components: { ClientList, LoginForm, LoginWithProviders },
};
</script>

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

  .head {
    margin-block-end: 1rem;
  }

  .slider {
    &__wrapper {
      background: #002177;
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
