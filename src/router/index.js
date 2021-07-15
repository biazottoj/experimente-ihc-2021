import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/create-new-experiment",
    name: "CreateNewExperiment",
    component: () =>
      import(
        /* webpackChunkName: "create-new-experiment" */ "../views/CreateNewExperiment.vue"
      ),
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: () =>
      import(/* webpackChunkName: "user-profile" */ "../views/UserProfile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
