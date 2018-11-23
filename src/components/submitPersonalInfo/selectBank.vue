<template>
  <div class="selectBank">
  	<div class="creditCard flexBox">
  		<div class="lightGrey title">信用卡</div>
  		<div class="maincontent flex1 lightGrey">尾号2365信用卡</div>
  		<div class="check"><img src="../../assets/img/i-check.png"></div>
  	</div>
  	<div class="creditCard flexBox" @click="naviToBindCreditCard">
  		<div class="lightGrey title"></div>
  		<div class="maincontent flex1 lightGrey">添加其他信用卡</div>
  		<div class="arrowRight"><img src="../../assets/img/i-arrowRight.png"></div>
  	</div>
    <div class="nextStep nextStepEnable" @click="naviToWithdrawCash">
      确定
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectBank',
  data(){
  	return{

  	}
  },
  methods:{
  	naviToWithdrawCash(){
  		this.$router.push({ path: `/personalCenter/withdrawCash`});
  	},
    naviToBindCreditCard(){
      this.$router.push({ path: `/submitPersonalInfo/bindCreditCard`});
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
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
		width: 68px;
		text-align: center;
		& img{
			width: 42px;
			height: 42px;
		}
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