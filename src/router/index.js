import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Products from "../views/ProductsPage.vue";
import Login from "../views/LoginPage.vue";
import Cart from "../views/CartPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import Checkout from "../components/Checkout.vue";
import Confirmation from "../components/Confirmation.vue";

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
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/confirmation",
      name: "confirmation",
      component: Confirmation,
    },
  ],
});

export default router;
