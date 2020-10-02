<template>
  <div class="search-box">
    <div class="search-father">
      <a class="search" @click="changeSearch">
        <!-- <img src="./assets/search.svg" alt=""> -->
        <!-- <i class="material-icons">face</i> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </a>
      <div class="search-tips">搜索</div>
    </div>

    <div class="bgc-father" >
      <div id="search-bgc" ref="searchBgc">
        <div class="go-back" @click="goBackChange">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>

          <span>搜索</span>
        </div>

        <div class="search-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <input type="text" placeholder="搜索">
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    changeSearch() {
      this.$refs.searchBgc.style.display = 'block'
      setTimeout(() => {
        this.$refs.searchBgc.className = 'search-bgc-op'
      },0)
      
    },
    goBackChange() {
      
      setTimeout(() => {
        this.$refs.searchBgc.className = ''
      },0)
      setTimeout(() => {
        this.$refs.searchBgc.style.display = 'none'
      },200)
      
    }
  }
};
</script>

<style>
</style>