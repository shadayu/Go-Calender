<template>
  <div v-title data-title="日历 - 2020年">
    <div class="left-bar" ref="leftBar">
      
      <div class="svg-btn-big" ref="svgBtnBig">
        <svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
      </div>
      <button class="btn-big" ref="btnBig" @click="btnBuild">创建</button>
      <!-- 导航日历 -->
      <year :time.sync='time' :monthDetail="{year:year,month:month}">{{time}}</year>
      <div class="input-border">
        <!-- 找人输入框 -->
        <input class="search" type="text" placeholder="找人" />
        <img src alt />
        <!-- 边框 -->
        <div class="border"></div>
      </div>
      <!-- 我的日历 -->
      <div class="my-calendar">
        <div class="head">
          我的日历
          <img src alt />
        </div>
        <div class="check-box">
          <div class="one">
            <!-- <input type="checkbox" value=""/> -->
            <div class="btn-box" @click="changeActive1">
              <svg v-if="active1"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>顾翔远</span>
            </div>
            
          </div>
          <div class="two">
            <div class="btn-box"  @click="changeActive2">
              <svg v-if="active2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>生日</span>
            </div>
            
          </div>
          <div class="three">
            <div class="btn-box"  @click="changeActive3">
              <svg v-if="active3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>提醒</span>
            </div>
            
          </div>
          <div class="four">
            <div class="btn-box"  @click="changeActive4">
              <svg v-if="active4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>Tasks</span>
            </div>
            
          </div>
        </div>
      </div>
      <!-- 其他日历 -->
      <div class="else-calendar">
        <div class="head">
          其他日历
          <img src alt />
        </div>
        <div class="check-box" @click="changeActive5">
          <div class="one">
            <!-- <input type="checkbox" value=""/> -->
            <div class="btn-box">
              <svg v-if="active5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>Holidays in China</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <div class="content" ref="ass">
      <year v-for="item in monthDetailList" :key="item.month" :monthDetail='item'>{{item.monthCN}}</year>
    </div>
    <new-work-tips ref="newWorkTips" :isActive= isActive :closeBtn.sync='isActive'></new-work-tips>
    
  </div>
</template>

<script>
import Year from "../components/Year.vue";
import NewWorkTips from "../components/NewWorkTips.vue"
export default {
  components:{
    Year,
    NewWorkTips
  },
  // conputed:{
  //   year:new Date.getFullYear(),
  // },
  data() {
    return {
      monthList:['一月','二月','三月','四月','五月','六月',
      '七月','八月','九月','十月','十一月','十二月'],
      
      monthDetailList:[
        {year:2020,month:0,monthCN:'一月'},
        {year:2020,month:1 ,monthCN:'二月'},
        {year:2020,month:2 ,monthCN:'三月'},
        {year:2020,month:3 ,monthCN:'四月'},
        {year:2020,month:4 ,monthCN:'五月'},
        {year:2020,month:5 ,monthCN:'六月'},
        {year:2020,month:6 ,monthCN:'七月'},
        {year:2020,month:7 ,monthCN:'八月'},
        {year:2020,month:8 ,monthCN:'九月'},
        {year:2020,month:9,monthCN:'十月'},
        {year:2020,month:10,monthCN:'十一月'},
        {year:2020,month:11,monthCN:'十二月'},
      ],
      active1:true,
      active2:true,
      active3:true,
      active4:true,
      active5:true,
      time:'',
      year:'',
      month:'',
      isActive:false,
    };
  },
  created(){
    const date = new Date()
      const year = date.getFullYear()
      this.year = year
      const month = date.getMonth() 
    this.month = month
      
  },
  computed:{
    // nowDate() {
    //   //this.$refs.year.calendarTime()  
    //   this.$refs.year.ass()
    // }
  },
  methods:{
    changeActive1() {
      this.active1 = !this.active1
    },
    changeActive2() {
      this.active2 = !this.active2
    },
    changeActive3() {
      this.active3 = !this.active3
    },
    changeActive4() {
      this.active4 = !this.active4
    },
    changeActive5() {
      this.active5 = !this.active5
    },
    fuckyou() {
      if(this.$refs.leftBar.style.left === '-256px') {
        this.$refs.leftBar.style.left = '0px'
        this.$refs.ass.style.left = '256px'
        this.$refs.ass.style.width = 'calc(100% - 256px)'
        this.$refs.btnBig.style.left = '15px'
        this.$refs.btnBig.style.width = '116px'
        this.$refs.btnBig.innerHTML = '创建'
        this.$refs.svgBtnBig.style.left = '21px'
        return
      }
      this.$refs.leftBar.style.left = '-256px'
      this.$refs.ass.style.left = '56px'
      this.$refs.ass.style.width = 'calc(100% - 56px)'
      this.$refs.btnBig.style.left = '271px'
      this.$refs.btnBig.style.width = '48px'
      this.$refs.btnBig.innerHTML = ''
      this.$refs.svgBtnBig.style.left = '277px'
    },
    btnBuild() {
      //console.log(this.$refs.newWorkTips.$el.childNodes[0]);
      //console.log(this.isActive);
      if(this.isActive == true) {
        this.$anime({
        targets:'.new-work-tips',
        opacity:0,
        duration:300,
        
        easing:'easeInOutCubic'
       })
       setTimeout(() => {
         this.isActive = false
       },300)
       return
      }
       this.isActive = true
       this.$anime({
        targets:'.new-work-tips',
        opacity:1,
        duration:300,
        
        easing:'easeInOutCubic'
        })
    },
    
  }
  
};
</script>

<style>
/* @import "../less/homeTop.css" */
</style>