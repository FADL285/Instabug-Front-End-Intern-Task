<template>
  <div class="providers-wrapper">
    <a href="#" class="login-btn google">
      <GoogleIcon class="svg-icon iconGoogle" width="36" height="36" />
      <span>Google</span>
    </a>
    <a href="#" class="login-btn github">
      <GithubIcon class="svg-icon iconGitHub" width="36" height="36" />
      <span>GitHub</span>
    </a>
    <a href="#" class="login-btn microsoft">
      <MicrosoftIcon class="svg-icon iconMicrosoft" width="36" height="36" />
      <span>Microsoft</span>
    </a>
  </div>
</template>

<script>
import GoogleIcon from "./icons/GoogleIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import MicrosoftIcon from "@/components/icons/MicrosoftIcon.vue";

export default {
  name: "LoginWithProviders",
  components: { MicrosoftIcon, GithubIcon, GoogleIcon },
};
</script>

<style lang="scss" scoped>
.providers-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .login-btn {
    padding: 0.4rem 0;
    text-align: center;
    border-radius: 4px;
    color: var(--text-light-color);
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;

    &.google {
      background: #4285f4;
      border: 1px solid #4285f4;

      .svg-icon {
        background: var(--text-light-color);
      }
    }

    &.github {
      background: #333333;
      border: 1px solid #333333;
    }

    &.microsoft {
      background: #ffffff;
      color: #5e5e5e;
      border: 1px solid #8c8c8c;
    }

    .svg-icon {
      position: absolute;
      inset-inline-start: 1px;
      inset-block-start: 1px;
      padding: 4px;
      border-radius: 4px;
    }
  }
}
</style>
