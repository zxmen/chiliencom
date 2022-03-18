<template>
  <div class="fade-slider">
    <div
      :class="[currentIndex == index ? 'active item' : 'item']"
      v-for="(item, index) in bannerList"
      :key="index"
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/images/honor/banner/' + item.backurl) +
          ')',
      }"
    >
      <!-- <img
        :src="require(`@/assets/images/honor/banner/${item.backurl}`)"
        alt=""
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        { backurl: "01.jpg", imgurl: ["jianti/01.png", "fanti/01.png"] },
        { backurl: "02.jpg", imgurl: ["jianti/01.png", "fanti/01.png"] },
        { backurl: "03.jpg", imgurl: ["jianti/01.png", "fanti/01.png"] },
        { backurl: "04.jpg", imgurl: ["jianti/01.png", "fanti/01.png"] },
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    this.autoplay();
  },
  methods: {
    autoplay() {
      setInterval(() => {
        if (this.currentIndex < this.bannerList.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
        // alert(1);
      }, 8000);
    },
  },
};
</script>

<style lang="less" scoped>
.fade-slider {
  position: relative;
  width: 100%;
  height: 7.5rem;
  .item {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    background-size: 100%;
    // transition: opacity 2s;
  }
  .active {
    opacity: 1;
    animation: move 10s linear;
  }
}
@keyframes move {
  0% {
    background-position-y: 0;
  }
  80% {
    background-position-y: -4.5rem;
  }
  100% {
    background-position-y: -4.5rem;
  }
}
</style>
