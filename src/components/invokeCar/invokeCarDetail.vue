<template>
  <div class="invokeCarDetail">
    <div class="orderBlock1">
      <div class="relative">
        <img v-if="orderInfo.status==1" class="flagBg" src="../../assets/img/flagBgGreen.png">
        <img v-else-if="orderInfo.status==2||orderInfo.status==3||orderInfo.status==5" :class="orderInfo.status==2?'flagBgW':'flagBg'" src="../../assets/img/flagBgRed.png">
        <img v-else-if="orderInfo.status==4" class="flagBg" src="../../assets/img/flagBgGrey.png">
        <span class="flagLabel">{{orderInfo.status==1?'使用中':(orderInfo.status==2?'待对方付款':(orderInfo.status==3?'退押金':(orderInfo.status==4?'已完成':'待付款')))}}</span>
      </div>
      <div class="font24 lightGrey mgt20">下单时间：<span>{{orderInfo.time}}</span></div> 
      <div class="carList mgt20">
        <div class="carItem" :class="orderInfo.status==4?'lightGrey':''" v-for="item in orderInfo.carList">{{item.plateNum}}</div>
      </div>
    </div>
    <div class="orderBlock2" :class="orderInfo.status==4?'lightGrey':''">
      <div class="flexBox">
        <div class="font24 lightGrey flex1">授权人信息</span></div>
        <img class="tel" src="../../assets/img/tel.png">
      </div>
      <div class="font30 mgt10">姓名：{{orderInfo.name}}</div>
      <div class="font30">身份证：{{orderInfo.IDCard}}</div>
      <div class="font30">还车地址：{{orderInfo.returnPos}}</div>
    </div>
    <div class="orderBlock3 font30" :class="orderInfo.status==4?'lightGrey':''">
      <div class="font24 lightGrey">期限金额</span></div>
      <div class="flexBox mgt10">
        <div class="lightGrey flex1">授权时间</div>
        <div>{{orderInfo.startTime}}到{{orderInfo.endTime}}</div>
      </div>
      <div class="flexBox mgt10">
        <div class="lightGrey flex1">合计</div>
        <div>{{orderInfo.during}}天</div>
      </div>
      <div class="flexBox mgt10">
        <div class="lightGrey flex1">租金</div>
        <div :class="orderInfo.status==4?'lightGrey':'red'">{{orderInfo.num}}元</div>
      </div>
      <div class="flexBox">
        <div class="lightGrey flex1">押金</div>
        <div :class="orderInfo.status==4?'lightGrey':'red'">{{orderInfo.num1}}元</div>
      </div>
      <div class="flexBox ">
        <div class="lightGrey flex1">合计</div>
        <div :class="orderInfo.status==4?'lightGrey':'red'">+{{orderInfo.num2}}元</div>
      </div>
    </div>
    <div class="bottom" v-if="orderInfo.status==2||orderInfo.status==3||orderInfo.status==5">
      <div class="right" v-if="orderInfo.status==2">
        <span class="btn lightGrey">取消</span>
      </div>
      <div class="right" v-if="orderInfo.status==3">
        <span class="btn darkGreen">退押金</span>
      </div>
      <div class="right" v-if="orderInfo.status==5">
        <span class="btn darkGreen">付款</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'invokeCarDetail',
  data(){
  	return{
      orderInfo:{
        status:1,
        time:'2018-10-24 08:24',
        carList:[{plateNum:"琼A12345"},{plateNum:"琼A44545"},{plateNum:"琼A12885"},{plateNum:"琼A98345"},{plateNum:"琼A12348"},{plateNum:"琼A95345"}],
        name:"李先森",
        tel:"15855555555",
        IDCard:"12414434254324124234",
        startTime:"10-25 08:24",
        endTime:"10-28 08:24",
        during:"3",
        num:"10000.00",
        num1:"180.00",
        num2:"10180.00",
        returnPos:"美兰区海景路海岸金沙109号"
      }
  	}
  },
  methods:{
  	
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.orderBlock1{
  padding: 20px 0;
  margin: 0 40px;
  border-bottom: 1Px solid var(--border-grey);
  & .flagBg{
    width: 113px;
    height: 37px;
  }
  & .flagBgW{
    width: 153px;
    height: 37px;
  }
  & .flagLabel{
    font-size: 24px;
    color: white;
    position: absolute;
    top: 2px;
    left: 0;
    margin:4px 6px;
  }
  & .carItem{
    width: 194px;
    display: inline-block;
    font-weight: bold;
  }
}
.orderBlock2{
  padding: 20px 0;
  margin: 0 40px;
  border-bottom: 1Px solid var(--border-grey);
  & .tel{
    width: 54px;
    height: 54px;
  }
}
.orderBlock3{
  padding: 20px 0;
  margin: 0 40px;
}
.bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px 36px;
  border-top: 20px solid #e6e6e6;
  & .btn{
    border-radius: 24px;
    width: 120px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border: 1Px solid rgba(0,0,0,0.4);
    font-size: 30px;
    display: inline-block;
    font-weight: bold;
  }
}
</style>