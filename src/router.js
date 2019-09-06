import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/travel",
      name: "travel",
      component: () =>
        import("./views/Travel.vue")
    },
    {
      path: "/products",
      name: "products",
      component: () =>
        import("./views/Products.vue")
    },
    {
      path: "/fruits",
      name: "fruits",
      component: () =>
        import("./views/Fruits.vue")
    }
  ]
});
