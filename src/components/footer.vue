<template>
  <div class="container">
    <div class="footer-top" ref="footer">
      <div class="margin" :class="$i18n.locale == 'en' ? 'en-margin' : ''">
        <div class="left footer-top-item">
          <div class="left-container">
            <div class="logo" :class="$i18n.locale == 'en' ? 'en-logo' : ''">
              <h3 >{{ $t("lang.footLeftCata") }}</h3>
              <a :href="[this.$i18n.locale == 'zh_CN'?'https://www.chiline.com.cn':'https://www.chiline.com.tw']"><img src="@/assets/images/footer/left/xuanyin.png" alt="" /></a>
              <!-- <img src="@/assets/images/footer/left/xuanyin.png" alt="" /> -->
            </div>
            <div class="contact">
              <div class="text">
                <!-- <p>{{ $t("lang.contactUs") }}</p>
                <p>
                  {{ $t("lang.blog") }} :
                  <a href="http://blog.chiline.com.cn">{{
                    $t("lang.blogContent")
                  }}</a>
                </p>
                <p>{{ $t("lang.tel") }} : {{ $t("lang.telContent") }}</p>
                <p>{{ $t("lang.email") }} : {{ $t("lang.emailContent") }}</p> -->
                <p v-for="(val, key) in leftContactText" :key="key">
                  {{ val.name || val }}
                  <a v-if="val.url" :href="val.url">: {{ val.url }}</a>
                </p>
              </div>
              <TabBar>
                <TabBarItem
                  v-for="item in leftTabBar"
                  :qrcode="item.qrcode"
                  :url="item.url"
                  :key="item.qrcode"
                >
                  <template v-slot:qrcode>
                    <img
                      :src="require(`@/assets/images/footer/${item.qrcode}`)"
                    />
                  </template>
                  <template v-slot:img>
                    <img
                      :class="[$i18n.locale == 'zh_CN' ? 'wb' : '']"
                      :src="require(`@/assets/images/footer/${item.src}`)"
                    />
                  </template>
                  <template v-slot:img-active>
                    <img
                      :class="[$i18n.locale == 'zh_CN' ? 'wb' : '']"
                      :src="require(`@/assets/images/footer/${item.activeSrc}`)"
                    />
                  </template>
                </TabBarItem>
              </TabBar>
            </div>
          </div>
        </div>
        <div class="right footer-top-item">
          <div class="right-container">
            <div class="logo" :class="$i18n.locale == 'en' ? 'en-logo' : ''">
              <h3>{{ $t("lang.footRightCata") }}</h3>
              <a :href="[this.$i18n.locale == 'zh_CN'?'https://www.easydr.com.tw':'https://www.easydr.com.tw']"><img src="@/assets/images/footer/right/quanjiabao.png" alt="" /></a>
              <a :href="[this.$i18n.locale == 'zh_CN'?'https://www.easydr.com.tw':'https://www.easydr.com.tw']"><img src="@/assets/images/footer/right/simai.png" alt="" /></a>
              <a :href="[this.$i18n.locale == 'zh_CN'?'https://www.easydr.com.tw':'https://www.easydr.com.tw']"><img src="@/assets/images/footer/right/IronMag.png" alt="" /></a>
            </div>
            <div class="contact">
              <div class="text">
                <!-- <p>{{ $t("lang.contactUs") }}</p>
                <p>
                  {{ $t("lang.freeTel") }} : {{ $t("lang.freeTelContent") }}
                </p>
                <p>
                  {{ $t("lang.serviceTime") }} :
                  {{ $t("lang.serviceTimeContent") }}
                </p> -->
                <!-- <p>{{ $t("lang.follow") }} :</p> -->
                <p v-for="(val, key) in rightContactText" :key="key">
                  {{ val.name || val }}
                  <a v-if="val.url" :href="val.url">: {{ val.url }}</a>
                </p>
              </div>
              <TabBar>
                <TabBarItem
                  v-for="item in rightTabBar"
                  :qrcode="item.qrcode"
                  :url="item.url"
                  :key="item.qrcode"
                >
                  <template v-slot:qrcode>
                    <img
                      :src="require(`@/assets/images/footer/${item.qrcode}`)"
                    />
                  </template>
                  <template v-slot:img>
                    <img :src="require(`@/assets/images/footer/${item.src}`)" />
                  </template>
                  <template v-slot:img-active>
                    <img
                      :src="require(`@/assets/images/footer/${item.activeSrc}`)"
                    />
                  </template>
                </TabBarItem>
              </TabBar>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="margin">
        <div class="text">
          <div class="beian">
            <a href="https://beian.miit.gov.cn/#/Integrated/index">{{
              $t("lang.beian")
            }}</a>
          </div>
          <div class="copyright">
            {{ $t("lang.copyright") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/plugins/rem.js";
import TabBar from "@/components/tabbar/tabBar.vue";
import TabBarItem from "@/components/tabbar/tabBarItem.vue";
export default {
  data() {
    return {
      leftContactText: {},
      leftContactTextList: [
        {
          contact: "联系我们",
          email: "电子邮件 : service@chiline.com.cn",
          tel: "电话 ：021-64955505",
          service: "服务时间 : 周一至周五 09:00-17:00",         
        },
        {
          contact: "聯絡我們",
          email: "電子郵件：service@chilne.com.tw",
          tel: "免付費電話 : 0800-866-698",
          service: "服務時間 : 週一至週五 09:00-17:00",
          
        },
        {
          contact: "Contact us",
          email: "Email：service@chilne.com.tw",
          tel: "Tel: 0800-866-698",
          service: "Service available:  9:00 ~ 17:00  Mon. - Fri.",
          
        },
      ],
      rightContactText: {},
      rightContactTextList: [
        {
          contact: "联系我们",
          // tel: "免付费电话 : 0800-310-168",
          email: "电子邮件 : service@easydr.com.tw",
          tel: "电话 : 021-64951822",
          service: "服务时间 : 周一至周五 09:00-17:00",
        },
        {
          contact: "聯絡我們",
          // web: {
          //   name: "官方網站",
          //   url: "https://www.easydr.com.tw",
          // },
          email: "電子郵件 : service@easydr.com.tw",
          tel: "免付費電話 : 0800-310-168",
          service: "服務時間 :  9:00 ~ 17:00  Mon. - Fri.",
        },
        {
          contact: "Contact us",
          // web: {
          //   name: "官方網站",
          //   url: "https://www.easydr.com.tw",
          // },
          email: "Email: service@easydr.com.tw",
          tel: "Tel: 0800-310-168",
          service: "Service available:  9:00 ~ 17:00  Mon. - Fri.",
        },
      ],
      leftTabBar: [],
      leftTabBarList: [
        {
          src: ["weixin.png", "facebook.png"],
          activeSrc: ["active/weixin.png", "active/facebook.png"],
          qrcode: "weixin-qrcode.jpg",
          url: "https://www.facebook.com/chiline.tw/",
        },
        {
          src: ["weibo.png", "youtube.png"],
          activeSrc: ["active/weibo.png", "active/youtube.png"],
          qrcode: "weibo-qrcode.jpg",
          url: "https://www.youtube.com/channel/UCE3WpACHC1zOe1UL2DlwB6A",
        },
        {
          src: ["douyin.png", "ig.png"],
          activeSrc: ["douyin-active.png", "active/ig.png"],
          qrcode: "douyin-qrcode.jpg",
          url: "https://www.instagram.com/chiline_tw/",
        },
      ],
      rightTabBar: [],
      rightTabBarList: [
        {
          url: "https://www.facebook.com/%E5%85%A8%E5%AE%B6%E5%AF%B6-101816384720354/?ref=br_rs",
          src: "facebook.png",
          activeSrc: "active/facebook.png",
        },
        {
          url: "https://www.youtube.com/channel/UCd3f1Rxk6fa-HiWvJp0kJSw/featured?view_as=subscriber",
          src: "youtube.png",
          activeSrc: "active/youtube.png",
        },
        {
          url: "http://line.me/ti/p/%40ogw6378n",
          src: "line.png",
          activeSrc: "active/line.png",
        },
      ],
    };
  },
  components: {
    TabBar,
    TabBarItem,
  },
  created() {
    // this.$nextTick(() => {
    //   console.log(this.$refs.footer);
    // });
    this.changeFooter();
  },
  watch: {
    "$i18n.locale"(newValue, oldValue) {
      this.changeFooter();
    },
  },
  methods: {
    changeFooter() {
      this.leftTabBar = [];
      this.rightTabBar = [];
      this.leftContactText = {};
      this.rightContactText = {};
      if (this.$i18n.locale == "zh_CN") {
        //左边
        this.leftTabBarList.forEach((item) => {
          let obj = {
            src: item.src[0],
            activeSrc: item.activeSrc[0],
            qrcode: item.qrcode,
          };
          this.leftTabBar.push(obj);
        });
        this.leftContactText = this.leftContactTextList[0];
        //右边
        this.rightTabBar = [
          {
            src: "weixin.png",
            activeSrc: "active/weixin.png",
            qrcode: "yiliao-qrcode.jpg",
          },
        ];
        this.rightContactText = this.rightContactTextList[0];
      }
      if (this.$i18n.locale == "zh_TW") {
        //左边
        this.leftTabBarList.forEach((item) => {
          let obj = {
            src: item.src[1],
            activeSrc: item.activeSrc[1],
            url: item.url,
          };
          this.leftTabBar.push(obj);
        });
        this.leftContactText = this.leftContactTextList[1];
        //右边
        this.rightTabBar = this.rightTabBarList;
        this.rightContactText = this.rightContactTextList[1];
      }
      if (this.$i18n.locale == "en") {
        //左边
        this.leftTabBarList.forEach((item) => {
          let obj = {
            src: item.src[1],
            activeSrc: item.activeSrc[1],
            url: item.url,
          };
          this.leftTabBar.push(obj);
        });
        this.leftContactText = this.leftContactTextList[2];
        //右边
        this.rightTabBar = this.rightTabBarList;
        this.rightContactText = this.rightContactTextList[2];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  .footer-top {
    background-color: #e8e8e8;
    .margin {
      box-sizing: border-box;
      height: 3.7rem;
      width: 15rem;
      margin: 0 auto;
      padding-top: 0.66rem;
      display: flex;
      justify-content: space-between;
      .left {
        box-sizing: border-box;
        // width: 50%;
        .left-container {
          box-sizing: border-box;
          // width: 100%;
          margin: 0 auto;
          display: flex;
          color: #000;
          .logo {
            // width: 1.84rem;
            margin-right: 0.65rem;
            h3 {
              font-size: 0.32rem;
              margin-bottom: 0.14rem;
            }
            img {
              height: 0.25rem;
              width: auto;
              margin-bottom: 0.14rem;
            }
          }
          .en-logo{
            margin-right: .2rem;
            h3{
              font-size: .26rem;
            }
          }
          .contact {
            // width: 50.42%;
            font-size: 0.22rem;
            .text {
              margin-bottom: 0.36rem;
              height: 1.55rem;
              p {
                padding-bottom: 0.14rem;
              }
            }
            .img {
              //   // height: 1.5rem;
              display: flex;
              align-items: center;
              .img-item {
                margin-right: 0.4rem;
                height: 0.45rem;
                img {
                  height: 100%;
                  width: auto;
                }
              }
              // .img-item:first-child {
              //   //width: 0.56rem;
              //   // margin-right: 0.4rem;
              // }
              // .img-item:nth-child(2) {
              //   //width: 0.5rem;
              //   // margin-left: 0.03rem;
              //   // margin-right: 0.43rem;
              //   height: 0.33rem;
              // }
              .img-item:nth-child(2) {
                //width: 0.48rem;
                .img-container {
                  img {
                    height: 0.33rem;
                  }
                }
                /deep/ .img-container {
                  .wb {
                    height: 0.45rem;
                  }
                }
              }
              // .img-item:last-child {
              //   //width: 0.45rem;
              //   // margin-left: 0.05rem;
              // }
            }
          }
        }
      }
      .right {
        box-sizing: border-box;
        // width: 50%;
        .right-container {
          box-sizing: border-box;
          // width: 100%;
          margin: 0 auto;
          display: flex;
          color: #000;
          .logo {
            // width: 1.84rem;
            margin-right: 0.65rem;
            h3 {
              font-size: 0.32rem;
              margin-bottom: 0.14rem;
            }
            img {
              height: 0.25rem;
              width: auto;
              margin-bottom: 0.14rem;
            }
          }
          .en-logo{
            margin-right: .2rem;
            h3{
              font-size: .26rem;
            }
          }
          .contact {
            // width: 50.42%;
            font-size: 0.22rem;
            .text {
              margin-bottom: 0.36rem;
              height: 1.55rem;
              p {
                padding-bottom: 0.14rem;
              }
            }
            .img {
              // height: 1.5rem;
              display: flex;
              align-items: center;
              .img-item {
                margin-right: 0.4rem;
                height: 0.45rem;

                div {
                  height: 0.45rem;
                  img {
                    height: 100%;
                    width: auto;
                  }
                }
              }
              // .img-item:first-child {
              //   width: 0.45rem;
              // }
              .img-item:nth-child(2) {
                //width: 0.48rem;
                height: 0.33rem;
              }
              // .img-item:last-child {
              //   width: 0.476rem;
              // }
            }
          }
        }
      }
    }
    .en-margin{
      width: 16rem;
    }
  }
  .footer-bottom {
    height: 0.55rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #398d95;
    .text {
      display: flex;
      align-items: center;
      // padding-right: 0.6rem;
      font-size: 0.14rem;
      .beian {
        padding-right: 0.16rem;
        a {
          color: #fff;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .container{
    .footer-top{
      height: auto;
      padding: .66rem 0;
      .margin{
        width: 17rem;
        .left{
          .left-container{
            .contact{
              font-size: .36rem;
              .text{
                margin-bottom: .2rem;
                height: auto;
              }
            }
          }
        }
        .right{
          .right-container{
            .contact{
              font-size: .36rem;
              .text{
                margin-bottom: .2rem;
                height: auto;
              }
            }
          }
        }
      }
    }
    .footer-bottom{
      // height: 1.55rem;
      .text{
        font-size: .4rem;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .container{
    .footer-top{
      // height: 4.5rem;
      // padding-bottom: .66rem;
      .margin{
        width: 18rem;   //19rem太大，完全称满
        padding-top: 0;
        height: auto;
        .left{
          .left-container{
            .logo{
              margin-right: 0;
            }
          }
        }
        .right{
          .right-container{
            .logo{
              margin-right: 0;
            }
          }
        }
      }
    }
    .footer-bottom{
      height: auto;
      padding: .46rem 0;
    }
  }
}
</style>
