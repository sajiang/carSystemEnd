<template>
  <div class="submitIdCard">
  	<div class="flexBox">
  		<div class="center item">
  			<img v-if="!idCardFront.imgDataUrl" class="idCardImg" src="../../assets/img/idCardFront.png">
  			<img v-else  class="idCardImg" :src="idCardFront.imgDataUrl">
  			<s-upload-img class="input" @fileUpload="saveIdCardFront"></s-upload-img>
  		</div>
  	</div>
  	<div class="flexBox">
  		<div class="center item">
  			<img v-if="!idCardBack.imgDataUrl" class="idCardImg" src="../../assets/img/idCardBack.png">
  			<img v-else  class="idCardImg" :src="idCardBack.imgDataUrl">
  			<s-upload-img class="input" @fileUpload="saveIdCardBack"></s-upload-img>
  		</div>
  	</div>
  	<div class="nextStep" :class='idCardFront.imgDataUrl&&idCardBack.imgDataUrl?"nextStepEnable":"nextStepdisable"' @click="naviToSubmitDrivingLicense">
  		下一步
  	</div>
  </div>
</template>

<script>
import uploadImg from '@/components/common/uploadImg'

export default {
  name: 'submitIdCard',
  data(){
  	return{
  		idCardFront:{
  			file:"",
  			imgDataUrl:""
  		},
  		idCardBack:{
  			file:"",
  			imgDataUrl:""
  		},
  	}
  },
  components: {
    's-upload-img': uploadImg,
  },
  methods:{
  	saveIdCardFront(e){
  		this.idCardFront=e.imgObjs;
  	},
  	saveIdCardBack(e){
  		this.idCardBack=e.imgObjs; 
  	},
  	naviToSubmitDrivingLicense(){
  		this.$router.push({ path: `/submitPersonalInfo/submitBusinessLicence` })
  	}
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/css/common.css";
.submitIdCard{
  padding-bottom: 118px;
	.flexBox{
		align-items: center;
		vertical-align: middle;
		justify-content:center;
	}
}
.item{
	margin-top: 80px;
	position: relative;
	width: 520px;
	height: 320px;
}
.idCardImg{
	width: 520px;
	height: 320px;
}
.input{
	position: absolute;
	width: 520px;
	height: 320px;
	display: inline-block;
	left: 0;
	top:0;
	opacity: 0;
}

</style>