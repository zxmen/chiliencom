<template>
  <div class="patents">
    <div class="banner">
      <div class="img">
        <img
          v-show="isSimp"
          src="~@/assets/images/patents/banner/banner.jpg"
          alt=""
        />
        <img
          v-show="!isSimp"
          src="~@/assets/images/patents/banner/banner.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="container">
      <div class="margin">
        <div class="title">
          <div class="text">{{ $t("lang.patentsTitle") }}</div>
          <div class="icon"></div>
        </div>
        <div class="list">
          <div
            class="list-item-container"
            v-for="(item, index) in patentsList"
            :key="index"
          >
            <div class="item-title">{{ item.title }}</div>
            <ul class="item">
              <li v-for="(childItem, index) in item.list" :key="index">
                <i></i>{{ childItem }}
              </li>
            </ul>
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
      isSimp: false,
      patentsList: [],
      patentsTradList: [
        {
          title: "全家寶雲端健管",
          list: [
            "大陸外觀設計專利 ZL201730417604.0",
            "台灣設計專利 TWD188081S",
            "大陸外觀設計專利 ZL201930360662.3",
            "台灣設計專利 TWD207759S",
            "大陸外觀設計專利 ZL201930481824.9",
            "台灣設計專利 TWD211042S",
            "台灣新型專利 TWM571836U",
            "大陸實用新型專利 ZL201820555483.5",
            "台灣新型專利 TWM572729U",
            "大陸實用新型專利 ZL201921742375.X",
            "台灣新型專利 TWM596753U",
            "大陸外觀設計專利 ZL201830218941.1",
            "台灣設計專利 TWD194579S",
            "新加坡外觀註冊 SG30201805700P",
            "大陸外觀設計專利 ZL201830218943.0",
            "台灣設計專利 TWD194693S",
            "新加坡外觀註冊 SG30201805701S",
            "大陸發明專利 ZL202010313012.5",
          ],
        },
        {
          title: "思邁智慧輸液系統",
          list: [
            "大陸外觀設計專利 ZL201730682741.7",
            "台灣設計專利 TWD192262S",
            "大陸外觀設計專利 ZL201930360664.2",
            "大陸發明專利 ZL201810049347.3",
            "台灣發明專利 TWI647138B",
            "大陸發明專利 ZL201811356867.5",
            "台灣發明專利 TWI674122B",
            "台灣發明專利 TWI674120B",
            "大陸實用新型專利 ZL201920137471.5",
            "台灣新型專利 TWM581918U",
          ],
        },
        {
          title: "IronMag 循環腫瘤細胞自動檢測系統（CTC）",
          list: [
            "大陸外觀設計專利 ZL201930360663.8",
            "台灣設計專利 TWD207115S",
            "大陸發明專利 ZL201910847275.1",
            "台灣發明專利 TWI704335B",
            "台灣發明專利 TWI715428B",
          ],
        },
        {
          title: "DOLFIN",
          list: ["大陸外觀設計專利 ZL202030346306.9"],
        },
        {
          title: "MOJITO",
          list: ["大陸外觀設計專利 ZL202030716846.1"],
        },
        {
          title: "HitPods",
          list: [
            "大陸外觀設計專利 ZL202030492128.0",
            "大陸外觀設計專利 ZL202030793524.7",
          ],
        },
      ],
      patentsSimpList: [
        {
          title: "全家宝云端健管",
          list: [
            "大陆外观设计专利 ZL201730417604.0",
            "台湾设计专利 TWD188081S",
            "大陆外观设计专利 ZL201930360662.3",
            "台湾设计专利 TWD207759S",
            "大陆外观设计专利 ZL201930481824.9",
            "台湾设计专利 TWD211042S",
            "台湾新型专利 TWM571836U",
            "大陆实用新型专利 ZL201820555483.5",
            "台湾新型专利 TWM572729U",
            "大陆实用新型专利 ZL201921742375.X",
            "台湾新型专利 TWM596753U",
            "大陆外观设计专利 ZL201830218941.1",
            "台湾设计专利 TWD194579S",
            "新加坡外观注册 SG30201805700P",
            "大陆外观设计专利 ZL201830218943.0",
            "台湾设计专利 TWD194693S",
            "新加坡外观注册 SG30201805701S",
            "大陆发明专利 ZL202010313012.5",
          ],
        },
        {
          title: "思迈智慧输液系统",
          list: [
            "大陆外观设计专利 ZL201730682741.7",
            "台湾设计专利 TWD192262S",
            "大陆外观设计专利 ZL201930360664.2",
            "大陆发明专利 ZL201810049347.3",
            "台湾发明专利 TWI647138B",
            "大陆发明专利 ZL201811356867.5",
            "台湾发明专利 TWI674122B",
            "台湾发明专利 TWI674120B",
            "大陆实用新型专利 ZL201920137471.5",
            "台湾新型专利 TWM581918U",
          ],
        },
        {
          title: "IronMag 循环肿瘤细胞自动检测系统（CTC）",
          list: [
            "大陆外观设计专利 ZL201930360663.8",
            "台湾设计专利 TWD207115S",
            "大陆发明专利 ZL201910847275.1",
            "台湾发明专利 TWI704335B",
            "台湾发明专利 TWI715428B",
          ],
        },
        {
          title: "DOLFIN",
          list: ["大陆外观设计专利 ZL202030346306.9"],
        },
        {
          title: "MOJITO",
          list: ["大陆外观设计专利 ZL202030716846.1"],
        },
        {
          title: "HitPods",
          list: [
            "大陆外观设计专利 ZL202030492128.0",
            "大陆外观设计专利 ZL202030793524.7",
          ],
        },
      ],
    };
  },
  metaInfo(){
    return {
      title: '技术专利',
      meta: [
        { name: 'description', content:  'Chiline是英华达公司蓄积研发制造能量，立足大中华市场所创立的自有品牌。以科技创新为核心，赋能产品，满足用户需求。其产品包含：泫音、全家宝、思迈、IronMag。'},
      ]
    }
  },
  created() {
    if (this.$i18n.locale == "zh_TW") {
      this.banner = "fanti/item-3.jpg";
      this.isSimp = false;
      this.patentsList = this.patentsTradList;
    } else {
      this.banner = "jianti/item-3.jpg";
      this.isSimp = true;
      this.patentsList = this.patentsSimpList;
    }
  },
  watch: {
    "$i18n.locale"(newValue, oldValue) {
      console.log(newValue);
      if (newValue == "zh_TW") {
        this.banner = "fanti/item-3.jpg";
        this.isSimp = false;
        this.patentsList = this.patentsTradList;
      }
      if (newValue == "zh_CN") {
        this.banner = "jianti/item-3.jpg";
        this.isSimp = true;
        this.patentsList = this.patentsSimpList;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.patents {
  margin-bottom: 0.65rem;
  .banner {
    border-top: 0.03rem solid #fff;
    margin-bottom: 1.1rem;
    .img {
      height: 5.55rem;
    }
  }
  .container {
    // margin-bottom: 0.3rem;
    .margin {
      width: 12rem;
      margin: 0 auto;
      // position: relative;
      .title {
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
    }
  }
  .list {
    .list-item-container {
      .item-title {
        font-size: 0.32rem;
        color: #388e94;
        margin-bottom: 0.4rem;
      }
      .item {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0.35rem;
        li {
          width: 50%;
          display: flex;
          align-items: center;
          margin-bottom: 0.35rem;
          font-size: .24rem;
          i {
            display: block;
            width: 0.12rem;
            height: 0.12rem;
            border-radius: 50%;
            background: #388e94;
            margin-left: 0.8rem;
            margin-right: 0.3rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .patents{
    .container{
      .margin{
        width: 17rem;    //分列
        .list{
          .list-item-container{
            .item{
              li{
                width: 50%;   //100%不分列
              }
            }
          }
        }
      }
    }
  }
}
</style>
