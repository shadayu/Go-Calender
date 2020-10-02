<template>
  <div class="zong">
    <div class="new-work-tips"  :class="{'display':isActive}"  ref="tips">
      <div class="work-head" @mousedown="move">
        <div class="ex-tips" @mousedown="inDetailBtn" ref="exTips">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
        
        <div class="close" @click="closeBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
      </div>

      <div v-if='isTwin' class="work-content">
        <div class="input">
          <input type="text"  placeholder="添加标题">
          <div class="line"></div>
        </div>
          
        <div class="button">
          <button>活动</button>
          <button>提醒</button>
        </div>
        <div class="time">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          <span>9月9日下午叭叭叭叭叭叭巴巴</span>
        </div>
        <div class="arrange">安排时间</div>
        <div class="add-po">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/>
          </svg>
          <span>添加邀请对象</span>
        </div>
        <div class="add-vdo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
          </svg>
          <div class="vdo-span">
            <span>添加Go Meet视频会议</span>
          </div>
          
        </div>
        <div class="add-gps">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <span>添加地点</span>
        </div>
        <div class="add-note">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 9h16v2H4zm0 4h10v2H4z"/></svg>
          <span>添加说明或附件</span>
        </div>
        <div class="add-name">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"/>
          </svg>
          <div class="t">
            <span >顾翔远</span>
            <span > 忙碌.默认的公开范围.通知时间.提前30分钟</span>
          </div>
          
        </div>
        <div class="placeholder"></div>
        <div class="more-options" @click="eventEdit">
          更多选项
        </div>
        <button class="save">保存</button>

      </div>
      <div v-else class="work-content">
        <div class="input">
          <input type="text"  placeholder="添加标题">
          <div class="line"></div>
        </div>
          
        <div class="button">
          <button>活动</button>
          <button>提醒</button>
        </div>
        <div class="time">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          <span>9月9日下午叭叭叭叭叭叭巴巴</span>
        </div>
        <div class="arrange">安排时间</div>
        <div class="add-po">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/>
          </svg>
          <span>添加邀请对象</span>
        </div>
        <div class="add-vdo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
          </svg>
          <div class="vdo-span">
            <span>添加Go Meet视频会议</span>
          </div>
          
        </div>
        <div class="line-work"></div>
        <div class="add-gps">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <span>添加地点</span>
        </div>
        <div class="line-work"></div>
        <div class="add-note">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 9h16v2H4zm0 4h10v2H4z"/></svg>
          <span>添加说明</span>
        </div>
        <div class="add-note">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"/>
              <path fill="none" d="M0 0h24v24H0V0z"/>
          </svg>
          <span>添加附件</span>
        </div>
        <div class="line-work"></div>
        <div class="add-name-false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"/>
          </svg>
          <span >顾翔远</span>
        </div>
        <div class="add-name-false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
          <span >忙碌</span>
        </div>
        <div class="add-name-false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/></svg>
          <span >默认的公开范围</span>
        </div>
        <div class="add-name-false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"/></svg>
          <span >提前30分钟</span>
        </div>
        <div class="placeholder"></div>
        <div class="more-options">
          更多选项
        </div>
        <button class="save">保存</button>

      </div>
    </div>
    <div class="left-stick" ref="leftStick"></div>
  </div>
</template>

<script>
import EventEditVue from '../views/EventEdit.vue'
let animation = 11
export default {
  
  computed:{
    
  },
  props:{
    isActive:Boolean
  },
  data() {
    return {
      isTwin:true,
      isJudge:true,
    }
  },
  methods:{
    move(e) {
        // e.stopPropagation();
        const xDown = e.clientX
        const yDown = e.clientY
        const box = e.currentTarget.parentNode
        //console.log(e.currentTarget.parentNode);
        const leftDown = box.offsetLeft
        const topDown = box.offsetTop
        
      document.onmousemove = (e) => {
        this.$refs.leftStick.style.opacity = '1'
        this.$refs.leftStick.style.pointerEvents = 'auto'
        let xNow = e.clientX - xDown
        let yNow = e.clientY - yDown
          
        this.$refs.tips.style.left = leftDown + xNow +"px"
        this.$refs.tips.style.top = topDown + yNow +"px"
      
      }
      this.$refs.leftStick.onmouseover = () => {
        this.$refs.leftStick.style.backgroundColor = 'rgba(65, 140, 252, 0.2)'
        this.$refs.leftStick.style.border = '3px #4285f4 solid'
         // backgroundColor = 'rgba(65, 140, 252, 0.2)'
      }
      this.$refs.leftStick.onmouseout = () => {
        this.$refs.leftStick.style.backgroundColor = 'rgba(158, 160, 161,0.2)'
        this.$refs.leftStick.style.border = ' 3px #70757a solid'
        
      }
      if(this.isJudge == true){
        
        this.$refs.leftStick.onmouseup = () => {
          this.$anime({
          targets:'.new-work-tips',
          duration:300,
          easing:'easeInOutCubic',
          top:'8rem',
          left:'24rem',
          height:'100rem'
        })
        this.isTwin = false
        this.isJudge = false
        }
        document.onmouseup = () => {
          document.onmousemove = document.onmouseup = null
          this.$refs.leftStick.style.opacity = '0'
          this.$refs.leftStick.style.pointerEvents = 'none'
        }
        console.log(1);
      }else if( this.isJudge == false ) {
        this.isJudge = true
        document.onmouseup = () => {
          document.onmousemove = document.onmouseup = null
          this.$refs.leftStick.style.opacity = '0'
          this.$refs.leftStick.style.pointerEvents = 'none'
          this.$anime({
          targets:'.new-work-tips',
          duration:300,
          easing:'easeInOutCubic',
          top:'12rem',
          left:'60rem',
          height:'65rem'
        })
        this.isTwin = true
        console.log(2);
        }
      }
    },
    closeBtn() {
      this.$anime({
        targets:'.new-work-tips',
        opacity:0,
        duration:300,
        easing:'easeInOutCubic'
       })
       setTimeout(() => {
         this.$emit('update:closeBtn',false)
       },300)
      
    },
    inDetailBtn(e) {
      e.stopPropagation();
      this.$refs.exTips.onmouseup = () => {
        if(this.isTwin == true) {
        this.$anime({
        targets:'.new-work-tips',
        duration:300,
        easing:'easeInOutCubic',
        top:'8rem',
        left:'24rem',
        height:'100rem'
       })
       this.isTwin = false
       this.isJudge = false
       this.isfuck = '2'
       return
      }else if(this.isTwin == false ){
        this.$anime({
        targets:'.new-work-tips',
        duration:300,
        easing:'easeInOutCubic',
        top:'12rem',
        left:'60rem',
        height:'65rem'
       })
       this.isTwin = true
       this.isJudge = true
      }
      }  
    },
    eventEdit() {
       this.$router.push({
          name:'EventEdit',
        //path:'/eventedit/1',
         params:{url:'/'}
       }) 
       
    }
  }
}
</script>

<style>

</style>