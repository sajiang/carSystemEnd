<template>
  <div class="manageBank">
    <div class="right"><span @click="naviToWithdrawRecord">提现记录</span></div>
  	<div class="creditCard flexBox">
  		<div class="lightGrey title">信用卡</div>
  		<div class="maincontent flex1 lightGrey">尾号2365信用卡</div>
  		<div class="check">删除</div>
  	</div>
  	<div class="creditCard flexBox" @click="naviToBindCreditCard">
  		<div class="lightGrey title"></div>
  		<div class="maincontent flex1 lightGrey">添加其他信用卡</div>
  		<div class="arrowRight"><img src="../../assets/img/i-arrowRight.png"></div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'manageBank',
  data(){
  	return{

  	}
  },
  methods:{
    naviToBindCreditCard(){
      this.$router.push({ path: `/submitPersonalInfo/bindCreditCard`});
    },
    naviToWithdrawRecord(){
      this.$router.push({ path: `/personalCenter/withdrawRecord`});
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.right{
  text-decoration: underline;
  font-size: 30px;
  margin:10px 20px;
  color: var(--backGreen);
}
.green{
	color: #22a938;
}
.flexBox{
	line-height: 128px;
	height: 128px;
	border-bottom: 1Px solid #e6e6e6;
	& .title{
		width:150px;
	}
}
.creditCard{
	margin:  0 20px;
	& .maincontent{
		font-size: 28px;
	}
	& .check{
		text-align: center;
    font-size: 24px;
    color: var(--grey9)
	}
	& .arrowRight{
		width: 68px;
		text-align: center;
		& img{
			width: 11px;
			height: 18px;
		}
	}
}

</style>