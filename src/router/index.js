import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/home/Home.vue";
import VueMeta from "vue-meta";
import Main from "../views/Main.vue";

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    // redirect: "/home",
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/home/Home"),
      },
      {
        path: "/cn",
        name: "home",
        component: () => import("@/views/home/Home"),
      },
      {
        path: "/tw",
        name: "home",
        component: () => import("@/views/home/Home"),
      },
      {
        path: "/en",
        name: "home",
        component: () => import("@/views/brand/Brand"),
      },
      {
        path: "brand",
        name: "brand",
        component: () => import("@/views/brand/Brand"),
      },
      {
        path: "honor",
        name: "honor",
        component: () => import("@/views/honor/Honor"),
      },
      {
        path: "patents",
        name: "patents",
        component: () => import("@/views/patents/Patents"),
      },
    ],
  },
  {
    path: "/cn",
    name: "Main",
    component: Main,
    redirect: "/cn/",
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/home/Home"),
      },
      {
        path: "brand",
        name: "brand",
        component: () => import("@/views/brand/Brand"),
      },
      {
        path: "honor",
        name: "honor",
        component: () => import("@/views/honor/Honor"),
      },
      {
        path: "patents",
        name: "patents",
        component: () => import("@/views/patents/Patents"),
      },
    ],
  },
  {
    path: "/tw",
    name: "Main",
    component: Main,
    redirect: "/tw/",
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/home/Home"),
      },
      {
        path: "cn",
        name: "home",
        component: () => import("@/views/home/Home"),
      },
      {
        path: "tw",
        name: "home",
        component: () => import("@/views/home/Home"),
      },
      {
        path: "brand",
        name: "brand",
        component: () => import("@/views/brand/Brand"),
      },
      {
        path: "honor",
        name: "honor",
        component: () => import("@/views/honor/Honor"),
      },
      {
        path: "patents",
        name: "patents",
        component: () => import("@/views/patents/Patents"),
      },
    ],
  },
];

// let navLang = navigator.language;
// router.beforeEach((to,from,next) => {
//   console.log('to.path:' + to.path)
//   console.log(currentLang)
//   if (to.path == "/" && navLang == 'en') {
//     console.log('yingwen')
//     next({
//       path: '/en',
//     })
//   }
//   if (to.path == "/" && navLang == 'zh_CN') {
//     console.log('yingwen')
//     next({
//       path: '/cn',
//     })
//   }
//   if (to.path == "/" && navLang == 'zh_TW') {
//     console.log('yingwen')
//     next({
//       path: '/tw',
//     })
//   }
// })


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // base: "/dist",
  // mode: "hash",
  routes,
});

// router.beforeEach((to, from, next) => {

//   next( vm => {
//     console.log(vm.$refs.dropdown);
//     vm.$refs.dropdown.style.display = "none";
//   })
// })

export default router;
