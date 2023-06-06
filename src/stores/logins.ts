import { defineStore } from "pinia";

export const useLoginsStore = defineStore("logins", {
  state: () => {
    return {
      isAuthenticated: false,
      loginsList: [],
    };
  },
  actions: {
    register(login: string, password: string, id: number) {
      this.loginsList.push({
        login: login,
        password: password,
        id: id,
      });

      this.isAuthenticated = true;
    },
  },
});
