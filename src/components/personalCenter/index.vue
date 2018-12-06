<template>
  <div class="personalCenter">
    <div class="account" >
      <img class="bg" src="../../assets/img/personalCenterBg.png">
      <div class="content">
        <img class="avatar" src="../../assets/img/defaultAvatar.png">
        <div class="info">
          <div class="name">{{name}}</div>
          <div class="phoneNumber">{{phoneNumber}}</div>
        </div>
        <img class="arrowRight" src="../../assets/img/i-arrowRight2.png">
      </div>
    </div>
    <div class="sections">
      <div class="section flexBox" @click="naviToPeccancyQuery">
        <div class="iconWrap">
          <img src="../../assets/img/i-peccancy.png">
        </div>
        <div class="flex1 bold">违章查询</div>
        <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
      </div>
      <div class="section flexBox" @click="naviToManageBank">
        <div class="iconWrap">
          <img src="../../assets/img/i-deposit.png">
        </div>
        <div class="flex1 bold">银行卡管理</div>
        <div class="sub">提现记录</div>
        <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
      </div>
      <div class="section flexBox" @click="naviToSetPassword">
        <div class="iconWrap">
          <img src="../../assets/img/i-discountManage.png">
        </div>
        <div class="flex1 bold">支付设置</div>
        <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
      </div>
      <div class="section flexBox" @click="naviToMessageCenter">
        <div class="iconWrap">
          <img src="../../assets/img/i-messageCenter.png">
        </div>
        <div class="flex1 bold">消息中心</div>
        <div class="sub">有<span class="red">5</span>条未读消息</div>
        <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personalCenter',
  data(){
  	return{
      name:'李**',
      phoneNumber:'189****2365',
  	}
  },
  methods:{
    naviToPeccancyQuery(){
      this.$router.push({ path: `/car/peccancyQuery` });
    },
    naviToMessageCenter(){
      this.$router.push({ path: `/personalCenter/messageCenter` });
    },
  	naviToSetPassword(){
      this.$router.push({ path: `/submitPersonalInfo/setPayPassword` });
    },
    naviToManageBank(){
      this.$router.push({ path: `/personalCenter/manageBank` });
    },
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.red{
  color: var(--red);
}
.mgt40{
  margin-top: 40px;
}
.account{
  height: 216px;
  position: relative;
  & .bg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
  }
  & .content{
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
  }
  & .avatar{
    width: 128px;
    height: 128px;
    margin: 45px;
  }
  & .info{
    color: white;
    flex: 1;
    & .name{
      font-size: 48px;
      font-weight: bold;
    }
    & .phoneNumber{
      font-size: 30px;
    }
  }
  & .arrowRight{
      width: 40px;
      height: 40px;
      margin-right: 35px;
    }
}
.sections{
  padding: 0 30px;
}
.section{
  height: 135px;
  border-bottom: 1Px solid var(--border-grey);
  & .iconWrap {
    text-align: right;
    & img{
      margin: 20px 20px 0 0;
      width: 68px;
      height: 68px;
    }
  }
  & .sub{
    font-size: 28px;
    color: var(--grey9);
    margin-right: 5px;
  }
  & .arrowRight{
    width: 11px;
    height: 18px;
  }
}
</style>