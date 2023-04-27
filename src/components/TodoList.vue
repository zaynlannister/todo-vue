<template>
  <div class="todo-list">
    <div class="todo-list__actions">
      <div class="todo-list__input">
        <input v-model="inputValue" type="text" placeholder="Введите задачу" />
      </div>
      <div class="todo-list__button">
        <button @click="create">Создать</button>
      </div>
    </div>
    <todo-task v-for="task in tasksList" :task="task" />
  </div>
</template>
<script setup>
import TodoTask from "./TodoTask.vue";
import { useTasksStore } from "@/stores/tasks";
import { computed, ref } from "vue";
const tasks = useTasksStore();
const tasksList = computed(() => tasks.tasksList);
const inputValue = ref("");

function create() {
  tasks.createTask(inputValue.value);
  inputValue.value = "";
}
</script>
<style lang="scss">
input,
button {
  outline: none;
  border: none;
}

.todo-list {
  &__actions {
    display: flex;
  }

  &__input {
    margin-right: 10px;

    input {
      opacity: 0.6;
      border: 1px solid #909090;
      padding: 6px 12px;
      border-radius: 4px;
      transition: 100ms all;

      &:focus {
        opacity: 9;
      }
    }
  }
  &__button button {
    color: #fff;
    cursor: pointer;
    border: 1px solid rgb(33, 204, 133);
    background-color: rgb(33, 204, 133);
    padding: 6px 12px;
    border-radius: 4px;
    transition: 100ms all;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
}

.todo-task {
  display: flex;
  border-bottom: 1px solid #e2e2e2;
  padding: 15px 0;

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
</style>
