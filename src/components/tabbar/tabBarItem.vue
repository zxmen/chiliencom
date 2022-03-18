<template>
  <div
    class="tab-bar-item img-item"
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    ref="countWidth"
  >
    <a :href="url || 'javascript:void(0)'">
      <div v-if="qrcode">
        <!-- <slot name="qrcode"></slot> -->
        <div v-show="isActive" class="qrcode">
          <slot name="qrcode"></slot>
        </div>
      </div>
      <div v-show="!isActive" class="img-container">
        <slot name="img"></slot>
      </div>
      <div v-show="isActive" class="img-container">
        <slot name="img-active"></slot>
      </div>
      <div><slot name="text"></slot></div>
    </a>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    url: {
      type: String,
    },
    qrcode: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  // created() {
  //   console.log(this.qrcode);
  // },
  // mounted() {
  //   this.$nextTick(() => {
  //     console.log(this.$refs.countWidth);
  //     console.log(this.$refs.countWidth.querySelector("img").width);
  //   });
  // },
};
</script>

<style lang="less" scoped>
.tab-bar-item {
  a {
    height: 100%;
    position: relative;
    .img-container {
      height: 100%;
      width: auto;
      display: flex;
      align-items: center;
    }
    .qrcode {
      position: absolute;
      left: -0.46rem;
      top: -1.6rem;
      width: 1.4rem;
      height: 1.4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
