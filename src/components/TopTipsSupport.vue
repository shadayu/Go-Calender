<template>
  <div>

    <div class="support-father">
      <label @click="checkActive" for="support-check">
        <a class="support">
          <svg width="24" height="24" viewBox="0 0 24 24" focusable="false">
            <path
              d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
            />
          </svg>
        </a>
        <div class="support-tips">支持</div>
      </label>
      
      
    </div>


    <input ref="check" type="checkbox" id="support-check" />
    <div class="support-bgc" ref="green">
      <div @click="cancelActive" class="change-bgc"></div>
      <div class="support-option">
        <div class="support-item">帮助</div>
        <div class="support-item">培训</div>
        <div class="support-item">动态</div>
        <div class="line"></div>
        <div class="support-item">发送反馈</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { fuck,ass } from "../utils.js/utils.js";
export default {
  
  methods: {
    checkActive() {
      return fuck(this.$refs.green)
    },
    cancelActive() {
      return ass(this.$refs.green,this.$refs)
    },
  },
};
</script>

<style>
</style>