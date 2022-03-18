<template>
  <div id="app">
    <!-- <c-header></c-header> -->
    <router-view></router-view>
    <!-- <c-footer></c-footer> -->
  </div>
</template>

<script>
// import CHeader from "@/components/header.vue";
// import CFooter from "@/components/footer.vue";
// export default {
//   name: "App",
//   components: {
//     CHeader,
//     CFooter,
//   },
//   methods: {
//     changeLang(type) {
//       this.$i18n.locale = type;
//     },
//   },
// };
//
</script>
<style lang="less">
#app {
  font-family: "Microsoft YaHei", Helvetica, Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
