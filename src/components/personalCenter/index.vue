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
      <div class="section" @click="naviToOrderList">
        <div class="iconWrap">
          <img src="../../assets/img/i-order.png">
        </div>
        <div>
          <div class="title">租车订单</div>
          <div class="desc">2车正在行驶</div>
        </div>
      </div>
      <div class="section" @click="naviToCouponManage">
        <div class="iconWrap">
          <img src="../../assets/img/i-discountManage.png">
        </div>
        <div>
          <div class="title">优惠券管理</div>
          <div class="desc">有优惠券<span class="red">未使用</span></div>
        </div>
      </div>
    </div>
    <div class="sections mgt40">
      <div class="section" @click="naviToMessageCenter">
        <div class="iconWrap">
          <img src="../../assets/img/i-messageCenter.png">
        </div>
        <div>
          <div class="title">消息中心</div>
          <div class="desc">有<span class="red">5</span>条未读消息</div>
        </div>
      </div>
      <div class="section" @click="naviToDepositManage">
        <div class="iconWrap">
          <img src="../../assets/img/i-deposit.png">
        </div>
        <div>
          <div class="title">押金管理</div>
          <div class="desc">可退押金2000元</div>
        </div>
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
  	naviToOrderList(){
      this.$router.push({ path: `/personalCenter/orderList` });
    },
    naviToCouponManage(){
      this.$router.push({ path: `/personalCenter/couponManage` });
    },
    naviToMessageCenter(){
      this.$router.push({ path: `/personalCenter/messageCenter` });
    },
    naviToDepositManage(){
      this.$router.push({ path: `/personalCenter/depositManage` });
    }
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
  margin: 50px 30px 70px 30px;
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
  display: flex;
  justify-content: space-between;
}
.section{
  width: 320px;
  height: 196px;
  box-shadow: 0 0 20px #CCC;
  border-radius: 20px;
  & .iconWrap {
    text-align: right;
    & img{
      margin: 20px 20px 0 0;
      width: 68px;
      height: 68px;
    }
  }
  & .title{
    line-height: 1;
    margin: 0px 0 0 34px;
    font-weight: bold;
  }
  & .desc{
    line-height: 1;
    font-size: 28px;
    color: var(--grey9);
    margin-left: 34px;
    margin-top: 10px;
  }
}
</style>