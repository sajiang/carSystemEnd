<template>
  <div class="carOrderList">
    <div class="carInfo">
      <div class="flexBox">
        <img class="carImg" src="../../assets/img/temp.jpg">
        <div>
          <div class="font36 bold">{{carInfo.plateNum}}</div>
          <div class="font24 lightGrey">{{carInfo.des}}</div>
          <div class="font30">
            <span class="lightGrey">总收入</span>
            <span class="darkGreen bold">¥{{carInfo.totalIncome}}</span>
          </div>
        </div>
      </div>
      <div class="flexBox">
        <span class="flexBox i-info" >
          <img src="../../assets/img/i-preview.png" class="icon">
          <span class="lightGrey font30 mgl10">{{carInfo.viewNum}}</span>
        </span>
        <span class="flexBox i-info" @click="naviToComments">
          <img src="../../assets/img/i-comments2.png" class="icon">
          <span class="darkGreen font30 mgl10">{{carInfo.comments}}</span>
        </span>
      </div>
    </div>
    <div>
      <div class="orderItem" @click='naviToCarCurOrderDetail'>
        <div class="flexBox">
          <div class="relative flex1" v-if="curStatus.status==1">
            <img class="flagBg" src="../../assets/img/flagBgGrey.png">
            <span class="flagLabel">闲置</span>
          </div>
          <div class="relative flex1" v-else-if="curStatus.status==2||curStatus.status==4">
            <img class="flagBg" src="../../assets/img/flagBgGreen.png">
            <span class="flagLabel">{{curStatus.status==2?'待出租':'已出租'}}</span>
          </div>
          <div class="relative flex1" v-else="curStatus.status==3||curStatus.status==5">
            <img class="flagBg" src="../../assets/img/flagBgRed.png">
            <span class="flagLabel">{{curStatus.status==3?'待确认':'待审核'}}</span>
          </div>
          <img src="../../assets/img/i-pos.png" class="icon">
          <span class="font30 lightGrey mgl10">{{curStatus.pos}}</span>
        </div>
        <div class="flexBox mgt10" v-if="curStatus.status==1||curStatus.status==2">
          <div class="flex1 font30 lightGrey">定价</div>
          <div class="font30" :class="curStatus.status==2?'red':'lightGrey'">¥{{curStatus.price}}元/天</div>
        </div>
        <div class="flexBox font30 mgt10"  v-if="curStatus.status>2">
          <div class="flex1  lightGrey">租期{{curStatus.rentStartDate}}到{{curStatus.rentEndDate}}</div>
          <div >{{curStatus.during}}元/天</div>
        </div>
        <div class="flexBox font30"  v-if="curStatus.status>2">
          <div class="flex1  lightGrey">款项</div>
          <div class="red">+¥{{curStatus.income}}元/天</div>
        </div>
      </div>
      <div class="orderItem" v-for="item in hisOrder">
        <div class="flexBox">
          <div class="relative flex1">
            <img class="flagBg" src="../../assets/img/flagBgGrey.png">
            <span class="flagLabel">已完成</span>
          </div>
          <div class="font24 lightGrey">下单时间：{{item.time}}</div>
        </div>
        <div class="flexBox lightGrey font30 mgt10" >
          <div class="flex1">租期{{item.rentStartDate}}到{{item.rentEndDate}}</div>
          <div >{{item.during}}元/天</div>
        </div>
        <div class="flexBox lightGrey font30" >
          <div class="flex1  ">款项</div>
          <div>+¥{{item.income}}元/天</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carOrderList',
  data(){
  	return{
      carInfo:{
        plateNum:"琼A68888",
        des:"1.6L自动轿车（三厢）5座",
        totalIncome:5600,
        viewNum:1688,
        comments:6,
      },
      curStatus:{
        status:1,
        price:"136.00",
        pos:"海口",
        rentStartDate:"01-05 12:00",
        rentEndDate:"01-08 12:00",
        during:3,
        income:"318.00"
      },
      hisOrder:[{
        time:"2018-10-24 08:24",
        rentStartDate:"01-05 12:00",
        rentEndDate:"01-08 12:00",
        during:3,
        income:"318.00"
      },{
        time:"2018-10-24 08:24",
        rentStartDate:"01-05 12:00",
        rentEndDate:"01-08 12:00",
        during:3,
        income:"328.00"
      }]
  	}
  },
  methods:{
  	naviToComments(){
      this.$router.push({ path: `/manage/carComments/${this.$route.params.carId}`});
    },
    naviToCarCurOrderDetail(){
      this.$router.push({ path: `/manage/carCurOrderDetail/${this.$route.params.carId}`});
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.red{
  color: red;
}
.carInfo{
  padding: 35px 0px 20px 35px;
  border-bottom: 20px solid var(--border-grey);
  & .carImg{
    height: 131px;
    width: 173px;
    margin-right: 20px;
  }
  & .i-info{
    width: 130px;
    margin-top: 10px;
    margin-right: 60px;
  }
}
.orderItem{
  margin: 0 40px;
  padding: 30px 0;
  border-bottom: 1Px solid var(--border-grey);
  line-height: 1.4;
  & .flagBg{
    width: 97px;
    height: 37px;
  }
  & .flagLabel{
    font-size: 24px;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    margin:4px 6px;
  }
}
</style>