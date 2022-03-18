import axios from "@/utils/http.js";

export const getData = (options) =>
  axios.request({
    ...options,
  });

export default {};
