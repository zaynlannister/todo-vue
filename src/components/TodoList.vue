<template>
  <div class="todo-list">
    <div class="todo-list__actions">
      <div class="todo-list__input">
        <input type="text" placeholder="Введите задачу" />
      </div>
      <div class="todo-list__button">
        <button>Создать</button>
      </div>
    </div>
    <div class="todo-list__tasks">
      <div v-for="task in tasks.tasksList" class="todo-task">
        <div class="todo-task__title">{{ task.title }}</div>
        <div class="todo-task__actions">
          <div class="todo-task__close-button">
            <i class="bi bi-x-square-fill"></i>
          </div>
          <div class="todo-task__checkbox">
            <i class="bi bi-toggle-off"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useTasksStore } from "@/stores/tasks.ts";
const tasks = useTasksStore();
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
