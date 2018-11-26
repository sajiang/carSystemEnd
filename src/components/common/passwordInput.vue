<template>
  <div class="passwordInput">
  	<div v-transfer-dom>
      <popup v-model="show" >
        <div class="popup">
	        <div class="head">
	        	<icon type="cancel" @click.native="$emit('update:show',false)"></icon>
	        	<div class="flex1 center">请输入支付密码</div>
	        </div>
	        <div class="inputPassword">
	        	<div class="center">
	        		提现到尾号<span class="green">2365信用卡</span>
	        		<img class="arrowRight" src="../../assets/img/i-arrowRight.png">
	        	</div>
	        	<div class="passwordDiv">
	        		<div class="inputBg">
				        <div class="lineWapper">
				          	<span v-for="i in 5" class="line"></span>
				        </div>
				        <div class="dotWapper">
				        	<span class="dot" v-for="i in password.length"></span>
				        </div>
				        <input class="input" type="number"  min="0" v-model="password" @input="inputPassword">
				    </div>
				    
			    </div>
	        </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { Popup,TransferDom ,Icon } from 'vux'
export default {
  name: 'passwordInput',
  data(){
  	return{
  		password:"",
  	}
  },
  directives: {
    TransferDom
  },
  components: {
    Popup,Icon
  },
  props:['show'],
  methods:{
  	inputPassword(e){
  		if (this.password.length>5) {
  			e.target.blur();
  			//验证密码成功
  			//..
  			if (true) {
  				this.passwordIdentified();
  			}else{
  				this.$vux.alert.show({
			        title:"密码错误",
			        maskZIndex:1004,
			        dialogStyle:{"z-index":1005}
			    });
  			}

  		}
  	},
  	//确认密码后
  	passwordIdentified(){
  		this.$emit('update:show',false);
  		this.$emit('done');
  	}
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
/deep/ .weui-dialog{
	z-index: 1005;
}
.popup{
	height: 750px;
	background-color: white;
	& .head{
		height: 98px;
		line-height: 98px;
		font-size: 40px;
		display: flex;
		align-items: center;
		padding-left: 34px;
		padding-right: 78px;
		border-bottom: 1Px solid #e6e6e6;
	}
	& .inputPassword{
		margin-top: 50px;
		& .arrowRight{
			width: 11px;
			height: 18px;
		}
		& .passwordDiv{
			text-align: center;
			margin-top: 40px;
			
			& .inputBg{
				line-height: 98px;
				height: 98px;
				width: 635px;
				background-color: #e6e6e6;
				border-radius: 8px;
				display: inline-block;
				position: relative;
			}
			& .lineWapper{
				& .line{
					display: inline-block;
					height: 98px;
					width: 1Px;
					background: #DDDDDD;
					margin: 0 52.9px;
				}
				
			}
			& .dotWapper{
				text-align: left;
				position: absolute;
				top: 0;
				left: 0;
				& .dot{
					display: inline-block;
					height: 20px;
					width: 20px;
					border-radius: 20px;
					background-color: black;
					margin:0 42.8px;
				}
			}
			& input{
				position: absolute;
				top: 0;
				left: 0;
				text-align: left;
				outline: none;
				padding: 0 0 0 37px;
				line-height: 98px;
				height: 98px;
				letter-spacing:80px;
				font-size: 48px;
				width: 690px;
				box-sizing: border-box;
				background-color: rgba(1,1,1,0);
				border:none;
				opacity: 0;
			}
		}
	}
}
</style>
