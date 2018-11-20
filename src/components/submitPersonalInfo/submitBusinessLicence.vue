<template>
  <div class="submitBusinessLicence">
  	<div class="illustrate">（非必填）上传营业执照，有助于成交</div>
  	<div class="flexBox">
  		<div class="center item">
  			<img v-if="!businessLicence.imgDataUrl" class="drivingLicenseImg" src="../../assets/img/businessLicence.png">
  			<img v-else  class="drivingLicenseImg" :src="businessLicence.imgDataUrl">
  			<s-upload-img class="input" @fileUpload="saveBusinessLicence"></s-upload-img>
  		</div>
  	</div>
  	
  	<div class="nextStep" :class='businessLicence.imgDataUrl?"nextStepEnable":"nextStepdisable"' @click="naviToFaceRecognition">
  		下一步
  	</div>
  </div>
</template>

<script>
import uploadImg from '@/components/common/uploadImg'
export default {
  name: 'submitBusinessLicence',
  components: {
    's-upload-img': uploadImg,
  },
  data(){
  	return{
  		businessLicence:{
  			file:"",
  			imgDataUrl:""
  		},
  	}
  },
  methods:{
  	saveBusinessLicence(e){
  		this.businessLicence=e.imgObjs;
  	},
  	naviToFaceRecognition(){
  		this.$router.push({ path: `/submitPersonalInfo/submitFaceRecognition` })
  	}
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/css/common.css";
.illustrate{
	margin-top: 30px;
	text-align: center;
  font-size: 30px;
  color: var(--grey9)
}
.submitBusinessLicence{
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
	width: 640px;
	height: 897px;
}
.drivingLicenseImg{
	width: 640px;
  height: 897px;
}
.input{
	position: absolute;
	width: 640px;
  height: 897px;
	display: inline-block;
	left: 0;
	top:0;
	opacity: 0;
}
.nextStep{
	position: fixed;
	bottom:0;
	height:98px;
	line-height:98px;
	width:100%;
	text-align:center;
	font-size:40px;
	color:white;
}
.nextStepEnable{
	background:var(--backlg);
}
.nextStepdisable{
	background:#CCCCCC;
}
</style>