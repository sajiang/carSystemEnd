<template>
  <div class="controlCar bold">
    <div class="line1">
      <div class="center" @click="isCarOpen=true">
        <img class="icon" v-if="isCarOpen" src="../../assets/img/openCarDisable.png">
        <img class="icon" v-else src="../../assets/img/openCarEnable.png">
        <div class="title">解锁</div>
      </div>
      <div class="center" @click="isCarOpen=false">
        <img class="icon" v-if="isCarOpen" src="../../assets/img/closeCarEnable.png">
        <img class="icon" v-else src="../../assets/img/closeCarDisable.png">
        <div class="title">已锁</div>
      </div>
    </div>
    <div class="line2">
      <div class="center">
        <img class="icon"  src="../../assets/img/findCarByLightAndVoice.png">
        <div class="title">声光寻车</div>
      </div>
      <div class="center">
        <img class="icon"  src="../../assets/img/searchLocation.png">
        <div class="title">位置查询</div>
      </div>
    </div>
    <div class="line3">
      <div class="center lastOne" @click="isTrunkOpen=!isTrunkOpen">
        <img v-if="isTrunkOpen" class="icon"  src="../../assets/img/openTrunkDisable.png">
        <img v-else class="icon"  src="../../assets/img/openTrunkEnable.png">
        <div class="title">后备箱</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'controlCar',
  data(){
  	return{
      isTrunkOpen:false,
      isCarOpen:true,
  	}
  },
  methods:{
  	
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.controlCar{
  padding: 0 143px;
}
.line1{
  display: flex;
  margin-top: 106px;
  justify-content: space-between;
}
.line2{
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}
.line3{
  margin-top: 100px;
}
.lastOne{
  display: inline-block;
}
.icon{
  width: 172px;
  height: 188px;
}
.title{
  line-height: 0;
}
</style>