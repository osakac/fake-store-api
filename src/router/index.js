import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("@/views/CategoriesPage"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("@/views/ProductPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
