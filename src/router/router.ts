import { createRouter, createWebHistory } from "vue-router";

import TodoApp from "@/components/TodoApp.vue";
import LoginPage from "@/router/pages/LoginPage.vue";

const routes = [
  { path: "/", component: TodoApp },
  { path: "/login", component: LoginPage },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
