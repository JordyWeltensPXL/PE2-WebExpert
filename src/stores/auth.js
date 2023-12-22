import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") || "false"),
    currentUser: null,
  }),
  actions: {
    login(user) {
      this.isLoggedIn = true;
      this.currentUser = user;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
    },
    logout() {
      this.isLoggedIn = false;
      this.currentUser = null;
      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("currentUser");
    },
  },
});
