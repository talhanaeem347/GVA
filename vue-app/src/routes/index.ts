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
      name: "calander",
      path: "/calander",
      component: () => import("@/views/CalanderView.vue"),
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
      name: "feedback",
      path: "/feedback",
      component: () => import("@/views/FeedBack.vue"),
    },
    {
      name: "game",
      path: "/game",
      component: () => import("@/views/GameView.vue"),
    },
  ],
});

