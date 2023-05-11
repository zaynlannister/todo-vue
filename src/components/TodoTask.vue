<template>
  <div>
    <div class="todo-list__tasks">
      <div class="created__at">{{ date }}</div>
      <div class="todo-task">
        <div
          class="todo-task__title"
          :class="{ 'completed-task': task.completed }"
        >
          {{ task.title }}
        </div>
        <div class="todo-task__actions">
          <div class="todo-task__close-button">
            <i @click="tasks.removeTask(task)" class="bi bi-x-square-fill"></i>
          </div>
          <div class="todo-task__checkbox">
            <i
              @click="completeTask(task)"
              :class="switchClass(task)"
              class="bi"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTasksStore } from "@/stores/tasks";
const props = defineProps(["task", "date"]);
const tasks = useTasksStore();

function completeTask(task) {
  tasks.completeTask(task);
}

function switchClass(task) {
  if (task.completed) {
    return "bi-toggle-on complete-switcher-on";
  } else {
    return "bi-toggle-off";
  }
}
</script>

<style lang="scss">
.created__at {
  font-size: 12px;
  margin-bottom: 5px;
  color: #868686;
}

.todo-list__tasks {
  padding: 15px 0 0 0;
}

.todo-task {
  display: flex;
  border-bottom: 1px solid #e2e2e2;
  padding: 0 0 10px 0;

  &__title {
    margin-right: 10px;
  }

  &__actions {
    display: flex;
  }

  &__close-button {
    color: #ff6262;
    margin-right: 5px;
  }

  &__close-button,
  &__checkbox {
    cursor: pointer;
    font-size: 18px;
  }
}

.completed-task {
  text-decoration: line-through;
  opacity: 0.6;
}

.complete-switcher-on {
  color: rgb(33, 204, 133);
}
</style>
