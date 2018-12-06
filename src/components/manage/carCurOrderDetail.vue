<template>
  <div class="carCurOrderDetail">
    <div class="carInfo">
      <div class="flexBox flexAround">
        <img class="carImg" src="../../assets/img/temp.jpg">
        <img class="carImg" src="../../assets/img/temp.jpg">
        <img class="carImg" src="../../assets/img/temp.jpg">
      </div>
      <div class="center">
        <div class="font36 bold mgt10">{{carInfo.plateNum}}</div>
        <div class="font30 lightGrey">{{carInfo.des}}</div>
      </div>
    </div>
    <div class="block">
      <div class="borderBottom pd20">
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
            <span class="flagLabel">{{curStatus.status==3?'待确认':'待审核'}}
            </span>
          </div>
          <div class="font30 red" v-if="curStatus.status==3">
            确认还剩<span :data-resttime='curStatus.sureRestTime' v-formatsecond></span>
          </div>
          <div class="font30 red" v-if="curStatus.status==4">
            出租时长还剩<span :data-resttime='curStatus.rentRestTime' v-formatsecond></span>
          </div>
        </div>
        <div>
          <div class="font30" v-if="curStatus.status==1">
            <span class="lightGrey">车辆位置</span>
            <span class="mgl30">{{curStatus.pos}}</span>
          </div>
          <div class="font30" v-else-if="curStatus.status==2">
            <div>
              <span class="lightGrey">取车地址</span>
              <span class="mgl30">{{curStatus.pos}}</span>
            </div>
            <div>
              <span class="lightGrey">还车地址</span>
              <span class="mgl30">{{curStatus.pos}}</span>
            </div>
          </div>
          <div class="font30 lightGrey" v-else>
            <span>下单时间</span>
            <span class="mgl30">{{curStatus.orderTime}}</span>
          </div>
        </div>
        <div class="red font24 mgt10" v-if="curStatus.status==3">15分钟内不确认，系统自动确认</div>
        <div class="red font24 mgt10" v-if="curStatus.status==4">时间已到用户未还车，将会自动锁车用户无法使用</div>
      </div>
      <div class="borderBottom pd20" v-if="curStatus.status>2">
        <div class="right darkGreen font30 bold " v-if="curStatus.status>3">  <span @click="naviToCarHistory">轨迹查询</span>
        </div>
        <div class="font30">
          <div>
            <span class="lightGrey">取车地址</span>
            <span class="mgl30">{{curStatus.pos}}</span>
          </div>
          <div>
            <span class="lightGrey">还车地址</span>
            <span class="mgl30">{{curStatus.pos}}</span>
          </div>
        </div>
      </div>
      <div class="borderBottom pd20">
        <div class="flexBox center font30">
          <div>
            <div>{{curStatus.startDate}}</div>
            <div>{{curStatus.startTime}}</div>
          </div>
          <div class="flex1 lightGrey">{{curStatus.during}}天</div>
          <div>
            <div>{{curStatus.endDate}}</div>
            <div>{{curStatus.endTime}}</div>
          </div>
        </div>
      </div>
      <div class="borderBottom pd20 font30" v-if="curStatus.status>2">
        <div class="flexBox">
          <div class="flex1">取车人信息</div>
          <div class="bold darkGreen" @click="naviToCheckAllData">查看全部资料</div>
        </div>
        <div class="flexBox mgt10">
          <div class="flex1 lightGrey">姓名</div>
          <div class="">{{curStatus.rentPerson.name}}</div>
        </div>
        <div class="flexBox">
          <div class="flex1 lightGrey">联系方式</div>
          <div class=""><a class="tel" :href="'tel:'+curStatus.rentPerson.tel">{{curStatus.rentPerson.tel}}</a></div>
        </div>
        <div class="flexBox">
          <div class="flex1 lightGrey">身份证号码</div>
          <div class="">{{curStatus.rentPerson.idCardNum}}</div>
        </div>
        <div class="flexBox">
          <div class="flex1 lightGrey">车架号</div>
          <div class="">{{curStatus.rentPerson.VINNo}}</div>
        </div>
        <div class="flexBox">
          <div class="flex1 lightGrey">发动机号</div>
          <div class="">{{curStatus.rentPerson.engineNo}}</div>
        </div>
      </div>
      <div class="borderBottom pd20 font30" v-if="curStatus.status<3">
        <div>出租费用</div>
        <div class="mgt10 flexBox">
          <div class="lightGrey flex1">车辆租金</div>
          <div :class="curStatus.status==1?'':'red'">{{curStatus.rentFee.price}}元</div>
        </div>
        <div class="flexBox">
          <div class="lightGrey flex1">违章押金</div>
          <div :class="curStatus.status==1?'':'red'">{{curStatus.rentFee.deposit}}元</div>
        </div>
      </div>
      <div v-else>
        <div class="font30 borderBottom pd20" >
          <div>租车费用</div>
          <div class="mgt10 flexBox">
            <div class="lightGrey flex1">车辆租金</div>
            <div>{{curStatus.actualFee.price}}元</div>
          </div>
          <div class="flexBox">
            <div class="lightGrey flex1">违章押金</div>
            <div class="red">{{curStatus.actualFee.deposit}}元</div>
          </div>
          <div class="flexBox">
            <div class="lightGrey flex1">优惠券抵扣</div>
            <div class="red">{{curStatus.actualFee.coupon}}元</div>
          </div>
        </div>
        <div class="font30 pd20" >
          <div class="flexBox">
            <div class="lightGrey flex1">小计</div>
            <div>{{curStatus.actualFee.price}}元</div>
          </div>
          <div><span class="darkGreen">已使用芝麻信用≥700</span>可以<span class='red'>免押金</span>服务</div>
        </div>
      </div>
    </div>
    <div class="block  font30">
      <div class="pd30">优惠券</div>
    </div>
    <div class="block font30">
      <div class="borderBottom pd30 flexBox">
        <div class="flex1">租车须知</div>
        <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
      </div>
      <div class="pd30 flexBox">
        <div class="flex1">押金说明</div>
        <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
      </div>
    </div>
    <div class="bottom">
      <div v-if="curStatus.status==1||curStatus.status==2" class="flexBox">
        <div class="flex1"></div>
        <div class="btn" @click="naviToControlCar">控车</div>
        <div class="btn" @click="naviToCarSetting">设置</div>
      </div>
      <div class="flexBox" v-else>
        <div class="flex1"><span>客服</span></div>
        <div class="btn lightGrey" v-if="curStatus.status==3" @click="cancelOrder">取消</div>
        <div class="btn darkGreen" v-if="curStatus.status==3" @click="sureOrder">确认</div>
        <div class="btn darkGreen" v-if="curStatus.status==4" @click="naviToControlCar">控车</div>
        <div class="btn lightGrey" v-if="curStatus.status==5" @click="naviToDepositManage">退押金</div>
        <div class="btn darkGreen" v-if="curStatus.status==5" @click="naviToPeccancyQuery">违章确认</div>
        <div class="btn darkGreen" v-if="curStatus.status==5" @click="naviToCarCheck">车辆确认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carCurOrderDetail',
  data(){
  	return{
      carInfo:{
        plateNum:"琼A68888",
        des:"1.6L自动轿车（三厢）5座",
      },
      curStatus:{
        status:5,
        pos:"美兰区海景路海岸金沙109号",
        rentPos:"美兰区海景路海岸金沙119号",
        returnPos:"美兰区海景路海岸金沙129号",
        orderTime:"2018-08-24  05:23",
        sureRestTime:60752,
        rentRestTime:70752,
        startDate:"08月24日",
        startTime:"14:00",
        endDate:"08月26日",
        endTime:"22:00",
        during:"2",
        rentPerson:{
          name:"小路",
          tel:"18323252652",
          idCardNum:"555555121445450321",
          VINNo:"4561954",
          engineNo:"451548",
        },
        rentFee:{
          price:"320.00",
          deposit:"3000.00"
        },
        actualFee:{
          price:"256.00",
          deposit:"0.00",
          coupon:"10.00",
        }
      }
  	}
  },
  directives:{
    formatsecond:{
      inserted(el,binding,vnode){
        var countDown=setInterval(()=>{
          if (el.dataset.resttime<1) {
            clearInterval(countDown);
          }
          el.dataset.resttime=el.dataset.resttime-1;
          var h=parseInt(el.dataset.resttime/3600)<10?"0"+parseInt(el.dataset.resttime/3600):parseInt(el.dataset.resttime/3600);
          var m=parseInt((el.dataset.resttime%3600)/60)<10?"0"+parseInt((el.dataset.resttime%3600)/60):parseInt((el.dataset.resttime%3600)/60);
          var s=parseInt(el.dataset.resttime%60)<10?'0'+parseInt(el.dataset.resttime%60):parseInt(el.dataset.resttime%60);
          el.innerHTML=h+':'+m+":"+s
        },1000);
      },
    }
  },
  methods:{
    naviToCarHistory(){
      this.$router.push({ path: `/manage/carHistory/${this.$route.params.carId}` });
    },
    naviToControlCar(){
      this.$router.push({ path: `/car/controlCar/${this.$route.params.carId}` });
    },
    naviToCarSetting(){
      this.$router.push({ path: `/car/carSetting/${this.$route.params.carId}` });
    },
    cancelOrder(){
      this.$vux.confirm.show({
        title:"确定取消订单？",
        content:"",
        onCancel :()=>{},
        onConfirm :()=>{}
      });
    },
    sureOrder(){
      this.$vux.confirm.show({
        title:"",
        content:"<div>已核查该用户全部资料</div><div>确定租车给该用户</div>",
        onCancel :()=>{},
        onConfirm :()=>{}
      });
    },
    naviToCheckAllData(){
      this.$router.push({ path: `/car/rentCarPersonInfo/${this.$route.params.carId}` });
    },
    naviToDepositManage(){
      this.$router.push({ path: `/manage/depositManage/${this.$route.params.carId}` });
    },
    naviToPeccancyQuery(){
      this.$router.push({ path: `/car/peccancyQuery/${this.$route.params.carId}` });
    },
    naviToCarCheck(){
      this.$router.push({ path: `/car/carCheck/${this.$route.params.carId}` });
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.carCurOrderDetail{
  padding-bottom: 104px;
}
.tel{
  color: var(--backGreen);
  text-decoration: underline;
}
.carInfo{
  margin-top: 20px;
  padding-bottom: 8px;
  border-bottom: 20px solid var(--border-grey);
  & .carImg{
    width: 216px;
    height: 120px;
    border-radius: 6px;
  }
}
.block{
  padding: 0 40px;
  border-bottom: 20px solid var(--border-grey);
  & .pd20{
    padding: 20px 0;
  }
  & .pd30{
    padding: 30px 0;
  }
  & .borderBottom{
    border-bottom: 1Px solid var(--border-grey);
  }
  & .flagBg{
    width: 97px;
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
  & .arrowRight{
    width: 9px;
    height: 15px;
  }

}
.bottom{
  padding:20px 40px;
  font-size: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  & .btn{
    border-radius: 30px;
    width: 150px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1Px solid rgba(0,0,0,0.3);
    margin-left: 20px;
    font-weight: bold;
  }
}
</style>