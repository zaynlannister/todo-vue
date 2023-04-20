<template>
  <div class="app">
    <div class="todo">
      <div class="todo__header">Хорошего дня, username</div>
      <app-table>
        <app-time :time="currentTime" :date="currentDate" />
      </app-table>
      <div class="todo-wrapper">
        <app-table>
          <todo-list></todo-list>
        </app-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppTable from "./components/AppTable.vue";
import AppTime from "./components/AppTime.vue";
import TodoList from "./components/TodoList.vue";
import { format } from "date-fns";
import { ref } from "vue";

let currentTime = ref(format(Date.now(), "HH:mm:ss"));
let currentDate = format(Date.now(), "yyyy-MM-dd");

setInterval(() => {
  currentTime.value = format(Date.now(), "HH:mm:ss");
}, 1000);
</script>
<style lang="scss">
.app {
  width: 880px;
  margin: 0 auto;
}

.todo {
  &__header {
    width: fit-content;
    margin-left: auto;
    padding: 10px 0;
  }

  &-wrapper {
    margin-top: 40px;
  }
}
</style>
