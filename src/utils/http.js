import axios from "axios";
import Vue from "vue";
// import store from "../store";
const getBaseUrl = (env) => {
  let url = {
    production: "https://devapi.chiline.com",
    development: "https://devapi.chiline.com",
    // development: "/",
    test: "/",
  }[env];
  if (!url) {
    url = "/";
  }
  return url;
};

class Axios {
  constructor() {
    console.log("process.env.BASE_URL:" + process.env.BASE_URL);
    console.log(process.env.NODE_ENV);
    this.baseURL = getBaseUrl(process.env.NODE_ENV);
    console.log(this.baseURL);
    // this.timeout = 5000;
    this.withCredentials = true;
  }
  setInterceptors = (instance) => {
    instance.interceptors.request.use(
      (config) => {
        // if (store.getters.token) {
        //   config.headers.Authorization = "Bearer " + store.getters.token;
        // }
        console.log(config)
        return config;
      },
      (err) => Promise.reject(err)
    );
    instance.interceptors.response.use(
      (res) => {
        // if (res.data.code !== 0 && res.data.msg) {
        //   Vue.prototype.$message({
        //     type: "error",
        //     message: res.data.msg,
        //   });
        // }
        return res;
      },
      (err) => {
        if (err.response) {
          // if (err.response.data.msg) {
          //   Vue.prototype.$message({
          //     type: "error",
          //     message: err.response.data.msg,
          //   });
          // }
        } else {
          // if (!window.navigator.online) {
          //   // 断网处理
          //   // todo: jump to offline page
          //   Vue.prototype.$message({
          //     type: "error",
          //     message: "请注意检查网络",
          //   });
          // }
        }
        return Promise.reject(err);
      }
    );
  };
  request(options) {
    const instance = axios.create();
    const config = {
      ...options,
      baseURL: this.baseURL,
      // timeout: this.timeout,
    };
    this.setInterceptors(instance);
    return instance(config);
  }
}
export default new Axios();
