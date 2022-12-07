<template>
  <div class="brand">
    <div class="banner">
      <div class="img">
        <img
          v-if="language == 'zh_CN'"
          src="~@/assets/images/brand/banner/banner-simp.jpg"
          alt=""
        />
        <img
          v-if="language == 'zh_TW'"
          src="~@/assets/images/brand/banner/banner-trad.jpg"
          alt=""
        />
        <img
          v-if="language == 'en'"
          src="~@/assets/images/brand/banner/banner-en.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="list">
      <div :id="item.id" class="list-item" v-for="item in list" :key="item.logo">
        <div class="img">
          <img :src="require(`@/assets/images/brand/list${item.bg}`)" alt="" />
        </div>
        <div class="margin">
          <div class="disc">
            <div class="logo">
              <a v-if="$i18n.locale != 'en'" :href="$i18n.locale == 'zh_TW'?item.tradUrl:item.simpUrl"><img :src="require(`@/assets/images/brand/list${item.logo}`)" alt="" /></a>
              <img v-else :src="require(`@/assets/images/brand/list${item.enlogo}`)" alt="">
            </div>
            <div class="text" :class="$i18n.locale == 'en' ? 'en-text' : ''">{{ item.text }}</div>
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
      // isSimp: 'zh_CN',
      language: 'zh-CN',
      banner: "",
    };
  },
  metaInfo(){
    return {
      title: '品牌理念',
      meta: [
        { name: 'description', content:  'Chiline是英华达公司蓄积研发制造能量，立足大中华市场所创立的自有品牌。以科技创新为核心，赋能产品，满足用户需求。其产品包含：泫音、全家宝、思迈、IronMag。'},
      ]
    }
  },
  created() {
    if (this.$i18n.locale == "zh_TW") {
      this.banner = "fanti/item-3.jpg";
      this.language = "zh_TW";
    } 
    if (this.$i18n.locale == "zh_CN") {
      this.banner = "fanti/item-3.jpg";
      this.language = "zh_CN";
    }
    if (this.$i18n.locale == "en") {
      this.banner = "fanti/item-3.jpg";
      this.language = "en";
    }
  },
  computed:{
    list(){
      return [
        {
          id: 'xuanyin',
          bg: '/xuanyin.jpg',
          logo: '/xuanyin.png',
          enlogo: '/xuanyin.png',
          text: this.$t("lang.brandXuanyin"),
          simpUrl: 'https://www.chiline.com.cn',  
          tradUrl: 'https://www.chiline.com.tw',
        },
        {
          id: 'family',
          bg: '/quanjiabao.jpg',
          logo: '/family.png',
          enlogo: '/family_eng.png',
          text: this.$t("lang.brandQuanjiabao"),
          simpUrl: 'https://www.easydr.com.tw', 
          tradUrl: 'https://www.easydr.com.tw',
        },
        {
          id: 'simai',
          bg: '/simai.jpg',
          logo: '/simai.png',
          enlogo: '/simai_eng.png',
          text: this.$t("lang.brandSimai"),
          simpUrl: 'https://www.easydr.com.tw', 
          tradUrl: 'https://www.easydr.com.tw', 
        },
        {
          id: 'iron',
          bg: '/iron.jpg',
          logo: '/iron.png',
          enlogo: '/iron.png',
          text: this.$t("lang.brandIron"),
          simpUrl: 'https://www.easydr.com.tw', 
          tradUrl: 'https://www.easydr.com.tw',
        },
      ]  
    }
  },
  watch: {
    "$i18n.locale"(newValue, oldValue) {
      console.log(newValue);
      if (newValue == "zh_TW") {
        this.banner = "fanti/item-3.jpg";
        this.language = "zh_TW";
      }
      if (newValue == "zh_CN") {
        this.banner = "jianti/item-3.jpg";
        this.language = "zh_CN";
      }
      if (newValue == "en") {
        this.banner = "jianti/item-3.jpg";
        this.language = "en";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.brand {
  .banner {
    border-top: 0.03rem solid #fff;
    margin-bottom: 0.6rem;
    .img {
      height: 5.55rem;
    }
  }
  .list {
    .list-item {
      position: relative;
      height: 5.2rem;
      padding-top: .8rem;
      margin-bottom: 0.4rem;
      .img {
        position: absolute;
        width: 8.2rem;
      }
      .margin {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12rem;
        margin: 0 auto;
        .disc {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          width: 6.5rem;
          .logo {
            margin-bottom: 0.3rem;
            display: flex;
            justify-content: center;
            img {
              height: 0.8rem;
              width: auto;
            }
          }
          .text {
            font-size: 0.22rem;
            line-height: 0.36rem;
          }
          .en-text {
            line-height: 0.29rem;
          }
        }
      }
    }
    .list-item{
      .img{
        top: 50%;
        transform: translate(0, -50%);
      }
    }
    .list-item:first-child {
      .img {
        left: 0;
      }
      .margin {
        .disc {
          right: 0;
        }
      }
    }
    .list-item:nth-child(2) {
      .img {
        right: 0;
      }
      .margin {
        .disc {
          left: 0;
        }
      }
    }
    .list-item:nth-child(3) {
      .img {
        left: 0;
      }
      .margin {
        .disc {
          right: 0;
        }
      }
    }
    .list-item:last-child {
      .img {
        right: 0;
      }
      .margin {
        .disc {
          left: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .container{
    .brand{
      .list{
        .list-item{
          height: 6.4rem;
          .margin{
            width: 90%;
            .disc{
              width: 50%;
              .text{
                font-size: 8px;
                line-height: 9px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
