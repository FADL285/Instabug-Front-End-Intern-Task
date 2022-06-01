import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import WelcomeView from "../views/WelcomeView.vue";

const routes = [
  { path: "/", redirect: { name: "welcome" } },
  {
    path: "/welcome",
    name: "welcome",
    component: WelcomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
    beforeEnter: () => {
      const authStore = useAuthStore();
      console.log("isLoggedIn", authStore.isLoggedIn);
      if (authStore.isLoggedIn) return { name: "welcome" };
    },
  },
  {
    path: "/:notFound(.*)*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  console.log(to.meta.requiresAuth && !authStore.isLoggedIn);
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return {
      name: "login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
