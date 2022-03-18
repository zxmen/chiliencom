import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import "normalize.css";
import "@/assets/css/reset.css";
import "@/assets/font/iconfont.css";
import "./plugins/rem.js";
// import "./plugins/helang.js";
import VueI18n from "vue-i18n";
import EasySlider from "vue-easy-slider";

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(EasySlider);

let navLang = navigator.language;

console.log(window.location.pathname)
// const navLang = "zh-TW";
// console.log(navLang);
let currentLang;
if (navLang == "zh-CN" || navLang == "zh-SG" || navLang == "zh-MY") {
  currentLang = "zh_CN";
}
if (navLang == "zh-TW" || navLang == "zh-HK" || navLang == "zh-MO") {
  currentLang = "zh_TW";
}
// console.log(currentLang);
if (window.location.pathname.match('/cn')) {
  currentLang = "zh_CN";
}
if (window.location.pathname.match('/tw')) {
  currentLang = "zh_TW";
}
const localLang =
  currentLang === "zh_CN" || currentLang === "zh_TW" ? currentLang : false;
// const lang = localLang || "zh_CN";
// Vue.config.lang = lang;
//localStorage.getItem("lang") ||
// console.log(localLang);
const i18n = new VueI18n({
  locale: localLang || localStorage.getItem("lang") || "zh_TW",
  messages: {
    zh_CN: require("@/lang/zh-CN.js"),
    zh_TW: require("@/lang/zh-TW.js"),
  },
});


new Vue({
  router,
  // store,
  i18n,
  render: (h) => h(App),
  // mounted () {
  //   document.dispatchEvent(new Event('render-event'))
  // }
}).$mount("#app");
