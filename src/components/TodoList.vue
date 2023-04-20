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
  </div>
</template>
<script setup></script>
<style>
input,
button {
  outline: none;
  border: none;
}

.todo-list__actions {
  display: flex;
}

.todo-list__input {
  margin-right: 10px;
}

.todo-list__input input {
  opacity: 0.6;
  border: 1px solid #909090;
  padding: 6px 12px;
  border-radius: 4px;
}

.todo-list__input input:focus {
  opacity: 9;
}

.todo-list__button button {
  color: #fff;
  cursor: pointer;
  border: 1px solid rgb(33, 204, 133);
  background-color: rgb(33, 204, 133);
  padding: 6px 12px;
  border-radius: 4px;
  transition: 100ms all;
}

.todo-list__button button:hover {
  background-color: #fff;
  color: #000;
}
</style>
