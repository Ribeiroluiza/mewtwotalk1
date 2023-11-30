import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import ChatsPages from "./pages/ChatsPages.vue";
import MessagesPages from "./pages/MessagesPages.vue";
import UserProfile from "./components/UserProfile.vue";
import Cadastro from "./components/CadastroForm.vue";
import Login from "./components/LoginForm.vue";
import { store } from "./store/store";
import { auth } from "./config/firebase";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    name: "chatPage",
    component: ChatsPages,
    meta: { requiresAuth: true },
  },
  {
    path: "/chat/:id",
    name: "messagePage",
    component: MessagesPages,
    meta: { requiresAuth: true },
  },
  {
    path: "/user/:id",
    name: "UserProfile",
    component: UserProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: Cadastro,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged((user) => {
    if (to.path === "/login" && user) {
      next("/");
      return;
    }
    if (to.path === "/cadastro" && user) {
      next("/");
      return;
    }
    if (to.matched.some((record) => record.meta.requiresAuth) && !user) {
      next("login");
      return;
    }
    next();
  });
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
