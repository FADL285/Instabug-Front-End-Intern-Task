<script setup>
import { defineEmits } from "vue";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";

const validationListenersGenerator = (field) => ({
  blur: field.handleChange,
  change: field.handleChange,
  input: (e) => field.handleChange(e, !!field.errorMessage.value),
});

const validationSchema = object({
  email: string()
    .required("Email address is required")
    .email("Enter a valid email address."),
  password: string()
    .required()
    .test({
      name: "notContainUsername",
      message: "Password must not contain your username.",
      test: function (value) {
        const username =
          this.parent.email?.substring(0, this.parent.email.indexOf("@")) || "";
        const re = new RegExp("(?=.*" + username?.toLowerCase() + ").{6,}");
        return !username.length || !re.test(value?.toLowerCase());
      },
    })
    .matches(
      /(?=.*[A-Z])(?=.*[0-9]).{6,}/,
      "Password must contain at least 1 uppercase letters and 1 number."
    )
    .min(6, "Password must be 6 characters or more."),
});
const { handleSubmit, meta } = useForm({
  validationSchema,
});
const useFieldOptions = {
  validateOnValueUpdate: false,
};

//Email
const emailField = useField("email", null, useFieldOptions);
const { value: email, errorMessage: emailError } = emailField;
const emailValidationListeners = validationListenersGenerator(emailField);

// Password
const passwordField = useField("password", null, useFieldOptions);
const { value: password, errorMessage: passwordError } = passwordField;
const passwordValidationListeners = validationListenersGenerator(passwordField);

//Handle Submit
const emit = defineEmits(["submitForm"]);
const submit = handleSubmit((values) => {
  console.log(values);
  emit("submitForm", {
    ...values,
  });
});
</script>

<template>
  <form @submit="submit" novalidate>
    <div class="form-control">
      <label for="email" class="font-small">Work Email</label>
      <input
        v-on="emailValidationListeners"
        :value="email"
        type="email"
        id="email"
        name="email"
        placeholder="you@company.com"
        class="f-field"
        :class="{ error: emailError }"
        autocomplete="username"
      />
      <p class="hint-error" v-show="emailError">{{ emailError }}</p>
    </div>
    <div class="form-control">
      <div class="flex-between font-small">
        <label for="password">Password</label>
        <a href="#" class="link--gray" tabindex="-1">Forget password?</a>
      </div>
      <input
        v-on="passwordValidationListeners"
        :value="password"
        type="password"
        id="password"
        name="password"
        placeholder="6+ Characters"
        class="f-field"
        :class="{ error: passwordError }"
        autocomplete="current-password"
      />
      <p class="hint-error" v-show="passwordError">{{ passwordError }}</p>
    </div>
    <button type="submit" class="login-btn" :disabled="!meta.valid">
      Log in
    </button>
    <div class="actions-wrapper flex-between mbs-sm">
      <p class="font-small">
        Don't have an account? <a href="#" class="link">Sign up</a>
      </p>
      <a href="#" class="link font-small">Login via SSO</a>
    </div>
  </form>
</template>

<style scoped lang="scss">
button:disabled {
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

  &:not(.error):focus {
    border-color: rgba(0, 153, 255, 0.01);
    box-shadow: inset 0 0 4px 0 #099fff;
  }

  &.error {
    border-color: var(--error-color);
  }
}

.login-btn {
  border: 1px solid transparent;
  border-radius: 4px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  user-select: none;
  appearance: none;
  background-color: #0089e5;
  color: #fff;
  height: 40px;
  font-size: var(--font-small);
  width: 100%;
  transition: background-color 0.15s ease-in-out;

  &:hover:enabled {
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
