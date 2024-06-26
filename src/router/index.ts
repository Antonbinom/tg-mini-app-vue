import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomePage.vue") },
  { path: "/shop", component: () => import("@/views/ShopPage.vue") },
  { path: "/about", component: () => import("@/views/AboutPage.vue") },
  { path: "/contacts", component: () => import("@/views/ContactsPage.vue") },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
