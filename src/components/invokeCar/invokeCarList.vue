<template>
  <div class="invokeCarList">
    <div class="income">
      <img class="bg" src="../../assets/img/invokeCarBg.png">
      <div class="">
        <div class="mainIncome">
          <div class="font24">总收入</div>
          <div class="font36 bold">300123.00元</div>
        </div>
        <div class="btn" @click="naviToBindCreditCard">提现</div>
      </div>
    </div>
    <div class="orderList">
      <div class="orderItem" v-for="item in orderList">
        <div class="flexBox">
          <div class="relative flex1">
            <img v-if="item.status==1" class="flagBg" src="../../assets/img/flagBgGreen.png">
            <img v-else-if="item.status==2||item.status==3||item.status==5" :class="item.status==2?'flagBgW':'flagBg'" src="../../assets/img/flagBgRed.png">
            <img v-else-if="item.status==4" class="flagBg" src="../../assets/img/flagBgGrey.png">
            <span class="flagLabel">{{item.status==1?'使用中':(item.status==2?'待对方付款':(item.status==3?'退押金':(item.status==4?'已完成':'待付款')))}}</span>
          </div>
          <div class="font24 lightGrey">下单时间：<span>{{item.time}}</span></div> 
        </div>
        <div class="flexBox">
          <div class="flex1">
            <span class="plateNum" :class="item.status==4?'lightGrey':''" v-for="car in item.carList">{{car.plateNum}}</span>
          </div>
          <img @click="naviToInvokeCarDetail" src="../../assets/img/i-arrowRight3.png" class="icon">
        </div>
        <div class="mgt10 font30">
          <span class="lightGrey">授权：</span>
          <span :class="item.status==4?'lightGrey':''">{{item.name}} {{item.tel}}</span>
        </div>
        <div class="font30">
          <span class="lightGrey">授权时间：</span>
          <span :class="item.status==4?'lightGrey':''">{{item.startTime}}到{{item.endTime}}（{{item.during}}天）</span>
        </div>
        <div class="mgt10 font30">
          <span class="lightGrey">款项：</span>
          <span :class="item.status==4?'lightGrey':'red'">+¥{{item.num}}（含押金）</span>
        </div>
        <div class="right" v-if="item.status==2">
          <span class="btn lightGrey">取消</span>
        </div>
        <div class="right" v-if="item.status==3">
          <span class="btn darkGreen">退押金</span>
        </div>
        <div class="right" v-if="item.status==5">
          <span class="btn darkGreen">付款</span>
        </div>
      </div>
    </div>
    <div>
      <img @click="naviToCreateInvokeCarOrder" class="invokeCar" src="../../assets/img/invokeCar.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'invokeCarList', 
  data(){
  	return{
      orderList:[{
        status:1,
        time:'2018-10-24 08:24',
        carList:[{plateNum:"琼A12345"},{plateNum:"琼A44545"},{plateNum:"琼A12885"},{plateNum:"琼A98345"},{plateNum:"琼A12348"},{plateNum:"琼A95345"}],
        name:"李先森",
        tel:"15855555555",
        startTime:"10-25 08:24",
        endTime:"10-28 08:24",
        during:"3",
        num:"10180.00"
      },{
        status:2,
        time:'2018-10-24 08:24',
        carList:[{plateNum:"琼A12345"},{plateNum:"琼A44545"},{plateNum:"琼A12885"},{plateNum:"琼A98345"},{plateNum:"琼A12348"},{plateNum:"琼A95345"}],
        name:"李先森",
        tel:"15855555555",
        startTime:"10-25 08:24",
        endTime:"10-28 08:24",
        during:"3",
        num:"10180.00"
      },{
        status:3,
        time:'2018-10-24 08:24',
        carList:[{plateNum:"琼A12345"},{plateNum:"琼A44545"},{plateNum:"琼A12885"},{plateNum:"琼A98345"},{plateNum:"琼A12348"},{plateNum:"琼A95345"}],
        name:"李先森",
        tel:"15855555555",
        startTime:"10-25 08:24",
        endTime:"10-28 08:24",
        during:"3",
        num:"10180.00"
      },{
        status:4,
        time:'2018-10-24 08:24',
        carList:[{plateNum:"琼A12345"},{plateNum:"琼A44545"},{plateNum:"琼A12885"},{plateNum:"琼A98345"},{plateNum:"琼A12348"},{plateNum:"琼A95345"}],
        name:"李先森",
        tel:"15855555555",
        startTime:"10-25 08:24",
        endTime:"10-28 08:24",
        during:"3",
        num:"10180.00"
      },{
        status:5,//待付款
        time:'2018-10-24 08:24',
        carList:[{plateNum:"琼A12345"},{plateNum:"琼A44545"},{plateNum:"琼A12885"},{plateNum:"琼A98345"},{plateNum:"琼A12348"},{plateNum:"琼A95345"}],
        name:"李先森",
        tel:"15855555555",
        startTime:"10-25 08:24",
        endTime:"10-28 08:24",
        during:"3",
        num:"10180.00"
      }]
  	}
  },
  methods:{
  	naviToBindCreditCard(){
      this.$router.push({ path: `/submitPersonalInfo/bindCreditCard`});
    },
    naviToCreateInvokeCarOrder(){
      this.$router.push({ path: `/invokeCar/createInvokeCarOrder`});
    },
    naviToInvokeCarDetail(){
      this.$router.push({ path: `/invokeCar/invokeCarDetail`});
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.income{
  text-align: center;
  padding-top: 30px;
  position: fixed;
  left: 0;
  right: 0;
  top: 108px;
  background-color: white;
  z-index: 1;
  & .bg{
    width: 710px;
    height: 184px;
  }
  & .mainIncome{
    text-align: left;
    position: absolute;
    left: 75px;
    top: 70px;
    color: white;
  }
  & .btn{
    position: absolute;
    right: 75px;
    top: 90px;
    border-radius: 24px;
    width: 120px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border: 1Px solid rgba(255,255,255,0.8);
    background-color: rgba(255,255,255,0.4);
    font-size: 24px;
    color: white;
  }
}
.orderList{
  padding: 35px;
  position: fixed;
  top: 300px;
  bottom: 0;
  overflow-y: scroll;
}
.orderList::-webkit-scrollbar {
    display: none;
}
.orderItem{
  padding: 10px 0;
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
  & .plateNum{
    width: 210px;
    display: inline-block;
    font-size: 36px;
    font-weight: bold;
  }
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
.invokeCar{
  width: 265px;
  height: 88px;
  position: fixed;
  bottom: 35px;
  left: 50%;
  margin-left: -132px;
}
</style>