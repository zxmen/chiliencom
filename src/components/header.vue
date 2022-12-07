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
    // this.logoPath = this.$i18n.locale == "zh_CN" ? '/cn' : '/';
    // this.logoPath = this.$i18n.locale == "zh_TW" ? '/tw' : '/';
    // this.logoPath = this.$i18n.locale == "zh_CN" ? '/cn' : '/';
  },
  computed: {
    medical: function () {
      return this.$t("lang.medical");
    },
  },
  methods: {
    changeLang(type) {
      this.$i18n.locale = type;

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

      // if (type == 'zh_TW') {
      //   this.$router.push('/tw')
      //   this.isTraActive = true
      //   this.isSimActive = false
      //   this.isEnActive = false
      // }
      // if (type == 'zh_CN') {
      //   this.$router.push('/cn')
      //   this.isTraActive = false
      //   this.isSimActive = true
      //   this.isEnActive = false
      // }
      // if (type == 'en') {
      //   this.$router.push('/en')
      //   this.isTraActive = false
      //   this.isSimActive = false
      //   this.isEnActive = true
      // }
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
          window.location = "https://www.easydr.com.tw/";
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
    .font {
      width: 10%;
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
