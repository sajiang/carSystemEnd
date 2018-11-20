<template>
  <div class="setPayPassword">
    <div class="mainContent">
      <div class="tip">
        <span class="lightGrey">验证码已发送至：{{phoneNumber}}</span>
      </div>
      <div class="center">
        <div class="inputWapper">
          <input class="input identifyCode"  type="text" v-model="identifyCode" placeholder="输入验证码">
          <span class="getCode" @click="getIdentifyCode">{{countDownNum>0?countDownNum+'秒后重发':'获取验证码'}}</span>
        </div>
      </div>
      <div class="center">
        <div class="inputWapper">
          <input class="input" type="text" v-model="password" placeholder="输入密码">
        </div>
      </div>
    </div>
    <div class="center"><span class="compelete" :class="password&&identifyCode?'':'disableBtn'">确定</span></div>
  </div>
</template>

<script>
export default {
  name: 'setPayPassword',
  data(){
  	return{
      phoneNumber:"12412333212",
      identifyCode:"",
      password:"",
      countDownNum:0,
      countTimer:0,
  	}
  },
  methods:{
  	getIdentifyCode(){
      if (this.countDownNum>0) {return}
      this.countDownNum=3;
      this.countTimer=setInterval(()=>{
        if (this.countDownNum==1) {
          clearInterval(this.countTimer);
        }
        this.countDownNum=this.countDownNum-1;
      },1000);
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.mainContent{
  margin-top: 100px;
  & .tip{
    text-align: center;
    font-size: 24px;
  }
  & .inputWapper{
    width: 520px;
    height: 98px;
    line-height: 95px;
    font-size: 30px;
    box-sizing: border-box;
    background-color: #e6e6e6;
    margin-top: 30px;
    border-radius: 8px;
    display: inline-block;
    text-align: left;

    & input{
      font-size: 30px;
      border:none;
      background-color: #e6e6e6;
      outline: none;
      margin-left: 60px;
      vertical-align: middle;
    }
    & .identifyCode{
      width: 300px
    }
    & .getCode{
      color: var(--grey9);
      font-size: 24px;
    }
  }
}
.compelete{
  background:var(--backlg);
  color: white;
  height: 98px;
  line-height: 98px;
  width: 520px;
  display: inline-block;
  border-radius: 8px;
  margin-top: 134px;
}
.disableBtn{
  background:#e6e6e6;
  color: #9e9e9e;
}
</style>