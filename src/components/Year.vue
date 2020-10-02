<template>
  <div class="navigation">
    <div class="navigation-item">
      <div class="head">
        <span><slot></slot></span>
        <div class="a-all">
          <div @click="beforeMonth">
            <img src="../assets/left.svg" />
          </div>
          <div  @click="nextMouth">
            <img src="../assets/right.svg" />
          </div>
        </div>
      </div>
      <!-- 星期一到星期五 -->
      <div class="row">
        <span class="row-kong">
          <span class="row-span">空</span>
        </span>
        <span class="row-big" v-for="item in row" :key="item">
          <span class="row-span">{{item}}</span>
        </span>
      </div>
      <!-- 日期循环 -->

      <div class="rowroup" >
        <div class="row-week" v-for="item in weekList" :key="item">
          <span class="row-span">{{item}}</span>
        </div>
        <div class="row-day-father" >
          <div class="row-day" v-for="item in dayList" :key="item.id" 
          :class="{'current-day':currentDay(item),'other-day':otherDay(item)}"
          @click="dayBtnDisplay(item)">
            <span class="row-span" >{{item.day}}</span>
          </div>
        </div>
        
      </div>


    </div>
  </div>
</template>

<script>
import {timeMethod} from '../utils.js/methods.js'
export default {
  props:{
    monthDetail:{}
  },
  data() {
    return {
      row: [ "日","一", "二", "三", "四", "五", "六"],
      weekList:[1,2,3,4,5,6],
      dayList: [],
      day:'',   //今天第几号
      weekDay:'',  //一号是周几  2就是周二  3就是周三 前面的数字均为一号之前的上个月的末尾天数
      lastDay:'' ,//这个月的最后一天是多少号
      year:'',
      month:''
    };
  },
  created() {
    const date = new Date()
    //console.log(date);
    const year = date.getFullYear()
    this.year = year
    const month = date.getMonth() 
    this.month = month
    //console.log('点击前'+this.month);
    //今天第几号
    const day = date.getDate()
    this.day = day
            //console.log(day);
    let that = this
    if(this.monthDetail.month == month) {
      timeMethod(year,month,that)
    }else{
      timeMethod(this.monthDetail.year,this.monthDetail.month,that)
    }

    
    
   this.$emit('update:time',this.calendarTime())
   //console.log(this.monthDetail);
    
  },
  methods:{
    currentDay(item) {
      if( this.day == item.day){ return true } return false
    },
    otherDay(item){
      if(item.id < this.weekDay || item.id >= (this.lastDay +this.weekDay)){ return true}
    },
    beforeMonth() {
      timeMethod(this.year,--this.month,this)
      let afterTime = this.year + '年' + (this.month + 1) + '月'
      this.$emit('update:time',afterTime)
    },
    nextMouth() {
      timeMethod(this.year,++this.month,this)
      let afterTime = this.year + '年' + (this.month + 1) + '月'
      this.$emit('update:time',afterTime)
    },
    calendarTime(){
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      return (year + "年" + month + "月")
    },
    dayBtnDisplay(item) {
      //console.log(item.day,item.month);
      this.$emit('dayBtnDisplay',item)
    }
   
  }
};
</script>

<style>
</style>