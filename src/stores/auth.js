import { defineStore } from "pinia";

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    users: [],
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    getUsername: (state) => state.user?.substring(0, state.user?.indexOf("@")),
  },
  actions: {
    async fetchUsers() {
      this.users = (await import("@/data/data.json")).default;
    },
    async login({ email, password }) {
      // Check If user email is exist & password is correct
      const user = this.users.find((user) => user.email === email);
      if (!user || user.password !== password)
        throw new Error("INVALID_CREDENTIALS");
      // if true save to store and localstorage
      this.user = user.email;
      localStorage.setItem("user", email);
      // throw error if invalid credential
    },
    async logout() {
      this.user = null;
      localStorage.removeItem("user");
    },
    async autoLogin() {
      const user = localStorage.getItem("user");
      if (user) this.user = user;
    },
  },
});
