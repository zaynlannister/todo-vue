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
</style>
