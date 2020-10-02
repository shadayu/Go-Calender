<template>
  <div class="event-edit">
    <div class="shade"  @click="opAll">
      <div class="left">
        <div class="head-title">
          <div class="svg" @click="closeBtn">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
             <div class="tips-close">取消创建活动</div>
          </div>
          <!-- <input class="close" type="checkbox"> -->
         
          <input type="text" placeholder="添加标题" />
          <div class="blue-line"></div>
        </div>
        <div class="select">
          <div class="select-time">

            <div class="st-time" @click="caBtnOpacity" >{{'2020年'+btnMonthGo+'月'+btnDayGo+'日'}}</div>
            <div class="year-time-go" id="year-time-go" ref="stTime1">
              <year :time.sync='time' :monthDetail="{year:year,month:month}"
               @dayBtnDisplay="dayBtnDisplay">{{time}}</year>
            </div>
            <div class="st-time"  @click="caBtnOpacityHourGo">{{timeGo}}</div>
            <div class="hour-go" ref="stHourGo">
              <div class="hour-item" v-for="item in hourList" @click="btnTimeGo(item)" :key="item.name1">{{item.name1}}</div>
            </div>
            <span class="zhi">至</span>
            <div class="st-time" @click="caBtnOpacityHourEnd">{{timeEnd}}</div>
            <div class="hour-end" ref="stHourEnd">
              <div class="hour-item" v-for="item in hourList" @click="btnTimeEnd(item)" :key="item.name1">{{item.name1}}</div>
            </div>


            <div class="st-time"  @click="caBtnOpacity1">{{'2020年'+btnMonthEnd+'月'+btnDayEnd+'日'}}</div>
            <div class="year-time-end" id="year-time-end" ref="stTime2">
              <year :time.sync='time1' :monthDetail="{year:year,month:month}"
               @dayBtnDisplay="dayBtnDisplay1">{{time1}}</year>
            </div>

            <div class="st-world" @click="timeUndone">时区</div>
            <div class="time-zone-undone">功能开发中</div>
          </div>
          <div class="select-rep">
            <div class="btn-box" @click="btnActive">
              <svg v-if="active"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </div>
            <span>全天</span>
            <div class="rep-btn" @click="repBtnListM"> {{repBtnItem}} </div>
            <div class="rep-btn-list"  ref="repBtnList">
              <div class="rep-btn-item" @click="repBtnItemM(item)" v-for="item in repBtnList" :key="item.name">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="event-content">
          <div class="option">
            <div class="btn-op">活动详情</div>
            <div class="btn-op">确定时间</div>
            
          </div>
          <div class="line2"></div>
          <div class="vdo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/>
            </svg>
            <div class="vdo-btn">添加 Go Meet视频会议</div>
          </div>
          <div class="gps">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <div class="input-gps">
              <input type="text" placeholder="添加地点">
              <div class="blue-line"></div>
            </div>
            
          </div>
          <div class="clock-add">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
            </svg>

            <div class="clock">
              <div class="clock-btn">提醒</div>
              <input type="text" placeholder="30">
              <div class="clock-btn">分钟</div>
            </div>
            
          </div>
          <div class="add">添加提醒</div>
          
          <div class="ca">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"/>
            </svg>
            <div class="email">1014750987@gmail.com</div>
            <div class="photo"></div>
          </div>
          <div class="state">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
            <div class="state-btn1">忙碌</div>
            <div class="state-btn2">默认的公开范围</div>
          </div>
          <div class="ex-text">
            <!-- <div class="ex-text-head">
              <div class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/></svg>
              </div>

              <div class="line-ex"></div>
              <div class="svg" @click="btnBold" ref="btnBold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
              </div>
              <div class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></svg>
              </div>
              <div class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>
              </div>

              <div class="line-ex"></div>
              <div class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/></svg>
              </div>
              <div class="svg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>
              </div>

              <div class="line-ex"></div>
              <div class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
              </div>
              <div class="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"/></svg>
              </div>
              
            </div> -->
            <div class="ex-text-co">
              <!-- <div ref="textarea" class="textarea"  contenteditable="true" v-html="textarea"></div> -->

              <quill-editor 
              class="quill-editor"
                  v-model="content" 
                  ref="myQuillEditor" 
                  :options="editorOption" 
                  @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)">
              </quill-editor>
            </div>
          </div>
        </div>
      </div>

      <div class="right">
          <button>保存</button>
        
          <div class="option">
            <div class="btn-op">邀请对象</div>
          </div>
          <div class="line2"></div>
          <input type="text" placeholder="添加邀请对象">
          <div class="span">邀请对象权限</div>
          <div class="btn-box" @click="btnActive1">
              <svg v-if="active1"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>修改活动</span>
          </div>
          <div class="btn-box" @click="btnActive2">
              <svg v-if="active2"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>邀请其他人</span>
          </div>
          <div class="btn-box" @click="btnActive3">
              <svg v-if="active3"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>查看其它对象列表</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Year from "../components/Year"
import {textarea} from "../utils.js/methods"
export default {
  // beforeRouterEnter(to,from,next){
  //   next(false)
  // }
  components:{
    Year,
  },
  created(){
    const date = new Date()
      const year = date.getFullYear()
      this.year = year
      
      const month = date.getMonth() 
    this.month = month
      this.btnMonthGo = month + 1
      this.btnMonthEnd = month + 1
      const day = date.getDate()
      this.btnDayGo = day
      this.btnDayEnd = day
      console.log(date.getHours(),date.getMinutes());
  },
  data() {
    return{
      content: '我是顾翔远',
      editorOption: {
        placeholder: "请在这里输入",
              modules:{
                toolbar:[
                          ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
                          ['blockquote', 'code-block'],     //引用，代码块
                          [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
                          [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
                          [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
                          [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
                          [{ 'direction': 'rtl' }],             // 文本方向
                          [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
                          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
                          [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
                          [{ 'font': [] }],     //字体
                          [{ 'align': [] }],    //对齐方式
                          ['clean'],    //清除字体样式
                          ['image','video']    //上传图片、上传视频
                          ]
                      }
      },
      svg:true,
      active:true,
      active1:true,
      active2:true,
      active3:true,
      year:'',
      month:'',
      time:'',
      time1:'',
      btnMonthGo:'',
      btnDayGo:'',
      btnMonthEnd:'',
      btnDayEnd:'',
      hourList:[{hour:12,min:0,name1:'上午12:00',name2:'00:00'},
                {hour:12,min:15,name1:'上午12:15',name2:'00:15'},
                {hour:12,min:30,name1:'上午12:30',name2:'00:30'},
                {hour:12,min:45,name1:'上午12:45',name2:'00:45'},
                {hour:1,min:0,name1:'上午1:00',name2:'01:00'},
                {hour:1,min:15,name1:'上午1:15',name2:'01:15'},
                {hour:1,min:30,name1:'上午1:30',name2:'01:30'},
                {hour:1,min:45,name1:'上午1:45',name2:'01:45'},
                {hour:2,min:0,name1:'上午2:00',name2:'02:00'},
                {hour:2,min:15,name1:'上午2:15',name2:'02:15'},
                {hour:2,min:30,name1:'上午2:30',name2:'02:30'},
                {hour:2,min:45,name1:'上午2:45',name2:'02:45'},
                {hour:3,min:0,name1:'上午3:00',name2:'03:00'},
                {hour:3,min:15,name1:'上午3:15',name2:'03:15'},
                {hour:3,min:30,name1:'上午3:30',name2:'03:30'},
                {hour:3,min:45,name1:'上午3:45',name2:'03:45'},
                {hour:4,min:0,name1: '上午4:00',name2:'04:00'},
                {hour:4,min:15,name1:'上午4:15',name2:'04:15'},
                {hour:4,min:30,name1:'上午4:30',name2:'04:30'},
                {hour:4,min:45,name1:'上午4:45',name2:'04:45'},
                {hour:5,min:0,name1: '上午5:00',name2:'05:00'},
                {hour:5,min:15,name1:'上午5:15',name2:'05:15'},
                {hour:5,min:30,name1:'上午5:30',name2:'05:30'},
                {hour:5,min:45,name1:'上午5:45',name2:'05:45'},
                {hour:6,min:0,name1: '上午6:00',name2:'06:00'},
                {hour:6,min:15,name1:'上午6:15',name2:'06:15'},
                {hour:6,min:30,name1:'上午6:30',name2:'06:30'},
                {hour:6,min:45,name1:'上午6:45',name2:'06:45'},
                {hour:7,min:0,name1: '上午7:00',name2:'07:00'},
                {hour:7,min:15,name1:'上午7:15',name2:'07:15'},
                {hour:7,min:30,name1:'上午7:30',name2:'07:30'},
                {hour:7,min:45,name1:'上午7:45',name2:'07:45'},
                {hour:8,min:0,name1: '上午8:00',name2:'08:00'},
                {hour:8,min:15,name1:'上午8:15',name2:'08:15'},
                {hour:8,min:30,name1:'上午8:30',name2:'08:30'},
                {hour:8,min:45,name1:'上午8:45',name2:'08:45'},
                {hour:9,min:0,name1: '上午9:00',name2:'09:00'},
                {hour:9,min:15,name1:'上午9:15',name2:'09:15'},
                {hour:9,min:30,name1:'上午9:30',name2:'09:30'},
                {hour:9,min:45,name1:'上午9:45',name2:'09:45'},
                {hour:10,min:0,name1: '上午10:00',name2:'10:00'},
                {hour:10,min:15,name1:'上午10:15',name2:'10:15'},
                {hour:10,min:30,name1:'上午10:30',name2:'10:30'},
                {hour:10,min:45,name1:'上午10:45',name2:'10:45'},
                {hour:11,min:0,name1: '上午11:00',name2:'11:00'},
                {hour:11,min:15,name1:'上午11:15',name2:'11:15'},
                {hour:11,min:30,name1:'上午11:30',name2:'11:30'},
                {hour:11,min:45,name1:'上午11:45',name2:'11:45'},
                {hour:12,min:0,name1: '下午12:00',name2:'12:00'},
                {hour:12,min:15,name1:'下午12:15',name2:'12:15'},
                {hour:12,min:30,name1:'下午12:30',name2:'12:30'},
                {hour:12,min:45,name1:'下午12:45',name2:'12:45'},
                {hour:13,min:0,name1: '下午1:00',name2:'13:00'},
                {hour:13,min:15,name1:'下午1:15',name2:'13:15'},
                {hour:13,min:30,name1:'下午1:30',name2:'13:30'},
                {hour:13,min:45,name1:'下午1:45',name2:'13:45'},
                {hour:14,min:0,name1: '下午2:00',name2:'14:00'},
                {hour:14,min:15,name1:'下午2:15',name2:'14:15'},
                {hour:14,min:30,name1:'下午2:30',name2:'14:30'},
                {hour:14,min:45,name1:'下午2:45',name2:'14:45'},
                {hour:15,min:0,name1: '下午3:00',name2:'15:00'},
                {hour:15,min:15,name1:'下午3:15',name2:'15:15'},
                {hour:15,min:30,name1:'下午3:30',name2:'15:30'},
                {hour:15,min:45,name1:'下午3:45',name2:'15:45'},
                {hour:16,min:0,name1: '下午4:00',name2:'16:00'},
                {hour:16,min:15,name1:'下午4:15',name2:'16:15'},
                {hour:16,min:30,name1:'下午4:30',name2:'16:30'},
                {hour:16,min:45,name1:'下午4:45',name2:'16:45'},
                {hour:17,min:0,name1: '下午5:00',name2:'17:00'},
                {hour:17,min:15,name1:'下午5:15',name2:'17:15'},
                {hour:17,min:30,name1:'下午5:30',name2:'17:30'},
                {hour:17,min:45,name1:'下午5:45',name2:'17:45'},],
      timeGo:'上午10:00',
      timeEnd:'下午2:00',
      repBtnList:[{name:'不重复'},{name:'每天'},{name:'每周星期一'},{name:'每月第四个星期一'}
      ,{name:'每月最后一个星期一'},{name:'每年在9月28日'},{name:'每个工作日'},{name:'自定义'}],
      repBtnItem:'不重复',
      textarea:'郭德纲',
    }
  },
  computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
  },
  methods:{
    onEditorReady(editor) {},// 准备编辑器
    onEditorBlur(){}, // 失去焦点事件
    onEditorFocus(){}, // 获得焦点事件
    onEditorChange(){}, // 内容改变事件
    opAll() {
      this.$refs.stTime1.style.pointerEvents = 'none'
      this.$refs.stTime2.style.pointerEvents = 'none'
      this.$refs.stHourGo.style.pointerEvents = 'none'
      this.$refs.stHourEnd.style.pointerEvents = 'none'
      this.$anime({
          targets:'#year-time-go',
          opacity:0,
          easing:'easeInOutCubic',
          duration:200,
        })
        this.$anime({
          targets:'#year-time-end',
          opacity:0,
          easing:'easeInOutCubic',
          duration:200,
        })
        this.$anime({
          targets:'.hour-go',
          opacity:0,
          easing:'easeInOutCubic',
          duration:200,
        })
        this.$anime({
          targets:'.hour-end',
          opacity:0,
          easing:'easeInOutCubic',
          duration:200,
        })
        this.$refs.repBtnList.style.pointerEvents = 'none'
        this.$anime({
          targets:'.rep-btn-list',
          opacity:0,
          easing:'easeInOutCubic',
          duration:200,
        })
      console.log('cao');
    },
    btnActive() {
      this.active = !this.active
    },
    btnActive1() {
      this.active1 = !this.active1
    },
    btnActive2() {
      this.active2 = !this.active2
    },
    btnActive3() {
      this.active3 = !this.active3
    },
    closeBtn() {
      //console.log(this.$route.params);
      let url = this.$route.params.url
      this.$router.push({
        path:url
      })
    },
    caBtnOpacity(e) {
      //console.log(e);
      e.stopPropagation()
      if(this.$refs.stTime1.style.opacity == '1'){
        this.$refs.stTime1.style.pointerEvents = 'none'
        this.$anime({
          targets:'#year-time-go',
          opacity:0,
          easing:'easeInOutCubic',
          duration:200,
        })
        return
      }
      this.$refs.stTime1.style.pointerEvents = 'auto'
      this.$anime({
          targets:'#year-time-go',
          opacity:1,
          easing:'easeInOutCubic',
          duration:200,
        })
    },
    caBtnOpacity1(e) {
      e.stopPropagation()
      if(this.$refs.stTime2.style.opacity == '1'){
        this.$refs.stTime2.style.pointerEvents = 'none'
        this.$anime({
          targets:'#year-time-end',
          opacity:0,
          easing:'easeInOutCubic',
          duration:200,
        })
        return
      }
      this.$refs.stTime2.style.pointerEvents = 'auto'
      this.$anime({
          targets:'#year-time-end',
          opacity:1,
          easing:'easeInOutCubic',
          duration:200,
        })
    },
    dayBtnDisplay(item) {
      //console.log(item);
      this.btnMonthGo = item.month
      this.btnDayGo = item.day
    },
    dayBtnDisplay1(item) {
      //console.log(item);
      this.btnMonthEnd = item.month
      this.btnDayEnd = item.day
    },
    caBtnOpacityHourGo(e) {
      e.stopPropagation()
      if(this.$refs.stHourGo.style.opacity == '1'){
        this.$refs.stHourGo.style.pointerEvents = 'none'
        this.$anime({
          targets:'.hour-go',
          opacity:0,
          easing:'easeInOutCubic',
          duration:200,
        })
        return
      }
      this.$refs.stHourGo.style.pointerEvents = 'auto'
      this.$anime({
          targets:'.hour-go',
          opacity:1,
          easing:'easeInOutCubic',
          duration:200,
        })
    },
    caBtnOpacityHourEnd(e) {
      e.stopPropagation()
      if(this.$refs.stHourEnd.style.opacity == '1'){
        this.$refs.stHourEnd.style.pointerEvents = 'none'
        this.$anime({
          targets:'.hour-end',
          opacity:0,
          easing:'easeInOutCubic',
          duration:200,
        })
        return
      }
      this.$refs.stHourEnd.style.pointerEvents = 'auto'
      this.$anime({
          targets:'.hour-end',
          opacity:1,
          easing:'easeInOutCubic',
          duration:200,
        })
    },
    btnTimeGo(item) {
      
      this.timeGo = item.name1
    },

    btnTimeEnd(item) {
      
      this.timeEnd = item.name1
    },
    repBtnListM(e) {
      e.stopPropagation()
      if(this.$refs.repBtnList.style.opacity == '1'){
        this.$refs.repBtnList.style.pointerEvents = 'none'
        this.$anime({
          targets:'.rep-btn-list',
          opacity:0,
          easing:'easeInOutCubic',
          duration:200,
        })
        return
      }
      this.$refs.repBtnList.style.pointerEvents = 'auto'
      this.$anime({
          targets:'.rep-btn-list',
          opacity:1,
          easing:'easeInOutCubic',
          duration:200,
        })
    },
    repBtnItemM(item) {
      console.log(item.name);
      this.repBtnItem = item.name
    },
    timeUndone() {
      this.$anime({
          targets:'.time-zone-undone',
          opacity:1,
          easing:'easeInOutCubic',
          direction: 'alternate',
          duration:300,
          endDelay:600
        })
    },
    btnBold() {
      this.$refs.btnBold.style.backgroundColor = '#e0e0e0'
      this.textarea = '于谦'
       //console.log(this.$refs.textarea.value);
      console.log(this.textarea);
    }
  }
};
</script>

<style>
</style>