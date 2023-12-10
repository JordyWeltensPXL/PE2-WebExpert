import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/ProductsPage.vue";
import Login from "../views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
