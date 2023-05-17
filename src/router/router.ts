import { createRouter, createWebHistory } from "vue-router";

import TodoApp from "@/components/TodoApp.vue";

const routes = [{ path: "/", component: TodoApp }];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
