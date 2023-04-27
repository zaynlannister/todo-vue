<template>
  <div>
    <div class="todo-list__tasks">
      <div class="todo-task">
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
const props = defineProps(["task"]);
</script>

<style lang="scss"></style>
