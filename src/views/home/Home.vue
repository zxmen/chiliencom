<template>
  <div class="container">
    <div class="banner">
      <slider
        animation="fade"
        width="100%"
        height="7.95rem"
        :interval="8000"
        :control-btn="false"
      >
        <slider-item v-for="(item, index) in banner" :key="index">
          <a :href="item.url"
            ><img :src="require(`@/assets/images/home/banner/${item.imgurl}`)"
          /></a>
        </slider-item>
      </slider>
    </div>
    <div class="news">
      <div class="text">
        <p>{{ $t("lang.newsContainerText") }}</p>
        <img src="@/assets/images/home/news/news-title.jpg" alt="" />
      </div>
      <div class="list">
        <a
          :href="item.url"
          class="list-item"
          v-for="(item, index) in newsList"
          :key="index"
        >
          <div class="date">
            <p class="month">{{ item.month }}月</p>
            <p class="year">{{ item.year }}</p>
            <p class="iconfont icon-tongyong_jiantouxiangyou img">
            </p>
          </div>
          <div class="news-text-container">
            <div class="text-container">
              <div class="news-logo">
                <img :src="item.logourl" alt="" />
              </div>
              <div class="title" v-html="item.title">
              </div>
            </div>
          </div>
          <div class="news-img">
            <img :src="item.picurl" alt="" />
          </div>
        </a>
      </div>
      <div class="show">
        <button class="btn" v-show="show" @click="showMore">{{ $t("lang.showMore") }}&nbsp;<span class="iconfont icon-xiangxiajiantou"></span></button>
        <button class="btn" v-show="!show" @click="close">{{ $t("lang.close") }}&nbsp;<span class="iconfont icon-xiangshangjiantou"></span></button>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "@/api";
export default {
  name: "home",
  components: {},
  data() {
    return {
      banner: [],
      newsList: [],
      rate: 0,
      page: 1,
      limit: 10,
      show: true,
      storeList: [],
      stopRequest: false    //storeList有剩余 留作控制最后一次点击查看更多时不发请求，获取storeList的数据
    };
  },
  metaInfo(){
    return {
      title: '首页',
      meta: [
        { name: 'description', content:  'Chiline是英华达公司蓄积研发制造能量，立足大中华市场所创立的自有品牌。以科技创新为核心，赋能产品，满足用户需求。其产品包含：泫音、全家宝、思迈、IronMag。'},
      ]
    }
  },
  created() {
    console.log(process.env.NODE_ENV);
    this.getNewsData(this.page,this.limit);
    let width = document.documentElement.getBoundingClientRect().width;
    this.rate = width / 1920;
    if (this.$i18n.locale == "zh_TW") {
      this.banner = [
        // "fanti/item-1.jpg",
        { imgurl: "fanti/item-1.jpg", url: "https://www.easydr.com.tw" },
        { imgurl: "fanti/item-2.jpg", url: "https://www.chiline.com.tw/" },
        { imgurl: "fanti/item-3.jpg", url: "https://www.easydr.com.tw" },
        { imgurl: "fanti/item-4.jpg", url: "https://www.chiline.com.tw/" },
      ];
    } else {
      this.banner = [
        { imgurl: "jianti/item-1.jpg", url: "https://www.easydr.com.tw" },
        { imgurl: "jianti/item-2.jpg", url: "https://www.chiline.com.cn/" },
        { imgurl: "jianti/item-3.jpg", url: "https://www.easydr.com.tw" },
        { imgurl: "jianti/item-4.jpg", url: "https://www.chiline.com.cn/" },
      ];
    }
  },
  // computed: {
  //   newsContainerText: function () {
  //     return this.$t("lang.newsContainerText");
  //   },
  // },
  watch: {
    "$i18n.locale"(newValue, oldValue) {
      console.log(newValue);
      this.newsList = [],
      this.storeList = [],
      this.page = 1
      this.show = true
      if (newValue == "zh_TW") {
        this.banner = [
          { imgurl: "fanti/item-1.jpg", url: "https://www.easydr.com.tw" },
          { imgurl: "fanti/item-2.jpg", url: "https://www.chiline.com.tw/" },
          { imgurl: "fanti/item-3.jpg", url: "https://www.easydr.com.tw" },
          { imgurl: "fanti/item-4.jpg", url: "https://www.chiline.com.tw/" },
        ];
      }
      if (newValue == "zh_CN") {
        this.banner = [
          { imgurl: "jianti/item-1.jpg", url: "https://www.easydr.com.tw" },
          { imgurl: "jianti/item-2.jpg", url: "https://www.chiline.com.cn/" },
          { imgurl: "jianti/item-3.jpg", url: "https://www.easydr.com.tw" },
          { imgurl: "jianti/item-4.jpg", url: "https://www.chiline.com.cn/" },
        ];
      }
      this.getNewsData(this.page,this.limit);
    },
  },
  methods: {
    async getNewsData(page,limit) {
      console.log(this.$i18n.locale);
      let lang = this.$i18n.locale == "zh_TW" ? 1 : 0;
      let res = await getData({
        url: `/api/querynewslist/${page}/${limit}/${lang}`,
      });
      let list = res.data.data
      console.log(this.newsList);
      list.forEach((item) => {
        item.year = new Date(item.publishdate).getFullYear();
        item.month = new Date(item.publishdate).getMonth() + 1;
      });
      let oldStore = this.storeList
      this.storeList = list.splice(5)
      this.newsList.push(...oldStore)
      this.newsList.push(...list)
      if (this.storeList.length == 0 && this.page > 1) {
        this.show = false
      }else{
        if (this.newsList.length + this.storeList.length == res.data.total && this.page > 1) {
          this.newsList.push(...this.storeList)
          this.show = false
        }
      }
    },
    showMore(){
      this.page++
      this.getNewsData(this.page,this.limit)
    },
    close(){
      this.newsList.splice(5)
      this.show = true
      this.page = 1
    }
    //判断跳转
    // linkTo(e, index) {
    //   if (index == 0) {
    //     let x = e.offsetX;
    //     let y = e.offsetY;
    //     if (y < 750 * this.rate - ((x - 870 * this.rate) * 25) / 6) {
    //       if (this.$i18n.locale == "zh_TW") {
    //         window.location = "https://www.chiline.com.tw";
    //       } else {
    //         window.location = "https://www.chiline.com.cn";
    //       }
    //     } else {
    //       window.location = "http://www.easydr.com.tw/";
    //     }
    //   }
    //   if (index == 1) {
    //     window.location = "http://www.easydr.com.tw/";
    //   }
    //   if (index == 2) {
    //     if (this.$i18n.locale == "zh_TW") {
    //       window.location = "https://www.chiline.com.tw";
    //     } else {
    //       window.location = "https://www.chiline.com.cn";
    //     }
    //   }
    // },
  },
};
</script>

<style lang="less" scoped>
.container {
  .banner {
    border-top: 0.03rem solid #fff;
    width: 100%;
    height: 7.95rem;
    //margin-bottom: 2.36rem;
    margin-bottom: 2.23rem;
    position: relative;
    /deep/.slider {
      // padding-bottom: 1.55rem;
      padding-bottom: 1.23rem;
      background-image: url("~@/assets/images/home/banner/banner-bottom.jpg");
      background-repeat: no-repeat;
      background-position-y: 7.98rem;
      background-size: 100% 1.52rem;
      //overflow: visible;
      // overflow-x: hidden;
      // overflow-y: visible;
      .slider-items {
        height: 100%;
        .slider-item {
          img {
            width: 100%;
            height: 7.95rem;
          }
        }
      }
      .slider-indicators {
        bottom: .615rem;
        transform: translate(-50%,50%);
        display: flex;
        align-items: center;
        .slider-indicator-icon {
          width: 0.12rem;
          height: 0.12rem;
          //background-color: #f2f3f8;
          background-color: #fff;
        }
        .slider-indicator-active {
          //background-color: #00659b;
          background-color: #388e94;
        }
      }
    }
  }
  .banner-bottom {
    border-top: 3px solid #fff;
    margin-bottom: 0.84rem;
    width: 100%;
    // height: 1.52rem;
    background: url("~@/assets/images/home/banner/banner-bottom.jpg");
  }
  .news {
    width: 12rem;
    margin: 0 auto;
    margin-bottom: 1.1rem;
    .text {
      text-align: center;
      p {
        text-align: center;
        font-size: 0.38rem;
        margin-bottom: 0.18rem;
      }
      img {
        width: 0.34rem;
        margin: 0 auto;
        margin-bottom: 0.4rem;
      }
    }
    // .more-news {
    //   font-size: 0.18rem;
    //   margin-bottom: 0.2rem;
    //   text-align: right;
    // }
    // background-color: red;
    .list {
      .list-item {
        display: flex;
        //height: 1.9rem;
        height: 1.85rem;
        align-items: center;
        .date {
          color: #555;
          border-right: 2px solid #999;
          //padding: 0.2rem 0.7rem 0.2rem 0;
          padding: 0.175rem 0.7rem 0.175rem 0;
          p {
            text-align: right;
            margin-bottom: 0.14rem;
          }
          .year {
            font-size: 0.22rem;
          }
          .month {
            font-size: 0.26rem;
            // margin-bottom: 0.15rem;
          }
          .img {
            // width: 100%;
            height: 0.15rem;
            font-size: .24rem;
          }
        }
        .news-text-container {
          display: flex;
          // justify-content: flex-start;
          align-items: center;
          // width: 71.57%;
          //padding: 0.2rem 0.7rem;
          padding: 0.175rem 0.7rem;
          width: 5.8rem;
          .text-container {
            flex: 1;
            margin: 0 auto;
            .news-logo {
              height: 0.25rem;
              margin-bottom: 0.2rem;
              // width: auto;
              img {
                height: 0.25rem;
                width: auto;
              }
            }
            .title {
              font-size: 0.26rem;
              line-height: 0.36rem;
              font-weight: bolder;
              text-overflow: ellipsis;
              height: 0.72rem;
              overflow: hidden;
              // white-space: nowrap;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              // sup {
              //   position: relative;
              //   font-size: .12rem;
              //   line-height: 0;
              //   vertical-align: baseline;
              // }
            }
            .content-text {
              padding-top: 0.1rem;
              font-size: 0.18rem;
              line-height: 0.28rem;
              color: #9999b1;
              height: 0.84rem;
              overflow: hidden;
              text-overflow: ellipsis;
              // white-space: nowrap;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }
        }
        .news-img {
          margin-top: 0.175rem;
          width: 3rem;
          height: 1.5rem;
          img {
            height: 100%;
          }
        }
      }
      .list-item:hover {
        .date {
          color: #388e94;
          border-color: #388e94;
          .img {
            color: #388e94;
          }
        }
        .news-text-container {
          .text-container {
            color: #388e94;
          }
        }
      }
    }
    .show{
      margin-top: .6rem;
      display: flex;
      justify-content: center;
      .btn{
        cursor: pointer;
        border-radius: .2rem;
        border: 1px solid #388e94;
        color: #388e94;
        background: transparent;
        padding: .12rem .2rem;
        font-size: .2rem;
        // line-height: .24rem;
        outline: none !important;
        span{
          font-size: .12rem;
        }
      }
      .btn:hover{
        background: #388e94;
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .container{
    .news{
      width: 13rem;
      .text{
        font-size: .46rem;
      }
      .list{
        .list-item{
          height: 2.85rem;
          .news-text-container{
            padding: .375rem .7rem;
            .text-container{
              .news-logo{
                height: .35rem;
              }
              .title{
                font-size: .36rem;
                sup{
                  font-size: .22rem;
                }
              }
            }
          }
          .news-img{
            margin-top: .225rem;
            width: 4rem;
            height: 2rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .container{
    .news{
      .list{
        .list-item{
          .news-text-container{
            .text-container{
              .title{
                font-size: 8px;
                line-height: 9px;
                height: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
