<template>
  <div class="submitFaceRecognition">
  	<div class="camera">
  		<img src="../../assets/img/faceRecognition.png">
  		<video v-if="false" id="video" autoplay="autoplay" @click="getMedia()"></video>
  	</div>
  	<div class="tip">
  		<div>请对准图上面的人头区域，摘除眼镜</div>
		<div>保持图像情绪</div>
  	</div>
  	<button id="snap" v-if="false" @click="takePhoto()" >拍照</button>
  	<div v-if="false">
  		<canvas id="canvas"></canvas>
  	</div>
	  <div class="nextStep nextStepEnable" @click="backToIndex">
  		下一步
  	</div>
	
  </div>
</template>
<script type="text/javascript" src="../../assets/js/exif.js"></script>
<script>
export default {
  name: 'submitFaceRecognition',
  methods:{
  	getMedia() {
        let constraints = {
            video: { facingMode: "user" },//优先用前置摄像头
            audio: true
        };
        //获得video摄像头区域
        let video = document.getElementById("video");
        let promise = navigator.mediaDevices.getUserMedia(constraints);
        promise.then(function (MediaStream) {
            video.srcObject = MediaStream;
            video.play();
            console.log(MediaStream)
        });
    },
    takePhoto() {
      //获得Canvas对象
      let video = document.getElementById("video");
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext('2d');
      console.log(video.getBoundingClientRect().height)
      ctx.drawImage(video, 0, 0,video.getBoundingClientRect().width*4,video.getBoundingClientRect().height*4,0,0,video.getBoundingClientRect().width,video.getBoundingClientRect().height);
    },
    backToIndex(){
      this.$vux.alert.show({
        title: '您的资料已提交完成',
        content: '工作人员会在一个工作日内审核完成，请您耐心等待',
        onHide:()=> {
          this.$router.push({ path: `/`});
        }
      });
      
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.camera{
	text-align: center;
	margin-top: 100px;
	position: relative;
	& img{
		width: 520px;
		height: 580px;
	}
	& #video{
		position: absolute;
		top: 0;
		left:50%;
		margin-left: -260px;
		width: 520px;
		height: 580px;
	}
}
.tip{
	font-size: 30px;
	text-align: center;
	margin-top: 80px;
	color: var(--grey9)
}
#canvas{
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
</style>