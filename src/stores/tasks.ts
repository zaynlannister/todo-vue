import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      tasksList: [
        { title: "Изучить vue & react", id: 0, completed: false },
        { title: "Погулять с друзьями", id: 1, completed: false },
      ],
    };
  },

  actions: {
    createTask(title: string) {
      this.tasksList.push({
        title,
        id: this.tasksList.length,
        completed: false,
      });
    },

    removeTask(task) {
      const taskIndex = this.tasksList.findIndex((item) => item.id === task.id);
      this.tasksList.splice(taskIndex, 1);
    },
  },
});
