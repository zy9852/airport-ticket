<template>
  <div class="recommend">
    <div class="recommend-title">特价机票</div>
    <div class="recommend-body">
      <list-card
        :title="'国内特价'"
        :card-list="domesticList"
        @to-book="toBook"
      ></list-card>
      <div id="inter"></div>
      <list-card
        :title="'国际特价'"
        :card-list="interList"
        @to-book="toBook"
      ></list-card>
    </div>
  </div>
</template>

<script>
import listCard from "./components/listCard.vue";
import saleList from "@/data/sale.js";
import allAirport from "@/data/airport.js";
export default {
  data() {
    return {
      domesticList: [],
      interList: []
    };
  },
  created() {
    let query = this.$route.query;
    this.uid = query.uid;
    this.filtDomestic();
    this.filtInter();
  },
  methods: {
    filtDomestic() {
      let allDomestic = allAirport.domestic;
      let allSales = saleList.sales;
      let domesticSales = allSales.filter(item => {
        for (let i = 0; i < allDomestic.length; i++) {
          if (item.depCity == allDomestic[i].name) {
            for (let j = 0; j < allDomestic.length; j++) {
              if (item.arrCity == allDomestic[j].name) {
                item.type = 0;
                return item;
              }
            }
          }
        }
      });
      this.domesticList = domesticSales;
    },
    filtInter() {
      let allInter = allAirport.international;
      let allSales = saleList.sales;
      let interSales = allSales.filter(item => {
        for (let i = 0; i < allInter.length; i++) {
          if (
            item.depCity == allInter[i].name ||
            item.arrCity == allInter[i].name
          ) {
            item.type = 1;
            return item;
          }
        }
      });
      this.interList = interSales;
    },
    getCode(item) {
      let airList = allAirport.domestic.concat(allAirport.international);
      for (let i = 0; i < airList.length; i++) {
        if (item.depCity == airList[i].name) {
          item.depCode = airList[i].code;
        } else if (item.arrCity == airList[i].name) {
          item.arrCode = airList[i].code;
        }
      }
    },
    toBook(item) {
      this.getCode(item);
      this.$router.push({
        path: "/book",
        query: {
          uid: this.uid,
          type: item.type,
          dep: item.depCode,
          arr: item.arrCode,
          depDate: item.date,
          price: item.price,
          week: item.week,
          flightNo: item.flightNo,
          from: "recomd"
        }
      });
    }
  },
  components: {
    listCard
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.recommend {
  padding: 10 * $px 16 * $px 20 * $px 16 * $px;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  &-title {
    font-size: 20 * $px;
    color: #fe8a18;
    font-weight: 600;
    letter-spacing: 2px;
  }
  &-body {
    padding-top: 20 * $px;
  }
}
</style>


