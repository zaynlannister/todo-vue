import { defineStore } from "pinia";

export const useLoginsStore = defineStore("logins", {
  state: () => {
    return {
      loginsList: [{ login: "admin", password: "admin", id: 1 }],
    };
  },
  actions: {
    register(login: string, password: string, id: number) {
      this.loginsList.push({
        login,
        password,
        id,
      });
    },
  },
});
