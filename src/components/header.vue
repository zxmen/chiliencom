<template>
  <div class="header" ref="header">
    <div class="margin">
      <div class="logo" ref="logo">
        <h1>
          <router-link v-if="$i18n.locale != 'en'" :to="logoPath" 
            ><img src="~@/assets/images/header/header-logo.jpg" alt=""
          /></router-link>
          <img v-else src="~@/assets/images/header/header-logo.jpg" alt=""
          />
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/brand">{{ $t("lang.brand") }}</router-link>
          </li>
          <!-- <li>
          <a href="https://www.chiline.com.cn">{{ $t("lang.electronics") }}</a>
        </li> -->
          <li>
            <!-- <router-link v-if="$i18n.locale == 'en'" to="brand#xuanyin">{{
              $t("lang.electronics")
            }}</router-link> -->
            <a href="javascript:void(0)" @click="linkTo('electronics')">{{
              $t("lang.electronics")
            }}</a>
          </li>
          <li>
            <!-- <router-link v-if="$i18n.locale == 'en'" to="brand#family">{{ $t("lang.medical") }}</router-link> -->
            <a href="javascript:void(0)" @click="linkTo('medical')">{{ $t("lang.medical") }}</a>
            <!-- <a href="http://www.easydr.com.tw/">{{ medical }}</a> -->
          </li>
          <li v-if="$i18n.locale != 'en'" class="invention" @touchstart="show">
            <a href="javascript:void(0)">{{ $t("lang.invention") }}</a>
            <div class="dropdown" ref="dropdown">
              <p>
                <router-link to="/honor">{{ $t("lang.honor") }}</router-link>
              </p>
              <p>
                <router-link to="/patents">{{ $t("lang.patents") }}</router-link>
              </p>
            </div>
          </li>
        </ul>
      </nav>
      <div class="font">
        <div class="pc" v-if="!isMobile">
          <a
          href="javascript:void(0)"
          :class="{ active: isSimActive }"
          @mouseover="isSimActive = true"
          @mouseleave="isSimActive = $i18n.locale == 'zh_CN'"
          @click="changeLang('zh_CN')"
          >{{ $t("lang.simplify") }}</a
        ><span>|</span
        ><a
          href="javascript:void(0)"
          :class="{ active: isTraActive }"
          @mouseover="isTraActive = true"
          @mouseleave="isTraActive = $i18n.locale == 'zh_TW'"
          @click="changeLang('zh_TW')"
          >{{ $t("lang.traditional") }}</a
        ><span>|</span
        ><a
          href="javascript:void(0)"
          :class="{ active: isEnActive }"
          @mouseover="isEnActive = true"
          @mouseleave="isEnActive = $i18n.locale == 'en'"
          @click="changeLang('en')"
          >{{ $t("lang.en") }}</a
        >
        </div>
        <div class="mobile" v-else>
          <div class="dropdown" :class="{ active: showDropdown }">
            <div class="selected-item" @click="showDropdown = !showDropdown">
              {{ selectedLanguage }}
              <i class="iconfont icon-xiala"></i>
            </div>
            <ul v-show="showDropdown">
              <li v-for="language in languages" :key="language.type" :class="{ active: selectedLanguage === language }" @click="changeLang(language.type)">
                {{ language.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="font">
          <a
          href="javascript:void(0)"
          :class="{ active: isSimActive }"
          @mouseover="isSimActive = true"
          @mouseleave="isSimActive = $i18n.locale == 'zh_CN'"
          @click="changeLang('zh_CN')"
          >{{ $t("lang.simplify") }}</a
        ><span>|</span
        ><a
          href="javascript:void(0)"
          :class="{ active: isTraActive }"
          @mouseover="isTraActive = true"
          @mouseleave="isTraActive = $i18n.locale == 'zh_TW'"
          @click="changeLang('zh_TW')"
          >{{ $t("lang.traditional") }}</a
        ><span>|</span
        ><a
          href="javascript:void(0)"
          :class="{ active: isEnActive }"
          @mouseover="isEnActive = true"
          @mouseleave="isEnActive = $i18n.locale == 'en'"
          @click="changeLang('en')"
          >{{ $t("lang.en") }}</a
        >
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  // created() {
  //   this.$nextTick(() => {
  //     console.log(this.$refs.logo.querySelector("img").width);
  //   });
  // },
  data() {
    return {
      logoPath: '/',
      isSimActive: null,
      isTraActive: null,
      isEnActive: null,
      isMobile: false,
      showDropdown: false,
      selectedLanguage: null,
      languages: [{text: this.$t("lang.simplify"),type: 'zh_CN'}, {text: this.$t("lang.traditional"),type: 'zh_TW'}, {text: this.$t("lang.en"),type: 'en'}],
    };
  },
  // beforeRouteLeave (to, from, next) {
  //   // this.refs.dropdown.style.display = "none";
  //   this.$refs.header.style.display = "none";
  //   this.$refs.dropdown.style.display = "block";
  //   next()
  // },
  created() {
    this.isSimActive = this.$i18n.locale == "zh_CN" ? true : false;
    this.isTraActive = this.$i18n.locale == "zh_TW" ? true : false;
    this.isEnActive = this.$i18n.locale == "en" ? true : false;
    this.selectedLanguage = this.$i18n.locale == "zh_CN" ? this.$t("lang.simplify") : this.$i18n.locale == "zh_TW" ? this.$t("lang.traditional") : this.$t("lang.en");
    // this.logoPath = this.$i18n.locale == "zh_CN" ? '/cn' : '/';
    // this.logoPath = this.$i18n.locale == "zh_TW" ? '/tw' : '/';
    // this.logoPath = this.$i18n.locale == "zh_CN" ? '/cn' : '/';
  },
  mounted(){
    this.isMobile = window.innerWidth < 768;
  },
  computed: {
    medical: function () {
      return this.$t("lang.medical");
    },
  },
  methods: {
    changeLang(type) {
      this.$i18n.locale = type;
      this.selectedLanguage = this.$i18n.locale == "zh_CN" ? this.$t("lang.simplify") : this.$i18n.locale == "zh_TW" ? this.$t("lang.traditional") : this.$t("lang.en");
      this.showDropdown = false;
      if (type == 'zh_TW') {
        this.isTraActive = true
        this.isSimActive = false
        this.isEnActive = false
      }
      if (type == 'zh_CN') {
        this.isTraActive = false
        this.isSimActive = true
        this.isEnActive = false
      }
      if (type == 'en') {
        this.isTraActive = false
        this.isSimActive = false
        this.isEnActive = true
      }

      // alert(this.$route.path)
      if (this.$route.path.match("/cn") && type == 'zh_TW') {
        this.$router.push('/tw')
      }
      if (this.$route.path.match("/cn") && type == 'en') {
        this.$router.push('/en')
      }
      if (this.$route.path.match("/tw") && type == 'zh_CN') {
        this.$router.push('/cn')
      }
      if (this.$route.path.match("/tw") && type == 'en') {
        this.$router.push('/en')
      }
      if (this.$route.path.match("/en") && type == 'zh_CN') {
        this.$router.push('/cn')
      }
      if (this.$route.path.match("/en") && type == 'zh_TW') {
        this.$router.push('/tw')
      }

      if ((this.$route.path.match("/patents") || this.$route.path.match("/honor")) && type == 'en') {
        this.$router.push('/en')
      }

      if (this.$route.path.match("")  && type == 'en') {
        this.$router.push('/en')
      }
      localStorage.setItem("lang", type);
    },
    linkTo(cate) {
      if (cate == 'electronics') {
        if (this.$i18n.locale == "zh_TW") {
          window.location = "https://www.chiline.com.tw/";
        }
        if (this.$i18n.locale == "zh_CN") {
          window.location = "https://www.chiline.com.cn/";
        }
        if (this.$i18n.locale == "en") {
          // window.location = "/brand#xuanyin";
          window.document.querySelector("#xuanyin").scrollIntoView(true)
        }
      }
      if (cate == 'medical') {
        if (this.$i18n.locale == "zh_TW") {
          window.location = "https://www.easydr.com.tw/";
        }
        if (this.$i18n.locale == "zh_CN") {
          window.location = "https://www.chilinemd.com.cn/";
        }
        if (this.$i18n.locale == "en") {
          // window.location = "/brand#xuanyin";
          window.document.querySelector("#family").scrollIntoView(true)
        }
      }

    },
    // append(){
    //   this.$router.append(path)
    // },
    show() {
      this.$refs.dropdown.style.display = "block"
      setTimeout(() => {
        this.$refs.dropdown.style.display = "none"
      },2000)
    }
  },
  //使用watch监听this.$i18n.locale的变化
  // watch: {
  //   $i18n: {
  //     handler(val) {
  //       // console.log(val.locale)
  //       this.selectedLanguage = val.locale == "zh_CN" ? this.$t("lang.simplify") : val.locale == "zh_TW" ? this.$t("lang.traditional") : this.$t("lang.en");
  //     },
  //     deep: true
  //   }
  // }
};
</script>

<style lang="less" scoped>
.header {
  background-color: #388e94;
  height: 0.8rem;
  display: flex;
  align-items: center;
  .margin {
    width: 16rem;
    margin: 0 auto;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    font-size: 0.26rem;
    .logo {
      // width: 20%;
      img {
        width: 2.12rem;
        // height: 0.8rem;
        display: block;
      }
    }
    nav {
      flex: 1;
      height: 0.8rem;
      // background-color: red;
      // width: 75%;
      ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 0.8rem;
        li {
          // padding: 10px 0;
          margin-right: 1rem;
          height: 0.8rem;
          position: relative;
          display: flex;
          align-items: center;
          a {
            color: #fff;
          }
          .dropdown {
            display: none;
            z-index: 1100;
            box-sizing: border-box;
            position: absolute;
            padding: 0.4rem 0;
            top: 0.8rem;
            left: -0.6rem;
            width: 2.4rem;
            height: 2rem;
            border-top: 0.03rem solid #fff;
            // display: flex;
            // flex-direction: column;
            // justify-content: space-between;
            background: #388e94;
            p {
              text-align: center;
              padding: 0.1rem 0;
            }
            p:first-child {
              width: 100%;
              position: absolute;
              top: 0.4rem;
              left: 50%;
              transform: translate(-50%, 0);
            }
            p:last-child {
              width: 100%;
              position: absolute;
              bottom: 0.4rem;
              left: 50%;
              transform: translate(-50%, 0);
            }
            p:hover {
              background: #74b0b4;
            }
          }
        }
        li:last-child {
          margin-right: 1.2rem;
        }
        li::before,
        li::after {
          content: "";
          position: absolute;
          bottom: 0;
          height: 2px;
          background: #74b0b4;
          left: 50%;
          width: 0;
          transition: all 0.2s linear;
        }
        li:hover:before {
          width: 50%;
          left: 0;
        }
        li:hover:after {
          width: 50%;
        }
        .invention:hover {
          .dropdown {
            display: block;
          }
        }
      }
    }
    // .font{
    //   width: 10%;
    //   color: #fff;
    //   font-size: 0.22rem;
    //   a {
    //     color: rgba(255, 255, 255, 0.4);
    //   }
    //   .active {
    //     color: rgba(255, 255, 255, 1);
    //   }
    //   span {
    //     margin: 0 0.14rem;
    //   }
    // }
    .font {
      width: 10%;
      .pc{
        width: 100%;
        color: #fff;
        font-size: 0.22rem;
        a {
          color: rgba(255, 255, 255, 0.4);
        }
        .active {
          color: rgba(255, 255, 255, 1);
        }
        span {
          margin: 0 0.14rem;
        }
      }
      .mobile{
        /* 下拉菜单样式 */
        .dropdown {
          position: relative;
          .selected-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;  
            i {
              position: relative;
              right: 0;
              font-size: 0.5rem;
            }
          }
          ul {
            position: absolute;
            width: 100%;
            top: 1.4rem;
            left: 0;
            background-color: #fff;
            border: 1px solid #ccc;
            border-top: none;
            border-radius: 0 0 5px 5px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            z-index: 100;
            li {
              padding: 5px;
              cursor: pointer;
            }
            li.active {
              background-color: #ccc;
            }
          }
        }
      }
    }
  }
}
// @media (any-hover: hover){  
//   .invention:hover {
//     .dropdown {
//       display: block;
//     }
//   }
// }
@media screen and (max-width: 1023px) {
  .header{
    .margin{
      width: 17rem;
    }
  }
}
@media screen and (max-width: 767px) {
  .header{
    height: 3rem;
    .margin{
      font-size: .5rem;
      width: 18.8rem;
      nav{
        ul{
          li{
            .dropdown{
              top: 1.9rem;
              left: -0.2rem;
              padding: .4rem 0;
              height: 2.8rem;
            }
          }
        }
      }
      .font{
        font-size: .5rem;
        width: 8%;
      }
    }
  }
}

@media screen and (max-width: 480px){
  margin-right: 2px;
}
</style>
