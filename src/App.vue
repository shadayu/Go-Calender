<template>
  <div id="app">
    <head-fuck v-if="isStop" @btnLeftBarMove="heiYou" ></head-fuck>
    <!-- <keep-alive> -->
      <router-view ref="myHome" />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
   import HeadFuck from "./components/Head.vue";

export default {
  data() {
    return{
      isStop:true
    }
    
  },
  created(){
    if(this.$route.path == '/eventedit') {
      this.isStop = false
    }
  },
 components:{
   HeadFuck,
 },

  methods:{
    heiYou() {
      this.$refs.myHome.fuckyou()
    },
    
  }
};
</script>
<style>
@import "./less/homeTop.css";
</style>
