<template>
  <form v-bind="$attrs">
    <div class="form-control">
      <label for="email" class="font-small">Work Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@company.com"
        class="f-field"
      />
      <p class="hint-error">Enter a valid email</p>
    </div>
    <div class="form-control">
      <div class="flex-between font-small">
        <label for="password">Password</label>
        <a href="#" class="link--gray">Forget password?</a>
      </div>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="8+ Characters"
        class="f-field"
      />
      <p class="hint-error">Password must be 6 characters or more</p>
    </div>
    <button type="submit" class="login-btn">Log in</button>
    <div class="actions-wrapper flex-between mbs-sm">
      <p class="font-small">
        Don't have an account? <a href="#" class="link">Sign up</a>
      </p>
      <a href="#" class="link font-small">Login via SSO</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>

<style scoped lang="scss">
.displayed {
  background: #ccc;
  color: var(--text-light-color);
  cursor: not-allowed;
}

.form-control {
  margin-block-end: 1rem;

  label {
    display: block;
    margin: 0 0 0.25rem 0;
    color: #445065;
    cursor: pointer;
  }
}

.f-field {
  display: block;
  padding: 0.5rem 1rem 0.5rem 1rem;
  height: 40px;
  width: 100%;
  outline: 0;
  border: 1px solid #dcdee3;
  border-radius: 4px;
  background-color: var(--text-light-color);
  color: var(--text-dark-color);
  font-size: var(--font-small);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border-color: rgba(0, 153, 255, 0.01);
    box-shadow: inset 0 0 4px 0 #099fff;
  }
}

.login-btn {
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  padding: 0 1rem;
  min-width: 88px;
  max-width: 100%;
  height: 32px;
  outline-width: 0;
  border: none;
  border-radius: 4px;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  font-size: 0.875rem;
  font-family: inherit;
  line-height: 30px;
  cursor: pointer;
  user-select: none;
  appearance: none;
  background-color: #0089e5;
  color: #fff;
  height: 40px;
  font-size: 0.875rem;
  line-height: 38px;
  width: 100%;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    border-color: #09f;
    background-color: #09f;
  }
}

.hint-error {
  margin-top: 0.25rem;
  color: var(--error-color);
  font-size: 0.75rem;
}
</style>
