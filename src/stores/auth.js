import { defineStore } from "pinia";
import users from "@/data/users.json";

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    users: users,
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    getUsername: (state) => state.user?.substring(0, state.user?.indexOf("@")),
  },
  actions: {
    async login({ email, password }) {
      // Check If user email is exist & password is correct
      const user = this.users.find((user) => user.email === email);
      if (!user || user.password !== password)
        throw new Error("INVALID_CREDENTIALS");
      // if true save to store and localstorage
      this.user = user.email;
      localStorage.setItem(
        "user",
        JSON.stringify({ __id: user.__id, email: user.email })
      );
      // throw error if invalid credential
    },
    async logout() {
      this.user = null;
      localStorage.removeItem("user");
    },
    async autoLogin() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        user = this.users.find((u) => u.__id === user.__id);
      }
      if (user) this.user = user.email;
    },
  },
});
