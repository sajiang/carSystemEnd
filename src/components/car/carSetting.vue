<template>
  <div class="createNewCar">
    <div>
      <div class="inputWapper">
        <input class="input" v-model="companyName" placeholder="请填写公司名称">
      </div>
    </div>
    <base-info-of-car :show.sync="baseInfoShow" :initial-base-info="baseInfo" @baseinfocomplete="saveBaseInfo"></base-info-of-car>
    <div class="pics flexBox">
      <div class="uploadWapper">
        <img v-if="!carImg.front.imgDataUrl" class="idCardImg" src="../../assets/img/upload1.png">
        <img v-else  class="idCardImg" :src="carImg.front.imgDataUrl">
        <s-upload-img class="input" @fileUpload="saveCarFront"></s-upload-img>
        <div class="subscribe">正面照</div>
      </div>
      <div class="uploadWapper">
        <img v-if="!carImg.side.imgDataUrl" class="idCardImg" src="../../assets/img/upload3.png">
        <img v-else  class="idCardImg" :src="carImg.side.imgDataUrl">
        <s-upload-img class="input" @fileUpload="saveCarSide"></s-upload-img>
        <div class="subscribe">45°侧面照</div>
      </div>
      <div class="uploadWapper">
        <img v-if="!carImg.inside.imgDataUrl" class="idCardImg" src="../../assets/img/upload2.png">
        <img v-else  class="idCardImg" :src="carImg.inside.imgDataUrl">
        <s-upload-img class="input" @fileUpload="saveCarInside"></s-upload-img>
        <div class="subscribe">车辆内饰</div>
      </div>
    </div>
    <div class="infoBlock">
      <rr-position-setting :show.sync="positionInfoShow" :initial-rent-pos="positionInfo.rentPos" :initial-return-pos="positionInfo.returnPos" @positioninfocomplete="savePosition"></rr-position-setting>
    </div>
    <div class="infoBlock">
      <div class="bold font32">设置出租时间</div>
      <div class="rentTime">
        <datetime class="timeBlock" :start-date="nowTime.date" :min-hour="nowTime.hour" format="YYYY-MM-DD HH:mm" v-model="startTime" @on-change="onTimeChange">
          <div class="time">
            <div v-if="startTime">
              <div>{{startTime.split(' ')[0].substr(5)}}</div>
              <div>{{startTime.split(' ')[1]}}</div>
            </div>
            <div v-else>
              <div>借车时间</div>
            </div>
          </div>
          <img class="arrowDown" src="../../assets/img/i-arrowDown2.png">
        </datetime>
        <div class="dateRange">{{rangeDay}}天</div>
        <datetime class="timeBlock" :start-date="nowTime.date" :min-hour="nowTime.hour" format="YYYY-MM-DD HH:mm" v-model="endTime" @on-change="onTimeChange">
          <div class="time">
            <div v-if="endTime">
              <div>{{endTime.split(' ')[0].substr(5)}}</div>
              <div>{{endTime.split(' ')[1]}}</div>
            </div>
            <div v-else>
              <div>还车时间</div>
            </div>
          </div>
          <img class="arrowDown" src="../../assets/img/i-arrowDown2.png">
        </datetime>
      </div>
    </div>
    <div class="infoBlock">
      <price-setting  :show.sync="priceSetingShow" :initial-price-setting="priceSetting" @pricesettingcomplete="savePriceSetting"></price-setting>
    </div>
    <div class="flexBox btns">
      <div class=" flex1 center">
        <div class="addCar bgBlue" @click="nextStep">完成</div>
      </div>
    </div>
  </div>
</template>

<script>
import baseInfoOfCar from "@/components/common/baseInfoOfCar"
import RRPositionSetting from "@/components/common/RRPositionSetting"
import priceSetting from "@/components/common/priceSetting"
import uploadImg from '@/components/common/uploadImg'
import { Datetime  } from 'vux'

export default {
  name: 'createNewCar',
  components:{
    "s-upload-img":uploadImg,
    'base-info-of-car':baseInfoOfCar,
    'rr-position-setting':RRPositionSetting,
    'price-setting':priceSetting,
    Datetime,
  },
  beforeRouteLeave(to, from, next){
    if (this.baseInfoShow) {
      this.baseInfoShow=false;
      return;
    }
    if (this.positionInfoShow) {
      this.positionInfoShow=false;
      return;
    }
    if (this.priceSetingShow) {
      this.priceSetingShow=false;
      return;
    }
    else{
      next();
    }
  },
  data(){
  	return{
      baseInfoShow:false,
      positionInfoShow:false,
      priceSetingShow:false,
      companyName:'红轮租车',
      baseInfo:{
        plateNumber:"A0064",
        cannotRewritePlateNum:true,
        value:"31",
        arr:[],
        arr1:[],
        arr2:[],
        arr3:[],
        arr4:[],
        carLicense:{}
      },
      carImg:{
        front:{},
        side:{},
        inside:{},
      },
      positionInfo:{
        rentPos:{
          adcode:"460106",
          building:"",
          city:"海口市",
          citycode:"0898",
          detailPos:"龙昆北路2号2幢",
          district:"龙华区",
          formattedAddress:"海南省海口市龙华区金贸街道海南省围棋协会",
          province:"海南省",
          street:"龙昆北路",
          streetNumber:'2号2幢',
          township:"金贸街道"
        },
        returnPos:{},
      },
      nowTime:{
        date:''+new Date().getFullYear()+'-'+(new Date().getMonth()+1)+"-"+new Date().getDate(),
      },
      startTime: '',
      endTime:'',
      rangeDay:0,
      priceSetting:{
        price:1,
        price2:1,
        price3:1,
        price4:1,
        price5:1,
        price6:1,
      },
  	}
  },
  methods:{
  	saveCarFront(e){
      this.carImg.front=e.imgObjs;
    },
    saveCarSide(e){
      this.carImg.side=e.imgObjs;
    },
    saveCarInside(e){
      this.carImg.inside=e.imgObjs;
    },
    saveBaseInfo(e){
      this.baseInfo=e;
    },
    savePosition(e){
      console.log(e)
      this.positionInfo=e;
    },
    onTimeChange (val) {
      if (this.startTime&&this.endTime) {
        console.log(this.startTime)
        this.rangeDay=parseInt((new Date(this.endTime.replace(/\-/g, '/')).getTime()-new Date(this.startTime.replace(/\-/g, '/')).getTime())/24/3600/1000)+1;
      }
    },
    savePriceSetting(e){
      this.priceSetting=e;
    },
    clearAll(){
      this.baseInfo={
        plateNumber:"",
        value:"",
        arr:[],
        arr1:[],
        arr2:[],
        arr3:[],
        arr4:[],
        carLicense:{}
      };
      this.positionInfo={returnPos:{},rentPos:{}};
      this.carImg={front:{},side:{},inside:{}};
      this.startTime= '';
      this.endTime= '';
      this.rangeDay= 0;
      this.priceSetting={price:0,
        price2:0,
        price3:0,
        price4:0,
        price5:0,
        price6:0
      };
    },
    save(){
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve();
        }, 300);
      });
    },
    saveAndAdd(){
      this.save().then(()=>{
        this.clearAll();
      });
    },
    nextStep(){
      this.save().then(()=>{
        this.$router.push({ path: `/submitPersonalInfo/submitIdCard`});
      });
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.font32{
  font-size: 32px;
}
.createNewCar{
  padding:0 40px 98px 40px;
}
.inputWapper{
  & .input{
    width: 100%;
    height: 84px;
    font-size: 30px;
    border: none;
    outline: none;
    border-bottom:1Px solid #e6e6e6;
  }
}
.pics{
  justify-content:space-between;
  margin-top: 30px;
  margin-bottom: 20px;
}
.uploadWapper{
  position: relative;
  line-height: 1.3;
  & .idCardImg{
    width: 200px;
    height: 136px;
  }
  & input{
    position: absolute;
    width: 200px;
    height: 136px;
    display: inline-block;
    left: 0;
    top:0;
    opacity: 0;
  }
  & .subscribe{
    text-align: center;
    color: var(--grey9);
    font-size: 24px;
  }
}
.infoBlock{
  border-top: 1Px #ededed solid;
  padding: 30px 0;
}
.rentTime{
    display: flex;
    text-align: center;
    align-items: center;
    & .timeBlock{
      display: flex;
      text-align: center;
      align-items: center;
      & .time{
        text-align: center;
        width: 135px;
        font-size: 30px;
        margin-right:24px;
      }
      & .arrowDown{
        width: 20px;
        height: 12px;
      }
    }
    & .dateRange{
      flex: 1;
      color: var(--grey9);
      font-size: 30px;
    }
    & /deep/ .weui-cell:before{
        height: 0px !important;
        content: '';
        border-top: none !important;
    }
}
.btns{
  background: white;
  position: fixed;
  height: 98px;
  left: 0;
  right: 0;
  bottom: 0;
  align-content:space-around;
  & .addCar{
    color: white;
    font-size: 30px;
    width: 265px;
    height: 88px;
    line-height: 88px;
    border-radius: 44px;
    display: inline-block;
  }
}
</style>