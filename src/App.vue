<template>
  <div class="app">
    <div class="todo-list">
      <div class="todo-list__header">Хорошего дня, username</div>
      <app-table>
        <app-time :time="currentTime" :date="currentDate" />
      </app-table>
    </div>
  </div>
</template>

<script setup>
import AppTable from "./components/AppTable.vue";
import AppTime from "./components/AppTime.vue";
import { format } from "date-fns";
import { ref } from "vue";

let currentTime = ref(format(Date.now(), "HH:mm:ss"));
let currentDate = format(Date.now(), "yyyy-MM-dd");

setInterval(() => {
  currentTime.value = format(Date.now(), "HH:mm:ss");
}, 1000);
</script>
<style>
.app {
  width: 880px;
  margin: 0 auto;
}

.todo-list__header {
  width: fit-content;
  margin-left: auto;
  padding: 10px 0;
}
</style>
