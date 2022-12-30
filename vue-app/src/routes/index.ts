import { createRouter, createWebHistory } from "vue-router";
export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      name: "calculator",
      path: "/calculator",
      component: () => import("@/views/CalculatorView.vue"),
    },
    {
      name: "marked",
      path: "/marke-down",
      component: () => import("@/views/MarkeDown.vue"),
    },
    {
      name: "modal",
      path: "/reuseable-modal",
      component: () => import("@/views/ReUseable.vue"),
    },
    {
      name: "chat",
      path: "/chat",
      component: () => import("@/views/ChatView.vue"),
    },
    {
      name: "profile",
      path: "/profile",
      component: () => import("@/views/UserProfile.vue"),
    },
    {
      name: "feed-back",
      path: "/feed-back",
      component: () => import("@/views/FeedBack.vue"),
    },
  ],
});

