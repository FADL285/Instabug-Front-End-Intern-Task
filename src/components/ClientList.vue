<template>
  <div class="clients" v-bind="$attrs">
    <p class="text-center clients__title">Trusted by the top companies.</p>
    <ul class="clients__logos">
      <li>
        <a href="#" tabindex="-1">
          <img src="../assets/images/clients/asana_logo.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="#" tabindex="-1">
          <img src="../assets/images/clients/doordash_logo.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="#" tabindex="-1">
          <img src="../assets/images/clients/emirates_logo.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="#" tabindex="-1">
          <img src="../assets/images/clients/lyft_logo.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="#" tabindex="-1">
          <img src="../assets/images/clients/toyota.svg" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.clients {
  &__title {
    color: #a1a7b2;
    margin-block: 1.25rem 0.75rem;
  }

  &__logos {
    display: flex;
    gap: 1.5rem;
    justify-content: space-around;
    align-content: center;
    align-items: center;

    img {
      filter: grayscale(1);
      transition: filter 0.15s ease-in-out;

      &:hover {
        filter: grayscale(0);
      }
    }
  }
}
</style>
