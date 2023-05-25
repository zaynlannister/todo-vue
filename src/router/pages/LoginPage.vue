<template>
  <div class="container">
    <div class="login-container">
      <div class="login__page">
        <p class="login__page-title">Регистрация</p>
        <div class="login__page-actions">
          <input
            class="input login__page-input"
            type="text"
            placeholder="Введите имя"
          />

          <input
            class="input login__page-input"
            placeholder="Введите пароль"
            type="text"
          />

          <button @click="register" class="button login__page-button">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { useLoginsStore } from "@/stores/logins";
import { useRouter } from "vue-router";

const router = useRouter();
const logins = useLoginsStore();
const isAuthenticated = ref(false);

provide("isAuthenticated", isAuthenticated);

function register() {
  console.log(logins.register("admin1", "admin1"));
}
</script>

<style lang="scss">
p {
  margin: 0;
}

.container {
  width: 100vw;
  margin: 0 auto;
  background-color: #ffff;
  height: 100vh;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}

.login-container {
  background-color: #ffff;
}

.login__page {
  width: 350px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  padding: 40px 30px;
  border-radius: 4px;
  border: 1px solid #b1b1b1;
  //box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);

  &-title {
    margin-bottom: 20px;
  }

  &-actions {
    display: flex;
    flex-direction: column;
  }

  &-input {
    margin-bottom: 20px;
  }

  &-button {
    margin-top: 20px;
  }

  &-button,
  &-input {
    padding: 8px 10px;
    border-radius: 4px;
  }
}
</style>
