<template>
  <div class="rentCarPersonInfo">
    <div>
      <div class="title">身份证正反面</div>
      <div class="center">
        <img class="idCard" src="../../assets/img/idCardFront.png">
      </div>
      <div class="center mgt20">
        <img class="idCard" src="../../assets/img/idCardBack.png">
      </div>
    </div>
    <div>
      <div class="title">机动车驾驶证</div>
      <div class="center">
        <img class="drivingLicense" src="../../assets/img/idCardFront.png">
      </div>
      <div class="center mgt20">
        <img class="drivingLicense" src="../../assets/img/idCardBack.png">
      </div>
    </div>
    <div>
      <div class="title">人脸识别照片</div>
      <div class="center">
        <img class="faceImg" src="../../assets/img/idCardFront.png">
      </div>
    </div>
    <div class="nextStep nextStepEnable" @click="surePersonInfo">
      完成
    </div>
  </div>
</template>

<script>
export default {
  name: 'rentCarPersonInfo',
  data(){
  	return{

  	}
  },
  methods:{
  	surePersonInfo(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.rentCarPersonInfo{
  padding-bottom: 98px;
}
.title{
  text-align: center;
  color: var(--grey9);
  font-size: 30px;
  margin-top: 60px;
  margin-bottom: 18px;
}
.idCard{
  width: 520px; 
  height: 320px;
}
.drivingLicense{
  width: 640px; 
  height: 440px;
}
.faceImg{
  width: 520px;
  height: 580px;
}
</style>