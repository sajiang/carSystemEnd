<template>
  <div class="selectPayType">
  	<div class="center">
  		<span class="depositFree">已免押金</span>
  	</div>
  	<div class="aliPay flexBox">
  		<div class="lightGrey title">支付宝</div>
  		<div class="flex1 maincontent">
  			<span class="green">芝麻信用 ≥700</span>
  			<span class="lightGrey">可以享受</span>
  			<span class="red">免押金</span>
  			<span class="lightGrey">服务</span>
  		</div>
  		<div @click="naviTobindAliPay"><span class="getAliPay">获取</span></div>
  	</div>
  	<div class="creditCard flexBox">
  		<div class="lightGrey title">信用卡</div>
  		<div class="maincontent flex1 lightGrey">尾号2365信用卡</div>
  		<div class="check"><img src="../../assets/img/i-check.png"></div>
  	</div>
  	<div class="creditCard flexBox">
  		<div class="lightGrey title"></div>
  		<div class="maincontent flex1 lightGrey">添加其他信用卡</div>
  		<div class="arrowRight"><img src="../../assets/img/i-arrowRight.png"></div>
  	</div>
  	<div class="bottom flexBox">
      <div class="flex1 price">¥268元</div>
      <div class="submit" @click="naviToSetPayPassword">提交订单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectPayType',
  data(){
  	return{

  	}
  },
  methods:{
  	naviTobindAliPay(){
  		this.$router.push({ path: `/submitPersonalInfo/bindAliPay`});
  	},
  	naviToSetPayPassword(){
  		this.$router.push({ path: `/submitPersonalInfo/setPayPassword`});
  	}
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.green{
	color: #22a938;
}
.depositFree{
	border-radius: 8px;
	color: white;
	background-color: #d90700;
	display: inline-block;
	margin-top: 60px;
	width: 128px;
	font-size: 24px;
	height: 40px;
	line-height: 40px;
}
.flexBox{
	line-height: 128px;
	height: 128px;
	border-bottom: 1Px solid #e6e6e6;
	& .title{
		width:150px;
	}
}
.aliPay{
	margin: 24px 20px 0 20px;
	& .maincontent{
		font-size: 28px;
		& .red{
			color: #cc0700;
		}
	}
	& .getAliPay{
		color: white;
		border-radius: 8px;
		background-color: #20b02b;
		font-size: 24px;
		height: 40px;
		line-height: 40px;
		width: 68px;
		display: inline-block;
		text-align: center;
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
.bottom{
  position: fixed;
  bottom:0;
  height:98px;
  width:100%;
  background:white;
  box-shadow:0px -1Px 30px #cccccc;
  & .price{
  	text-align: center;
    font-size:40px;
    font-weight:bold;
    color:var(--baseGreen);
  }
  & .submit{
    width:320px;
    height:98px;
    line-height:98px;
    text-align:center;
    color:white;
    background:var(--backlg);
  }
}
</style>