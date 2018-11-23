<template>
  <div class="withdrawCash">
  	<div class="item flexBox">
      <div class="flex1 lightGrey">提现/元</div>
      <div class="darkGreen">300,237.00</div>
    </div>
    <div class="item flexBox">
      <div class="flex1 lightGrey">服务费/元</div>
      <div class="">-50.00</div>
    </div>
    <div class="item flexBox">
      <div class="flex1 lightGrey">优惠券</div>
      <div class="darkGreen">已使用</div>
    </div>
    <div class="tip">验证码已发送至：16851654412</div>
    <div class="item flexBox">
      <div class="flex1 lightGrey">
        <input class="font30 input" placeholder="输入手机验证码" type="" name="">
      </div>
      <span class="lightGrey font24" @click="getIdentifyCode">{{countDownNum>0?countDownNum+'秒后重发':'获取验证码'}}</span>
    </div>
    <div class="item password">
      <div class="flex1 lightGrey">
        <input class="font30 input " placeholder="输入提现密码" type="password" name="">
      </div>
    </div>
    <div class="tip2 flexBox font24 lightGrey">
      <div class="flex1  ">
        实际到账
      </div>
      <div>300,1186.50元</div>
    </div>
    <div class="nextStep nextStepEnable" @click="submitWithdrawCash">
      确定
    </div>
  </div>
</template>

<script>
export default {
  name: 'withdrawCash',
  data(){
  	return{
      countDownNum:0,
    }
  },
  methods:{
  	getIdentifyCode(){
      if (this.countDownNum>0) {return}
      this.countDownNum=60;
      this.countTimer=setInterval(()=>{
        if (this.countDownNum==1) {
          clearInterval(this.countTimer);
        }
        this.countDownNum=this.countDownNum-1;
      },1000);
    },
    submitWithdrawCash(){}
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.item{
  font-size: 30px;
  line-height: 90px;
  height: 90px;
  margin: 0 40px;
  border-bottom: 1Px solid var(--border-grey);
}
.tip{
  color: var(--grey9);
  font-size: 24px;
  margin: 40px 0 0 40px;
}
.input{
  line-height: 90px;
  border: none;
  outline: none;
}
.password{
  line-height: 140px;
  height: 140px;
  ＆　.input{
    line-height: 140px;
  }
}
.tip2{
  margin: 20px 40px;
}
</style>