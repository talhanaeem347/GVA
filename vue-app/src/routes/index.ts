import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/views/Home.vue"),
    },
    
    {
      name: "calculator",
      path: "/calculator",
      component: () => import("@/views/Calculator.vue"),
    },
    {
      name: "modal",
      path: "/reuseable-modal",
      component: () => import("@/views/ReUseable.vue"),
    },
    {
      name: "chat",
      path: "/chat",
      component: () => import("@/views/Chat.vue"),
    },
    {
      name: "profile",
      path: "/profile",
      component: () => import("@/views/Profile.vue"),
    },
  ],
});

export default router;
