<template>
  <div class="orderList">
    <div class="orderItem" v-for="item in orderList">
      <div class="orderTime">下单时间：{{item.orderTime}}</div>
      <div class="mainContent" :class="item.isReturnCar?'lightGrey':''">
        <div  :class="item.isReturnCar?'lightGrey':'green'">
          <span class="bold">{{item.isReturnCar?'已还车':'租赁中'}}</span>
          <span class="status" v-if="item.isReturnCar" :class="item.isReturnDeposit?'':'red'">{{item.isReturnDeposit?'已退押金':'等待审核退押金'}}</span>
          <span class="status" v-else>还剩<span :data-resttime="item.restTime" v-formatsecond='item.restTime'></span></span>
        </div>
        <div class="flexBox carInfo">
          <img class="carImg" :src="item.carImg">
          <div class="flex1 carDesc">
            <div>
              <span class="bold">{{item.plateNumber}}</span>
              <span class="carType">{{item.carType}}</span>
            </div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
      <div v-if="!item.isReturnCar" class="controlBtns">
        <div class="controlBtn backGreen" @click="naviToControlCar(item.id)">控车</div>
        <div class="controlBtn backBlue" @click="naviToReturnCar(item.id)">还车</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderList',
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
  data(){
  	return{
      orderList:[{
        id:"12",
        orderTime: "2018-08-24 05:23",
        isReturnCar:false, 
        restTime:60752,
        plateNumber:"琼A68888",
        carType:"皮卡，面包，SUV",
        desc:"1.6L自动轿车(三厢)5座",
        isReturnDeposit:false,
        carImg:"../../static/img/carImg.jpg"
      },
      {
        id:"13",
        orderTime: "2018-08-24 05:23",
        isReturnCar:true,
        restTime:1500,
        plateNumber:"琼A68888",
        carType:"皮卡，面包，SUV",
        desc:"1.6L自动轿车(三厢)5座",
        isReturnDeposit:true,
        carImg:"../../static/img/carImg.jpg"
      },
      {
        id:"14",
        orderTime: "2018-08-24 05:23",
        isReturnCar:true,
        restTime:0,
        plateNumber:"琼A68888",
        carType:"皮卡，面包，SUV",
        desc:"1.6L自动轿车(三厢)5座",
        isReturnDeposit:false,
        carImg:"../../static/img/carImg.jpg"
      }]
  	}
  },
  methods:{
  	naviToControlCar(carId){
      this.$router.push({ path: `/controlCar/${carId}` })
    },
    naviToReturnCar(carId){
      this.$router.push({ path: `/returnCarStep1/${carId}` })
    },
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.green{
  color: #85b338;
}
.red{
  color: #d60000;
}
.orderItem{
  padding: 35px 40px;
  border-bottom: 20px solid #e6e6e6;
  & .orderTime{
    font-size: 24px;
    color: var(--grey9);
  }
  & .status{
    font-size: 30px;
    float: right;
  }
  & .carInfo{
    margin-top: 20px;
    & .carImg{
      width: 110px;
      height: 110px;
      border-radius: 8px;
    }
    & .carDesc{
      margin-left: 20px;
      & .carType{
        font-size: 30px;
      }
      & .desc{
        font-size: 28px;
        color: var(--grey9);
      }
    }
  }
  & .controlBtns{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    & .controlBtn{
      width: 320px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: white;
      border-radius: 40px;
    }
    & .backGreen{
      background-color: #96c642;
    }
    & .backBlue{
      background-color: #46c1b4;
    }
  }
}
</style>