import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      tasksList: [
        { title: "Изучить vue & react", id: 1, completed: false },
        { title: "Погулять с друзьями", id: 2, completed: false },
      ],
    };
  },
});
