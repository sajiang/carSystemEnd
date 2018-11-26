<template>
  <div class="depositManage">
  	<div class="center">
  		<div class="greyInput">
	  		<label class="lightGrey">金额</label>
	  		<input type="" name="" v-model="totalDeposit" @focus="reasonShow=true">
	  	</div>
  	</div>
  	<div class="center">
  		<div class="reason" v-show="reasonShow">
	  		<textarea  placeholder="请填写原因"></textarea>
	  	</div>
  	</div>
  	<div class="nextStep nextStepEnable" @click='showPasswordInput' >
  		确定
  	</div>
	<password-input :show.sync="isPasswordShow" @done="passwordDone"></password-input>
  </div>
</template>

<script>
import passwordInput from "@/components/common/passwordInput"

export default {
  name: 'depositManage',
  components: {
    "password-input":passwordInput,
  },
  data(){
  	return{
  		totalDeposit:2000,
  		reasonShow:false,
  		isPasswordShow:false,
  	}
  },
  methods:{
  	showPasswordInput(){
  		this.isPasswordShow=true;
  	},
  	passwordDone(){
  		this.$vux.alert.show({
	        title:"操作成功",
	    });
  	}
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
/deep/ .weui-icon-cancel{
	color: #b2b2b2;
}
:root{
    --green:{
        color: #0f9231;;
    };
}
.green{
	@apply --green;
}
.greyInput{
	margin-top: 128px;
	background-color: var(--border-grey);
	width: 690px;
	padding: 0 42px;
	height: 98px;
	line-height: 98px;
	border-radius: 10px;
	display: inline-block;
	box-sizing: border-box;
	& input{
		height: 80px;
		line-height: 80px;
		background-color: var(--border-grey);
		outline: none;
		border: none;
		font-size: 36px;
		margin-left: 50px;
	}
}
.reason{
	background-color: var(--border-grey);
	width: 690px;
	margin-top: 27px;
	height: 256px;
	line-height: 98px;
	border-radius: 10px;
	display: inline-block;
	
	& textarea{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 42px;
		line-height: 80px;
		background-color: var(--border-grey);
		outline: none;
		border: none;
		font-size: 36px;
	}
}
.withdraw{
	margin-top: 80px;
	display: inline-block;
	width: 520px;
	height: 98px;
	line-height: 98px;
	border-radius: 8px;
	color: white;
	background-image: var(--backlg);
}

</style>