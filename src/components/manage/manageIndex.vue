<template>
  <div class="manageIndex">
    <div class="income">
      <img class="bg" src="../../assets/img/incomeBg.png">
      <div class="">
        <div class="mainIncome">
          <div class="font24">总收入</div>
          <div class="font36 bold">300123.00元</div>
        </div>
        <div class="btn" @click="naviToBindCreditCard">提现</div>
      </div>
    </div>
    <div class="mainContent">
      <tab :scroll-threshold="5" class="font30">
        <tab-item selected @on-item-click="onItemClick">闲置</tab-item>
        <tab-item @on-item-click="onItemClick">待出租</tab-item>
        <tab-item @on-item-click="onItemClick">待确认<span class="darkGreen bold">1</span></tab-item>
        <tab-item @on-item-click="onItemClick">已出租</tab-item>
        <tab-item @on-item-click="onItemClick">待审核<span class="darkGreen bold">2</span></tab-item>
      </tab>
      <div>
        <div v-show="spareCar.show">
          <div class="carItem">
            <div class="relative">
              <img class="flagBg" src="../../assets/img/flagBgGrey.png">
              <span class="flagLabel">闲置</span>
            </div>
            <div class="flexBox info">
              <div class="flex1 font36 bold">琼A9630</div>
              <img src="../../assets/img/i-arrowRight3.png" @click="naviToCarOrderList(3)" class="icon">
            </div>
            <div class="flexBox info">
              <div class=" flexBox">
                <img src="../../assets/img/i-pos.png" class="icon">
                <span class="font30 lightGrey mgl10">海口</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-preview.png" class="icon">
                <span class="font30 lightGrey mgl10">1668</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-comment.png" class="icon">
                <span class="font30 lightGrey mgl10">6</span>
              </div>
            </div>
            <div class="btns">
              <span class="btn">控车</span>
              <span class="btn">设置</span>
            </div>
          </div>
        </div>
        <div v-show="waitRentCar.show">
          <div class="carItem">
            <div class="relative">
              <img class="flagBg" src="../../assets/img/flagBgGreen.png">
              <span class="flagLabel">待出租</span>
            </div>
            <div class="flexBox info">
              <div class="flex1 font36 bold">琼A9630</div>
              <img src="../../assets/img/i-arrowRight3.png" class="icon">
            </div>
            <div class="flexBox mgt10">
              <div class="flex1 lightGrey font30">定价</div>
              <div class="red font30">¥136.00元/天</div>
            </div>
            <div class="flexBox info">
              <div class=" flexBox">
                <img src="../../assets/img/i-pos.png" class="icon">
                <span class="font30 lightGrey mgl10">海口</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-preview.png" class="icon">
                <span class="font30 lightGrey mgl10">1668</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-comment.png" class="icon">
                <span class="font30 lightGrey mgl10">6</span>
              </div>
            </div>
            <div class="btns">
              <span class="btn">控车</span>
              <span class="btn">设置</span>
            </div>
          </div>
        </div>
        <div v-show="waitSureCar.show">
          <div class="carItem">
            <div class="flexBox">
              <div class="relative flex1">
                <img class="flagBg" src="../../assets/img/flagBgRed.png">
                <span class="flagLabel">待确认</span>
              </div>
              <div class="font24 lightGrey">下单时间：2018-10-24 08:24</div>
            </div>
            
            <div class="flexBox info">
              <div class="flex1 font36 bold">琼A9630</div>
              <img src="../../assets/img/i-arrowRight3.png" class="icon">
            </div>
            <div class="flexBox mgt10 font30">
              <div class="flex1 lightGrey">租期01-06 12:00到01-06 12:00</div>
              <div class="">3天</div>
            </div>
            <div class="flexBox font30">
              <div class="flex1 lightGrey">款项</div>
              <div class="red">+¥318.00元</div>
            </div>
            <div class="flexBox info">
              <div class=" flexBox">
                <img src="../../assets/img/i-pos.png" class="icon">
                <span class="font30 lightGrey mgl10">海口</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-preview.png" class="icon">
                <span class="font30 lightGrey mgl10">1668</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-comment.png" class="icon">
                <span class="font30 lightGrey mgl10">6</span>
              </div>
            </div>
            <div class="btns">
              <span class="btn lightGrey">取消</span>
              <span class="btn darkGreen">确认</span>
            </div>
          </div>
        </div>
        <div v-show="beenRentCar.show">
          <div class="carItem">
            <div class="flexBox">
              <div class="relative flex1">
                <img class="flagBg" src="../../assets/img/flagBgGreen.png">
                <span class="flagLabel">已出租</span>
              </div>
              <div class="font24 lightGrey">下单时间：2018-10-24 08:24</div>
            </div>
            
            <div class="flexBox info">
              <div class="flex1 font36 bold">琼A9630</div>
              <img src="../../assets/img/i-arrowRight3.png" class="icon">
            </div>
            <div class="flexBox mgt10 font30">
              <div class="flex1 lightGrey">租期01-06 12:00到01-06 12:00</div>
              <div class="">3天</div>
            </div>
            <div class="flexBox font30">
              <div class="flex1 lightGrey">款项</div>
              <div class="red">+¥1366.00元（含押金）</div>
            </div>
            <div class="flexBox info">
              <div class=" flexBox">
                <img src="../../assets/img/i-pos.png" class="icon">
                <span class="font30 lightGrey mgl10">海口</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-preview.png" class="icon">
                <span class="font30 lightGrey mgl10">1668</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-comment.png" class="icon">
                <span class="font30 lightGrey mgl10">6</span>
              </div>
            </div>
            <div class="btns">
              <span class="btn">控车</span>
            </div>
          </div>
        </div>
        <div v-show="waitCheckCar.show">
          <div class="carItem">
            <div class="flexBox">
              <div class="relative flex1">
                <img class="flagBg" src="../../assets/img/flagBgRed.png">
                <span class="flagLabel">待审核</span>
              </div>
              <div class="font24 lightGrey">下单时间：2018-10-24 08:24</div>
            </div>
            
            <div class="flexBox info">
              <div class="flex1 font36 bold">琼A9630</div>
              <img src="../../assets/img/i-arrowRight3.png" class="icon">
            </div>
            <div class="flexBox mgt10 font30">
              <div class="flex1 lightGrey">租期01-06 12:00到01-06 12:00</div>
              <div class="">3天</div>
            </div>
            <div class="flexBox font30">
              <div class="flex1 lightGrey">款项</div>
              <div class="red">+¥1366.00元（含押金）</div>
            </div>
            <div class="flexBox info">
              <div class=" flexBox">
                <img src="../../assets/img/i-pos.png" class="icon">
                <span class="font30 lightGrey mgl10">海口</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-preview.png" class="icon">
                <span class="font30 lightGrey mgl10">1668</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-comment.png" class="icon">
                <span class="font30 lightGrey mgl10">6</span>
              </div>
            </div>
            <div class="btns">
              <span class="btn">退押金</span>
              <span class="btn darkGreen">违章确认</span>
              <span class="btn darkGreen">车辆确认</span>
            </div>
          </div>
          <div class="carItem">
            <div class="flexBox">
              <div class="relative flex1">
                <img class="flagBg" src="../../assets/img/flagBgRed.png">
                <span class="flagLabel">已锁</span>
              </div>
              <div class="font24 lightGrey">下单时间：2018-10-24 08:24</div>
            </div>
            
            <div class="flexBox info">
              <div class="flex1 font36 bold">琼A9630</div>
              <img src="../../assets/img/i-arrowRight3.png" class="icon">
            </div>
            <div class="flexBox mgt10 font30">
              <div class="flex1 lightGrey">租期01-06 12:00到01-06 12:00</div>
              <div class="">3天</div>
            </div>
            <div class="flexBox font30">
              <div class="flex1 lightGrey">款项</div>
              <div class="red">+¥1366.00元（含押金）</div>
            </div>
            <div class="flexBox info">
              <div class=" flexBox">
                <img src="../../assets/img/i-pos.png" class="icon">
                <span class="font30 lightGrey mgl10">海口</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-preview.png" class="icon">
                <span class="font30 lightGrey mgl10">1668</span>
              </div>
              <div class=" flexBox">
                <img src="../../assets/img/i-comment.png" class="icon">
                <span class="font30 lightGrey mgl10">6</span>
              </div>
            </div>
            <div class="btns">
              <span class="btn lightGrey">待用户上传审核资料</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  name: 'manageIndex',
  components: {
    Tab,
    TabItem
  },
  data(){
  	return{
      spareCar:{
        list:[],
        show:true,
      },
      waitRentCar:{
        list:[],
        show:false,
      },
      waitSureCar:{
        list:[],
        show:false,
      },
      beenRentCar:{
        list:[],
        show:false,
      },
      waitCheckCar:{
        list:[],
        show:false,
      },
  	}
  },
  methods:{
    hideAllTab(){
      this.spareCar.show=false;
      this.waitRentCar.show=false;
      this.waitSureCar.show=false;
      this.beenRentCar.show=false;
      this.waitCheckCar.show=false;
    },
  	onItemClick (index) {
      this.hideAllTab();
      switch(index){
        case 0:
        this.spareCar.show=true;
        break;
        case 1:
        this.waitRentCar.show=true;
        break;
        case 2:
        this.waitSureCar.show=true;
        break;
        case 3:
        this.beenRentCar.show=true;
        break;
        case 4:
        this.waitCheckCar.show=true;
        break;
        default:
        break;
      }
    },
    naviToBindCreditCard(){
      this.$router.push({ path: `/submitPersonalInfo/bindCreditCard`});
    },
    naviToCarOrderList(carId){
      this.$router.push({ path: `/manage/carOrderList/${carId}`});

    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.red{
  color: red;
}
.income{
  text-align: center;
  padding-top: 30px;
  position: relative;
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
.mainContent{
  padding: 0 30px;
  & /deep/ .vux-tab-selected{
    font-weight: bold;
  }
}
.carItem{
  padding: 20px 15px 20px 0;
  border-bottom: 1Px solid var(--border-grey);
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
  & .info{
    justify-content: space-between;
    margin-top: 10px;
  }
  & .btns{
    text-align: right;
    margin-top: 30px;
    & .btn{
      display: inline-block;
      text-align: center;
      border-radius: 30px;
      border: 1Px solid rgba(0,0,0,0.3);
      min-width:110px;
      font-size: 30px;
      height: 60px;
      line-height: 60px;
      font-weight: bold;
      margin-left: 10px;
      padding: 0px 20px;
    }
  }
}
</style>