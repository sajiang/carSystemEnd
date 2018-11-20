<template>
  <div class="bindAliPay">
    <div class="mainContent">
      <div class="tip">
        <span class="green">芝麻信用 ≥700</span>
        <span class="">可以享受</span>
        <span class="red">免押金</span>
        <span class="">服务</span>
      </div>
      <div class="center">
        <input class="input" type="text" v-model="aliPayAccount" placeholder="输入支付宝账号">
      </div>
    </div>
    <div class="center"><span class="compelete" @click="backUp">完成</span></div>
  </div>
</template>

<script>
export default {
  name: 'bindAliPay',
  data(){
  	return{
      aliPayAccount:""
  	}
  },
  methods:{
  	backUp(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.mainContent{
  margin-top: 200px; 
  & .tip{
    text-align: center;
    font-size: 28px;
    & .green{
      color: #119d3f;
    }
    & .red{
      color: #ce0000;
    }
  }
  & .input{
    width: 520px;
    height: 98px;
    line-height: 95px;
    font-size: 30px;
    padding-left: 60px;
    box-sizing: border-box;
    background-color: #e6e6e6;
    border: none;
    margin-top: 30px;
    border-radius: 8px;
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
  margin-top: 179px;
}
</style>