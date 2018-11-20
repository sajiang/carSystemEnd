<template>
  <div class="inputIdentifyCode">
    <div>
      <div class="title">输入验证码</div>
      <div class="tip1">验证码已发送至：{{phoneNumber}}</div>
      <div class="inputWapper">
        <input class="input" type="number"  min="0" v-model="code" @input="inputCode">
        <div class="lineWapper">
          <span v-for="i in 6" class="line"></span>
        </div>
      </div>
      <div class="center">
        <span class="complete" @click="naviToCreateNewCar" :class="code.length==6?'':'disable'">完成</span>
      </div>
      <div class="reSend" @click="getIdentifyCode">{{countDownNum>0?countDownNum+'秒后重发':'获取验证码'}}</div>
      <div class="tip2">登录即表示您同意<span class="green">《椰途出行注册协议》</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputIdentifyCode',
  data(){
  	return{
      code:'',
      phoneNumber:"18300000000",
      countDownNum:60,
      countTimer:0,
  	}
  },
  created(){
    this.countDown();
  },
  methods:{
  	countDown(){
      this.countDownNum=60;
      this.countTimer=setInterval(()=>{
        if (this.countDownNum==1) {
          clearInterval(this.countTimer);
        }
        this.countDownNum=this.countDownNum-1;
      },1000);
    },
    getIdentifyCode(){
      if (this.countDownNum>0) {return}
      this.countDown();
    },
    inputCode(e){
      if (this.password.length>5) {
        e.target.blur();
      }
    },
    naviToCreateNewCar(){
      this.$router.push({ path: `/submitCarInfo/createNewCar`});
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.title{
  font-size: 40px;
  color: var(--grey6);
  margin-top: 190px;
  text-align: center;
}
.tip1{
  font-size: 24px;
  text-align: center;
  color: #b3b3b3;
}
.inputWapper{
  text-align: center;
  margin-top: 40px;
  & input{
    text-align: left;
    outline: none;
    padding: 0 0 0 80px;
    line-height: 98px;
    height: 98px;
    letter-spacing:55px;
    font-size: 48px;
    width: 600px;
    box-sizing: border-box;
    border: none;
  }
  & .lineWapper{
    line-height: 1Px;
  }
  & .line{
    display: inline-block;
    background-color: #e6e6e6;
    width: 68px;
    height: 1Px;
    margin: 0 7px;
  }
}
.disable{
  background:#e6e6e6 !important;
  color: #9e9e9e !important;
}
.complete{
  border-radius: 8px;
  width: 420px;
  height: 98px;
  line-height: 98px;
  color: white;
  display: inline-block;
  background: var(--backlg);
  margin-top: 40px;
}
.reSend{
  text-align: center;
  color: var(--grey9);
  font-size: 24px;
  margin-top: 20px;
}
.tip2{
  margin-top: 118px;
  text-align: center;
  font-size: 28px;
  color: #b3b3b3;
  & .green{
    color: #89bc2e;
  }
}
</style>