<template>
  <div class="setting-all" v-title data-title="日历 - 设置">
    
    <div class="setting-left">
      <div class="basic" ref="basic">
        <button id="basic-head"  @click="basicActive">
          <span>基本</span>
        </button>
        
        <button class="basic-btn">
          <div class="line"></div>
          <span>语言和区域</span>
        </button>
        <button class="basic-btn">
          <div class="line"></div>
          <span>时区</span>
        </button>
        <button class="basic-btn">
          <div class="line"></div>
          <span>世界时钟</span>
        </button>
        <button class="basic-btn">
          <div class="line"></div>
          <span>活动设置</span>
        </button>
        <button class="basic-btn">
          <div class="line"></div>
          <span>视图选项</span>
        </button>
        <button class="basic-btn">
          <div class="line"></div>
          <span>来自qq.com的活动</span>
        </button>
        <button class="basic-btn">
          <div class="line"></div>
          <span>键盘快捷键</span>
        </button>
      </div>
      <div class="add" ref="add">
        <button class="add-head" @click="addActive">
          <span>添加日历</span>
        </button>

        <button class="add-btn">
          <div class="line"></div>
          <span>订阅日历</span>
        </button>
        <button class="add-btn">
          <div class="line"></div>
          <span>创建新日历</span>
        </button>
        <button class="add-btn">
          <div class="line"></div>
          <span>浏览感兴趣的日历</span>
        </button>
        <button class="add-btn">
          <div class="line"></div>
          <span>通过网址添加</span>
        </button>
      </div>
      <div class="import">
        <button class="import-head">
          <span>导入和导出</span>
        </button>
      </div>
      <div class="my-calender" ref="my">
        <button class="my-calender-head" @click="myActive">
          <span>我的日历设置</span>
        </button>
        <button class="my-calender-btn">
          <div class="line"></div>
          <span>顾翔远</span>
        </button>
        <button class="my-calender-btn">
          <div class="line"></div>
          <span>生日</span>
        </button>
        
      </div>
      <div class="other-calender">
        <button class="other-head">
          <span>其他日历设置</span>
        </button>
      </div>
    </div>
    <div class="setting-content">
      <div class="scrollbar">
        <div class="basic-content">

          <div class="language ">
            <span>语言和区域</span>
            <div class="input" @click="openValue">
              <input readonly="readonly" v-model="languageValue" type="text" placeholder="语言">
            </div>
            <div id="languageList"  ref="languageList" >
              <ul>
                <li  @click="getValue(item)" v-for="item in languageList" :key='item'>{{item}}</li>
              </ul>
            </div>

            <div class="input" @click="openValue2">
              <input readonly="readonly" v-model="countryValue" type="text" placeholder="国家/地区">
            </div>
            <div id="languageList"  ref="countryList" >
              <ul>
                <li  @click="getValue2(item)" v-for="item in countryList" :key='item'>{{item}}</li>
              </ul>
            </div>

            <div class="input" @click="openValue3">
              <input readonly="readonly" v-model="dateFormatValue" type="text" placeholder="日期格式">
            </div>
            <div id="languageList"  ref="dateFormat" >
              <ul>
                <li  @click="getValue3(item)" v-for="item in dateFormat" :key='item'>{{item}}</li>
              </ul>
            </div>

            <div class="input" @click="openValue4">
              <input readonly="readonly" v-model="timeFormatValue" type="text" placeholder="时间格式">
            </div>
            <div id="languageList"  ref="timeFormat" >
              <ul>
                <li  @click="getValue4(item)" v-for="item in timeFormat" :key='item'>{{item}}</li>
              </ul>
            </div>
          </div>

          <div class="time-zone">
            <span class="time-head">时区</span>
            <div class="message" @click="changeActive1">
              <svg v-if="active1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>显示次要时区</span>
            </div>

            <div class="input" @click="openValue5">
              <input readonly="readonly" v-model="timeZoneValue" type="text" placeholder="主要时区">
            </div>
            <div id="timeZoneList"  ref="timeZone" >
              <ul>
                <li  @click="getValue5(item)" v-for="item in timeZoneList" :key='item'>{{item}}</li>
              </ul>
            </div>

            <div class="input" >
              <input readonly="readonly" v-model="timeZoneValue2" type="text" placeholder="次要时区">
            </div>
            <div id="timeZoneList"   >
              <ul>
                <li >次要时区</li>
              </ul>
            </div>
            
            <div class="message" @click="changeActive2">
              <svg v-if="active2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>提示我根据当前位置更新主要时区</span>
              
            </div>
            详细了解 xxx 日历在不同时区如何运作
          </div>

          <div class="world-time">
            <span class="world-head">世界时钟</span>
            <div class="message" @click="changeActive3">
              <svg v-if="active3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>显示世界时钟</span>
              
            </div>
            <div class="message">
            </div>
            
          </div>

          <div class="activity-set">
            <span class="activity-head">活动设置</span>
            <div class="input" @click="openValue6">
              <input readonly="readonly" v-model="activityValue" type="text" placeholder="默认时长">
            </div>
            <div id="activityList"  ref="activity" >
              <ul>
                <li  @click="getValue6(item)" v-for="item in activityList" :key='item'>{{item}}</li>
              </ul>
            </div>
            
            <div class="message" @click="changeActive4">
              <svg v-if="active4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>高效会议</span>
            </div>
            <div class="input" @click="openValue7">
              <input readonly="readonly" v-model="powerValue" type="text" placeholder="邀请对象权限">
            </div>
            <div id="activityList"  ref="power" >
              <ul>
                <li  @click="getValue7(item)" v-for="item in powerList" :key='item'>{{item}}</li>
              </ul>
            </div>

            <div class="input" @click="openValue8">
              <input readonly="readonly" v-model="autoValue" type="text" placeholder="自动添加邀请">
            </div>
            <div id="activityList"  ref="auto" >
              <ul>
                <li  @click="getValue8(item)" v-for="item in autoList" :key='item'>{{item}}</li>
              </ul>
            </div>

            <div class="input" @click="openValue9">
              <input readonly="readonly" v-model="infromValue" type="text" placeholder="通知">
            </div>
            <div id="activityList"  ref="infrom" >
              <ul>
                <li  @click="getValue9(item)" v-for="item in infromList" :key='item'>{{item}}</li>
              </ul>
            </div>
            
            <div class="message" @click="changeActive5">
              <svg v-if="active5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>播放提示音</span>
              
            </div>
            <div class="message" @click="changeActive6">
              <svg v-if="active6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>自动将视频会议假如我创建的活动</span>
            </div>
          </div>


          <div class="view-option">
            <span class="view-head">视图选项</span>
            
            
            <div class="message" @click="changeActive7">
              <svg v-if="active7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>显示周末</span>
              
            </div>
            
            <div class="message" @click="changeActive8">
              <svg v-if="active8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>显示已拒绝的活动</span>
              
            </div>
            <div class="message" @click="changeActive9">
              <svg v-if="active9" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>显示周数</span>
              
            </div>
            <div class="message" @click="changeActive10">
              <svg v-if="active10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>将时长未达到30分钟的活动作为30分钟显示</span>
              
            </div>
            <div class="message" @click="changeActive11">
              <svg v-if="active11" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>降低过往活动的亮度</span>
              
            </div>
            <div class="message" @click="changeActive12">
              <svg v-if="active12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>在'日'视图中并查看日历</span>
              
            </div>

            <div class="input" @click="openValue10">
              <input readonly="readonly" v-model="viewValue" type="text" placeholder="一周的第一天">
            </div>
            <div id="viewList"  ref="view" >
              <ul>
                <li  @click="getValue10(item)" v-for="item in viewList" :key='item'>{{item}}</li>
              </ul>
            </div>

            <div class="input" @click="openValue11">
              <input readonly="readonly" v-model="customValue" type="text" placeholder="自定义视图">
            </div>
            <div id="viewList"  ref="custom" >
              <ul>
                <li  @click="getValue11(item)" v-for="item in customList" :key='item'>{{item}}</li>
              </ul>
            </div>

            <div class="input" @click="openValue12">
              <input readonly="readonly" v-model="otherValue" type="text" placeholder="其他日历">
            </div>
            <div id="viewList"  ref="other" >
              <ul>
                <li  @click="getValue12(item)" v-for="item in otherList" :key='item'>{{item}}</li>
              </ul>
            </div>
            
          </div>

          <div class="grey-attribute">
            <span class="grey-head">来自Gmail的活动</span>
            <div class="message" @click="changeActive13">
              <svg v-if="active13" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>自动将xxx 中的活动添加到我的日历中</span>
            </div>
          </div> 

          <div class="grey-attribute">
            <span class="grey-head">键盘快捷键</span>
            <div class="message" @click="changeActive14">
              <svg v-if="active14" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>启用键盘快捷键</span>
            </div>
          </div> 

        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import {setBtn} from "../utils.js/methods.js"

export default {
  data() {
    return {
      active2:true,
      languageValue:'',
      countryValue:'',
      dateFormatValue:'',
      timeFormatValue:'',
      timeZoneValue:'',
      timeZoneValue2:'',
      activityValue:'',
      powerValue:'',
      autoValue:'',
      infromValue:'',
      viewValue:'',
      customValue:'',
      otherValue:'',
      show:false,
      showTips:false,
      languageList:[
        '中文(简体)','日文','英语','法语','德语'
      ],
      countryList:[
        '中国','日本','美国','英国','德国'
      ],
      dateFormat:[
        '2020-12-31','12/31/2020','31/12/2020'
      ],
      timeFormat:[
        '下午1:00','13:00'
      ],
      timeZoneList:[
        '中国标准时间-上海','中国标准时间-澳门','美国标标准时间-华盛顿'
      ],
      activityList:[
        '15分钟','20分钟','30分钟','45分钟','60分钟','90分钟','120分钟'
      ],
      powerList:[
        '修改活动','查看其他人','查看邀请对象列表'
      ],
      autoList:[
        '是','是,但不要发送通知','不,仅显示我以回复的'
      ],
      infromList:[
        '关闭','桌面通知','提醒'
      ],
      viewList:[
        '星期一','星期六','星期日'
      ],
      customList:[
        '2天','3天','4天','5天'
      ],
      otherList:[
        '无','中文(简体)','中文(繁体)','回民'
      ],
      active1:true,
      active2:true,
      active3:true,
      active4:true,
      active5:true,
      active6:true,
      active7:true,
      active8:true,
      active9:true,
      active10:true,
      active11:true,
      active12:true,
      active13:true,
      active14:true,
    }
  },
  created() {
    
  },
  methods:{
    basicActive() {
      if(this.$refs.basic.clientHeight === 40) {
        this.$anime({
        targets:'.basic',
        //backgroundColor:'#58B19F',
        duration:400,
        height:'*=8',
        easing:'easeInOutCubic'
        })
        return
      }
      //this.$refs.basic.parentNode.style.maxHeight = '40px'
      //this.$refs.basic.parentNode.style.height = '500px'
      this.$anime({
        targets:'.basic',
        //backgroundColor:'#58B19F',
        duration:400,
        height:40,
        easing:'easeInOutCubic'
      })
    },
    addActive() {
      if(this.$refs.add.clientHeight === 40) {
        this.$anime({
        targets:'.add',
        //backgroundColor:'#58B19F',
        duration:400,
        height:'*=5',
        easing:'easeInOutCubic'
        })
        return
      }
      //this.$refs.basic.parentNode.style.maxHeight = '40px'
      //this.$refs.basic.parentNode.style.height = '500px'
      this.$anime({
        targets:'.add',
        //backgroundColor:'#58B19F',
        duration:400,
        height:40,
        easing:'easeInOutCubic'
      })
    },
    myActive() {
      if(this.$refs.my.clientHeight === 40) {
        this.$anime({
        targets:'.my-calender',
        //backgroundColor:'#58B19F',
        duration:300,
        height:'*=3',
        easing:'easeInOutCubic'
        })
        return
      }
      //this.$refs.basic.parentNode.style.maxHeight = '40px'
      //this.$refs.basic.parentNode.style.height = '500px'
      this.$anime({
        targets:'.my-calender',
        //backgroundColor:'#58B19F',
        duration:300,
        height:40,
        easing:'easeInOutCubic'
      })
    },
    openValue(){
        const that = this
        setBtn(this.$refs.languageList,that)
    },
    getValue(item) {
        this.languageValue = item
        this.$refs.languageList.className = ''
    },    

    openValue2() {
      const that = this
        setBtn(this.$refs.countryList,that)
    },
    getValue2(item) {
        this.countryValue = item
        this.$refs.countryList.className = ''
    },
    openValue3() {
      const that = this
        setBtn(this.$refs.dateFormat,that)
    },
    getValue3(item) {
        this.dateFormatValue = item
        this.$refs.dateFormat.className = ''
    },
    openValue4() {
      const that = this
        setBtn(this.$refs.timeFormat,that)
    },
    getValue4(item) {
        this.timeFormatValue = item
        this.$refs.timeFormat.className = ''
    },
    openValue5() {
        setBtn(this.$refs.timeZone)
    },
    getValue5(item) {
        this.timeZoneValue = item
        this.$refs.timeZone.className = ''
    },
    openValue6() {
        setBtn(this.$refs.activity)
    },
    getValue6(item) {
        this.activityValue = item
        this.$refs.activity.className = ''
    },
    openValue7() {
        setBtn(this.$refs.power)
    },
    getValue7(item) {
        this.powerValue = item
        this.$refs.power.className = ''
    },
    openValue8() {
        setBtn(this.$refs.auto)
    },
    getValue8(item) {
        this.autoValue = item
        this.$refs.auto.className = ''
    },
    openValue9() {
        setBtn(this.$refs.infrom)
    },
    getValue9(item) {
        this.infromValue = item
        this.$refs.infrom.className = ''
    },
    openValue10() {
        setBtn(this.$refs.view)
    },
    getValue10(item) {
        this.viewValue = item
        this.$refs.view.className = ''
    },
    openValue11() {
        setBtn(this.$refs.custom)
    },
    getValue11(item) {
        this.customValue = item
        this.$refs.custom.className = ''
    },
    openValue12() {
        setBtn(this.$refs.other)
    },
    getValue12(item) {
        this.otherValue = item
        this.$refs.other.className = ''
    },
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
    changeActive6() {
      this.active6 = !this.active6
    },
    changeActive7() {
      this.active7 = !this.active7
    },
    changeActive8() {
      this.active8 = !this.active8
    },
    changeActive9() {
      this.active9 = !this.active9
    },
    changeActive10() {
      this.active10 = !this.active10
    },
    changeActive11() {
      this.active11 = !this.active11
    },
    changeActive12() {
      this.active12 = !this.active12
    },
    changeActive13() {
      this.active13 = !this.active13
    },
    changeActive14() {
      this.active14 = !this.active14
    },

    
  },
  

};
</script>

<style>
</style>