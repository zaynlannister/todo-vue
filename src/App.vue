<template>
  <div>
    <router-view to="/login"></router-view>
  </div>
</template>

<script setup>
import TodoApp from "@/components/TodoApp.vue";
import { onMounted } from "vue";
import { useLoginsStore } from "@/stores/logins";
import { useRouter } from "vue-router";

const router = useRouter();
const isAuthenticated = useLoginsStore().isAuthenticated;

onMounted(() => {
  if (!isAuthenticated) {
    router.push("/login");
  } else {
    router.push("/");
  }
});
</script>
