<template>
  <div class="container">
    <c-header></c-header>
    <router-view></router-view>
    <c-footer></c-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import CHeader from "@/components/header.vue";
import CFooter from "@/components/footer.vue";
export default {
  name: "home",
  components: {
    CHeader,
    CFooter,
  },
  created() {
    // $.getJSON("//freegeoip.net/json/?callback=?", function (data) {
    //   console.log(JSON.stringify(data, null, 2));
    // });
    // let res = axios.get("//freegeoip.net/json/?callback=?");
    // res = res.data;
    // console.log(JSON.stringify(res, null, 2));
  },
};
</script>
