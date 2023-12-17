import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Products from "../views/ProductsPage.vue";
import Login from "../views/LoginPage.vue";
import Cart from "../views/CartPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";

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
      path: "/products/:id",
      name: "productDetailPage",
      component: ProductDetailPage,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
