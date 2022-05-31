<template>
  <div id="p404" class="flex-center align-center flex-col">
    <img src="../assets/images/404-illustration.png" alt="404 Illustration" />

    <div class="text-center">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, that page doesn't exists. What would like to do?</p>

      <router-link :to="{ name: 'welcome' }" class="btn-primary"
        >Go Back to Homepage</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
#p404 {
  min-height: 100vh;
  gap: 5rem;

  h1 {
    color: var(--primary-color-dark);
  }

  p {
    margin-block: var(--font-small);
  }
}
</style>
