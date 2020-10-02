<template>
  <div>
    <label @click="checkActive" for="date-btn-check" class="date-btn-right">年</label>
    <input id="date-btn-check" type="checkbox" ref="check" />
    <div class="menu-option-bgc" ref="green">
      <div @click="cancelActive" class="bgc"></div>
      <div class="menu-option" id="menu-option">
        <div class="day">
          日
          <span>D</span>
        </div>
        <div class="day">
          周
          <span>W</span>
        </div>
        <div class="day">
          月
          <span>M</span>
        </div>
        <div class="day">
          年
          <span>Y</span>
        </div>
        <div class="day">
          日程
          <span>A</span>
        </div>
        <div class="day">
          4天
          <span>X</span>
        </div>
        <div class="line"></div>
        <div class="day">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          显示周末
        </div>
        <div class="day">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          显示以拒绝的活动
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    checkActive() {
      if (this.$refs.green.style.display === "block") {
        setTimeout(() => {
          this.$refs.green.style.display = "none";
        }, 200);

        return;
      }
      this.$refs.green.style.display = "block";
      console.log(1);
    },
    cancelActive() {
      setTimeout(() => {
        this.$refs.green.style.display = "none";
      }, 200);

      this.$refs.check.checked = false;
    },
  },
};
</script>

<style>
</style>