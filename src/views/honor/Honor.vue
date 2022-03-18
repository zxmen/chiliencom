<template>
  <div class="honor">
    <div class="banner">
      <img
        :src="require(`@/assets/images/honor/banner/${bannerCover}`)"
        alt=""
      />
      <slider
        animation="fade"
        width="100%"
        height="7.5rem"
        :interval="8000"
        :autoplay="true"
        :control-btn="false"
        :indicators="false"
      >
        <slider-item
          ref="firstBanner"
          v-for="(item, index) in banner"
          :key="index"
        >
          <div
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/images/honor/banner/' + item.backurl) +
                ')',
            }"
          >
          </div>
        </slider-item>
      </slider>
    </div>
    <div class="container">
      <div class="margin">
        <div class="title">
          <div class="text">{{ $t("lang.honorTitle") }}</div>
          <div class="icon"></div>
        </div>
        <div class="mask"></div>
        <div class="list">
          <div class="item" v-for="(item, index) in honor" :key="index">
            <div class="date">{{ item.date }}<i class="dot"></i></div>
            <div class="container">
              <div class="title">{{ item.title }}</div>
              <div class="img">
                <img
                  v-for="(img, i) in item.imgurl"
                  :key="i"
                  :src="require(`@/assets/images/honor/list/${img}`)"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [],
      bannerCover: [],
      bannerCoverList: ["jianti/01.png", "fanti/01.png"],
      bannerList: [
        { backurl: "01.jpg", imgurl: ["jianti/01.png", "fanti/01.png"] },
        { backurl: "02.jpg", imgurl: ["jianti/01.png", "fanti/01.png"] },
        { backurl: "03.jpg", imgurl: ["jianti/01.png", "fanti/01.png"] },
        { backurl: "04.jpg", imgurl: ["jianti/01.png", "fanti/01.png"] },
      ],
      honor: [],
      honorList: [
        {
          date: "2021年4月",
          title: [
            "全家宝荣获2021德国iF产品设计奖",
            "全家寶榮獲2021德國iF產品設計獎",
          ],
          imgurl: ["IF.jpg"],
        },
        {
          date: "2021年3月",
          title: [
            "泫音Mojito真无线蓝牙耳机荣获2021德国红点设计大奖",
            "泫音Mojito真無線藍牙耳機榮獲2021德國紅點設計大獎",
          ],
          imgurl: ["reddot.jpg"],
        },
        {
          date: "2020年12月",
          title: [
            "英华达与荣文生医共同开发的IronMag®循环肿瘤细胞自动化检测系统荣获第十七届新创奖",
            "英華達與榮文生醫共同開發的IronMag®循環腫瘤細胞自動化檢測系統榮獲第十七屆新創獎",
          ],
          imgurl: ["xinchaung.jpg"],
        },
        {
          date: "2020年11月",
          title: ["全家宝荣获2021年台湾精品奖", "全家寶榮獲2021年台灣精品獎"],
          imgurl: ["jingpin.jpg"],
        },
        {
          date: "2019年12月",
          title: [
            "全家宝全方位生理量测系统获得三项SNQ品质标章——医疗保健器材类",
            "全家寶全方位生理量測系統獲得SNQ品質標章——醫療保健器材類",
          ],
          imgurl: ["SQN.jpg"],
        },
      ],
    };
  },
    metaInfo(){
    return {
      title: '品牌殊荣',
      meta: [
        { name: 'description', content:  'Chiline是英华达公司蓄积研发制造能量，立足大中华市场所创立的自有品牌。以科技创新为核心，赋能产品，满足用户需求。其产品包含：泫音、全家宝、思迈、IronMag。'},
      ]
    }
  },
  components: {
    // FadeSlider,
  },
  created() {
    this.changeBanner();
    // this.autoplay();
    this.changeHonor();
  },
  watch: {
    "$i18n.locale"(newValue, oldValue) {
      this.changeBanner();
      this.changeHonor();
    },
  },
  methods: {
    changeBanner() {
      this.banner = [];
      this.bannerCover = "";
      this.bannerList.forEach((item) => {
        let obj = {
          backurl: item.backurl,
          imgurl:
            this.$i18n.locale == "zh_CN" ? item.imgurl[0] : item.imgurl[1],
        };
        this.banner.push(obj);
      });
      this.bannerCover =
        this.$i18n.locale == "zh_CN"
          ? this.bannerCoverList[0]
          : this.bannerCoverList[1];
    },
    changeHonor() {
      this.honor = [];
      this.honorList.forEach((item) => {
        let obj = {
          date: item.date,
          imgurl: item.imgurl,
          title: this.$i18n.locale == "zh_CN" ? item.title[0] : item.title[1],
        };
        this.honor.push(obj);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.honor {
  margin-bottom: 1.1rem;
  .banner {
    position: relative;
    height: 7.5rem;
    border-top: 0.03rem solid #fff;
    margin-bottom: 1rem;
    > img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1000;
    }
    .slider {
      background: #dfdddd;
      height: 7.5rem;
      overflow: hidden;
      position: relative;
      .slider-item {
        // background: #388e94;
        // height: 100%;
        height: 7.5rem;
        transition: all 1s ease;
        animation: move 8s infinite linear;
        div {
          height: 7.5rem;
          background: no-repeat;
          background-size: 100%;
          animation: move 8s infinite linear;
          // background-position: center;
          // animation: 2s o ease, 8s f linear;
        }
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
      }
      // .slider-item:first-child {
      //   div {
      //     animation: move1 8s infinite linear;
      //   }
      // }
      // .slider-item:nth-child(2) {
      //   div {
      //     animation: move2 8s infinite linear;
      //   }
      // }
      // .slider-item:nth-child(3) {
      //   div {
      //     // background-position: center;
      //     animation: move3 8s infinite linear;
      //   }
      // }
      // .slider-item:last-child {
      //   div {
      //     animation: move4 8s infinite linear;
      //   }
      // }
    }
  }
  .container {
    // margin-bottom: 1rem;
    .margin {
      width: 12rem;
      margin: 0 auto;
      position: relative;
      > .title {
        // position: absolute;
        // left: 50%;
        // top: 0;
        // transform: translate(-50%);
        font-size: 0.38rem;
        margin-bottom: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .text {
          margin-bottom: 0.18rem;
        }
        .icon {
          width: 1rem;
          height: 0.04rem;
          background: #388e94;
        }
      }
      .mask {
        position: absolute;
        top: 1.17;
        left: 1.9rem;
        background: #fff;
        width: 0.12rem;
        height: 0.07rem;
        z-index: 100;
      }
      .list {
        .item {
          display: flex;
          position: relative;
          font-size: 0.26rem;
          .date {
            color: #388e94;
            width: 1.3rem;
            margin-right: 0.7rem;
            position: relative;
            .dot {
              display: block;
              position: absolute;
              top: 0.07rem;
              right: -0.77rem;
              width: 0.12rem;
              height: 0.12rem;
              border-radius: 50%;
              background: #388e94;
              // margin-left: 0.7rem;
            }
          }
          .container {
            // width: 9.36rem;
            flex: 1;
            padding-bottom: 0.8rem;
            padding-left: 0.7rem;
            border-left: 0.02rem solid #999;
            .title {
              font-size: 0.26rem;
              font-weight: bolder;
              margin-bottom: 0.3rem;
            }
            .img {
              img {
                margin-bottom: 0.2rem;
              }
            }
          }
        }
        .item:last-child {
          .container {
            padding-bottom: 0;
          }
        }
      }
    }
  }
}
@keyframes o {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes f {
  0% {
    transform: scale(1.2);
    transform-origin: bottom left;
  }
  100% {
    transform: scale(1);
    transform-origin: top right;
  }
}
@keyframes move {
  0% {
    background-position-y: 0;
    //top: 0;
    // transform: scale(1);
    // background-size: 100%;
    opacity: 0.5;
  }
  10% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
  }
  98% {
    opacity: 1;
  }
  100% {
    background-position-y: -4.5rem;
    //top: -6.98rem;
    // transform: scale(0.5);
    // background-size: 50%;
    opacity: 0.5;
  }
}
@keyframes move1 {
  0% {
    background-position-y: 0.1;
    //top: 0;
    // transform: scale(1);
    // background-size: 100%;
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    background-position-y: -4.5rem;
    //top: -6.98rem;
    // transform: scale(0.5);
    // background-size: 50%;
    opacity: 0.1;
  }
}
@keyframes move2 {
  0% {
    background-position-y: 0;
    //top: 0;
    // transform: scale(1);
    // background-size: cover;
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    background-position-y: -4.5rem;
    //top: -3.47rem;
    // transform: scale(0.68);
    // background-size: 100%;
    opacity: 0;
  }
}
@keyframes move3 {
  0% {
    //top: 0;
    // transform: scale(1);
    //background-size: 44rem;
    background-position-y: 0;
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    //top: -0.95rem;
    // transform: scale(0.9);
    //background-size: 29rem;
    background-position-y: -4.5rem;
    opacity: 0;
  }
}
@keyframes move4 {
  0% {
    background-position-y: 0;
    //top: 0;
    // transform: scale(1);
    // background-size: 100%;
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    background-position-y: -4.5rem;
    //top: -1.17rem;
    // transform: scale(0.4);
    // background-size: 40%;
    opacity: 0;
  }
}
@media screen and (max-width: 590px) {
  .honor{
    .container{
      .margin{
        .list{
          .item{
            .date{
              width: 45px;
              .dot{
                right: -0.8rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
