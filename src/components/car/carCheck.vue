<template>
  <div class="carCheck">
    <div class="radioGroup">
      <checklist :options="commonList" v-model="radioValue" :max="1" @on-change="change"></checklist>
      <div class="textarea" v-show="showTextarea">
        <textarea placeholder="请填写有异议的问题"></textarea>
      </div>
    </div>
    <div>
      <div class="center">
        <img class="carImg" src="../../assets/img/idCardFront.png">
        <div class="title">左前角45度</div>
      </div>
      <div class="center mgt20">
        <img class="carImg" src="../../assets/img/idCardBack.png">
        <div class="title">右前角45度</div>
      </div>
      <div class="center">
        <img class="carImg" src="../../assets/img/idCardFront.png">
        <div class="title">左后角45度</div>
      </div>
      <div class="center mgt20">
        <img class="carImg" src="../../assets/img/idCardBack.png">
        <div class="title">右后角45度</div>
      </div>
      <div class="center"> 
        <img class="carImg" src="../../assets/img/idCardFront.png">
        <div class="title">中控台前排座椅</div>
      </div>
      <div class="center mgt20">
        <img class="carImg" src="../../assets/img/idCardBack.png">
        <div class="title">后排座椅</div>
      </div>
    </div>
    <div class="nextStep nextStepEnable" @click="checkCar">
      确定
    </div>
  </div>
</template>

<script>
import { Checklist } from 'vux'
export default {
  name: 'carCheck',
  data(){
  	return{
      showTextarea:false,
      radioValue:[],
      commonList: [{key: '1', value: '没有问题'}, {key: '2', value: '有异议'}],
  	}
  },
  components: {
    Checklist
  },
  methods:{
    change (val, label) {
      if (val[0]==2) {
        this.showTextarea=true;
      }else{
        this.showTextarea=false;
      }
    },
  	checkCar(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";

/deep/ .weui-cells:after , /deep/ .weui-cell:before ,/deep/ .weui-cells:before{
  content: none;
}
.radioGroup{
  padding: 30px 60px;
}
.textarea{
  padding: 10px 40px;
  & textarea{
    width: 100%;
    height: 242px;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
  }
}
.carCheck{
  padding-bottom: 98px;
}
.title{
  text-align: center;
  color: var(--grey9);
  font-size: 30px;
  margin-bottom: 43px;
}
.carImg{
  width: 560px; 
  height: 246px;
}
</style>