<template>
  <div id="nav">
      <div class="tab-top">
        <div class="menu-logo">
          <div class="menu" @click="leftBarMove">
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            <div class="menu-tips">主菜单</div>
          </div>
          <div class="logo-box">
            <img class="logo" src="../assets/cal_24_v2.png" alt />
          </div>
          <div class="span-box">
            <span>日历</span>
          </div>
        </div>
        <div class="date">

          <div class="today">
            <button class="date-btn-left">今天</button>
            <div class="today-tips">{{today}}</div>
          </div>
          
          <a class="top">
            <img src="../assets/left.svg" alt />
            <div class="last-year">上一年</div>
          </a>
          <a class="down">
            <img src="../assets/right.svg" alt />
            <div class="last-year">下一年</div>
          </a>
          <span>2020</span>
        </div>
        <div class="set-top">
          <!-- 搜索 -->
          <top-search></top-search>
          <!-- 支持 -->
          <top-tips-support></top-tips-support>
          <!-- 设置 -->
          <top-tips-set></top-tips-set>
          <!-- 年 -->
          <top-tips-one></top-tips-one>
        </div>
        <div class="login">
          <div class="more-father">
            <a class="more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </a>
            <div class="more-tips">应用</div>
          </div>
          <div class="head-photo-father">
            <a class="head-photo">
              <img src="../assets/login.jpg" alt />
            </a>
            <div class="photo-tips">头像</div>
          </div>
          
        </div>
      </div>

      <!-- <router-link to="/"></router-link>
      <router-link to="/about"></router-link> -->
 </div>
</template>

<script>
import TopTipsOne from "./TopTipsOne.vue";
import TopTipsSet from "./TopTipsSet.vue";
import TopTipsSupport from "./TopTipsSupport.vue";
import TopSearch from "./TopSearch.vue";
export default {
  components: {
    TopTipsOne,
    TopTipsSet,
    TopTipsSupport,
    TopSearch
  },
  data() {
    return {};
  },
  computed:{
    today() {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return (year + "年" + month + "月" + day + '日')
    }
  },
  methods:{
    leftBarMove() {
      this.$emit('btnLeftBarMove',false)
    }
  }
}
</script>

<style>

</style>