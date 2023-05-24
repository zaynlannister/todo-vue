<template>
  <div>
    <div class="todo-list">
      <div class="todo-list__actions">
        <div class="todo-list__input">
          <input
            class="input"
            @keydown.enter="create"
            v-model="input"
            type="text"
            placeholder="Введите задачу"
          />
        </div>
        <div class="todo-list__button">
          <button class="button" @click="create">Создать</button>
        </div>
      </div>
      <todo-task v-for="task in tasksList" :task="task" :date="date" />
    </div>
  </div>
</template>
<script setup>
import TodoTask from "./TodoTask.vue";
import { useTasksStore } from "@/stores/tasks";
import { computed, ref, getCurrentInstance } from "vue";

const props = defineProps(["tasksList", "date"]);
const emit = defineEmits(["create"]);
const input = ref("");

function create() {
  emit("create", input.value);
  input.value = "";
}
</script>
<style lang="scss">
.todo-list {
  &__actions {
    display: flex;
  }

  &__input {
    margin-right: 10px;

    input {
      border-radius: 4px;
      padding: 6px 12px;
    }
  }
  &__button button {
    padding: 6px 12px;
    border-radius: 4px;
  }
}
</style>
