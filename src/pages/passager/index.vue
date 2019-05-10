<template>
  <div class="passager">
    <div class="passager-header fx-v-center fx-m-between" @click="addPassager">
      <div class="desc">添加乘机人</div>
      <img :src="addIcon" alt="">
    </div>
    <div class="passager-body">
      <passager-list :pasger-list="passagerList"
      @pick-item="pickItem"></passager-list>
    </div>
  </div>
</template>

<script>
import addIcon from "@/assets/iconImages/add.png";
import passagerList from "./components/passagerList";
export default {
  data() {
    return {
      addIcon: addIcon,
      passagerList: []
    }
  },
  created() {
    let query = this.$route.query;
    this.uid = query.uid;
    let data = localStorage.getItem("user-data");
    data = JSON.parse(data);
    this.data = data;
    let dataList = data.res;
    this.userInfo = dataList[this.uid].info;
    this.passagerList = this.userInfo.pasgerList;
  },
  methods: {
    addPassager() {
      this.$router.push({
        path: '/addPassager',
        query: {
          uid: this.uid
        }
      })
    },
    pickItem(value) {
      let item = value;
      this.id = 'add-pasger';
      item = JSON.stringify(item);
      localStorage.setItem(this.id, item);
      this.$router.back(-1);
    }
  },
  components: {
    passagerList
  }
}
</script>

<style lang="stylus" scoped>
@import "../../stylus/common.styl";
.passager {
  padding: 20 * $px 15 * $px;
  &-header {
    padding: 10 * $px 0 15 * $px 0;
    border-bottom: 1px solid #eee;
    .desc {
      font-size: 19 * $px;
    }
    img {
      display: block;
      width: 30 * $px;
      height: 30 * $px;
    }
  } 
}
</style>

