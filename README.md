<div id="header" align="center">
    <h1>Instabug Front-End Intern Task</h1>
    <img src="./src/assets/logo.svg" alt="Instabug Logo" width="200">
    <p>Small Vue App that consists from 3 Pages With Automation tests the login form using Cypress.</p>
    <img src="./preview/app-preview.gif" alt="App Preview">
    <p>
        <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue Logo">
        <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass Logo">
        <img src="https://img.shields.io/badge/Cypress-23272C?style=for-the-badge&logo=cypress&logoColor=#23272C" alt="Cypress Logo">
    </p>
</div>

---

# Table of Contents
- [Project Setup](#puild-setup)
- [Task Specifications](#task-specifications)

---

## Project Setup

### Install Dependencies
```
npm install
```

### Compiles and Hot-Reloads for Development
```
npm run serve
```

### Compile and Minify for Production
```
npm run build
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)
```
npm run test:e2e
```

### Lints and Fixes Files
```
npm run lint
```

---

## Task Specifications
- Build a small app that consists of 3 pages.
  - Login (Contains Login Form + Slider)
  - Welcome (Contains Welcome Message + Logout Button)
  - 404
- Write automation tests for the login form using cypress.

### Login form validations:
The login form consists of 2 fields and one button (User email, password, login button)

#### Validations Should Match:
- The login button is disabled till there are valid values in the other fields.
- The email has email validation with text.
- The password must be more than 6 characters otherwise shows (password must be six characters or more).
- The password must contain at least 1 uppercase letters and one number.
- The password must not contain the email address name (the part that came before the @).

### Login Form Automation tests Scenarios
- Login with **email address that doesn't exist in login list** 👉👉 Must show a validation error Message.
- Login with **email address that exist in login list and invalid password** 👉👉 Must show a validation error Message.
- Enter **Invalid email address** 👉👉 Must show error hint and change input border color.
- Login with **email address that exist in login list and valid password** 👉👉 Must redirect to welcome page.

---
