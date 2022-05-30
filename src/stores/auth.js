import { defineStore } from "pinia";
import users from "@/data/data.json";

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    users,
  }),
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId);
    },
  },
  actions: {
    login() {},
    logout() {},
  },
});
