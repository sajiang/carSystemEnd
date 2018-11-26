<template>
  <div class="RRPositionSetting">
    <div @click="$emit('update:show', true);">
      <div class="flexBox outPN">
        <div class="flex1 bold">
          设置取车还车地点
        </div>
        <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
      </div>
      <div class="subInfo">
        <div>{{this.rentPos.formattedAddress?this.rentPos.formattedAddress:'取车地点'}}</div>
        <div>{{this.returnPos.formattedAddress?this.returnPos.formattedAddress:'还车地点'}}</div>
      </div>
    </div>
    <div class="infoPanel" v-show="show">
      <div class="set">
        <div class="flexBox title">
          <div class="flex1">取车地点</div>
          <img class="pos" @click="showPosSelect('rentPos')" src="../../assets/img/i-storePos.png">
        </div>
        <div class="flexBox mainPos" >
          <div class="flex1">
            <div>省：{{rentPos.province}}</div>
            <div>市：{{rentPos.city}}</div>
            <div>区：{{rentPos.district}}</div>
            <div>街：{{rentPos.township}}</div>
          </div>
          <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
        </div>
        <div>
          <input class="input" type="text" v-model="rentPos.detailPos" placeholder="填写详细地址">
        </div>
      </div>
      <div class="sep"></div>
      <div class="set">
        <div class="flexBox title">
          <div class="flex1">还车地点</div>
          <img class="pos" @click="showPosSelect('returnPos')" src="../../assets/img/i-storePos.png">
        </div>
        <div class="flexBox mainPos" >
          <div class="flex1">
            <div>省：{{returnPos.province}}</div>
            <div>市：{{returnPos.city}}</div>
            <div>区：{{returnPos.district}}</div>
            <div>街：{{returnPos.township}}</div>
          </div>
          <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
        </div>
        <div>
          <input class="input" type="text" v-model="returnPos.detailPos" placeholder="填写详细地址">
        </div>
      </div>
      <div class="nextStep nextStepEnable"  @click="returnData">
        下一步
      </div>
    </div>
    <div class="selectPos" v-show="isShowPos">
      <div class="showPos flexBox">
        <div class="flex1">
          {{curFullPos}}
        </div>
        <x-button @click.native="hidePosSelect" class="btn" type="primary" :mini="true">确定</x-button>
      </div>
      <div id="map-container"></div>
    </div>
    
  </div>
</template>

<script>
import AMap from 'AMap'
import { XButton } from 'vux'
export default {
  name: 'RRPositionSetting',
  components:{
    XButton
  },
  props:["initialRentPos","initialReturnPos","show"],
  watch:{
    initialRentPos:function(){
      this.rentPos=this.initialRentPos;
    },
    initialReturnPos:function(){
      this.returnPos=this.initialReturnPos;
    },
  },
  data(){
  	return{
      isShowPos:false,
      map:null,
      curpos:'',
      rentPos:this.initialRentPos,
      returnPos:this.initialReturnPos,
      curFullPos:'',
  	}
  },
  mounted(){
    this.map = new AMap.Map('map-container', {
      zoom: 15,
    });
    this.map.plugin('AMap.Geolocation', ()=> {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        showMarker:true,//定位成功后在定位到的位置显示点标记，默认：true
        zoomToAccuracy: true,     
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: 'RB'
      });
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', (data)=>{
        this.map.setCenter(data.position);
        this.curPosMarker = new AMap.Marker({
            icon: new AMap.Icon({image:"../static/img/i-curPos.svg",size:new AMap.Size(25, 44)}),
            position: data.position,
            offset:new AMap.Pixel(-12, -44)
        });
        this.map.add(this.curPosMarker);
        console.log("定位成功");
      })
      AMap.event.addListener(geolocation, 'error', (data)=>{
        console.log("定位失败");
      });
    });
    AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker)=> {
      var positionPicker = new PositionPicker({
          mode:'dragMap',//拖拽Marker模式
          map:this.map,
          iconStyle:{//自定义外观
             url:'../../static/img/i-loc.png',//图片地址
             size:[32,38],  //要显示的点大小，将缩放图片
             ancher:[24,40],//锚点的位置，即被size缩放之后，图片的什么位置作为选中的位置
          }
      });
      positionPicker.on('success', (positionResult)=> {
        var regeocode=positionResult.regeocode;
        this.curFullPos=regeocode.formattedAddress;
        this.curPosObj=regeocode.addressComponent;
        this.curPosObj.formattedAddress=regeocode.formattedAddress;
      });
      positionPicker.on('fail', function(positionResult) {
          // 海上或海外无法获得地址信息
      });
      positionPicker.start();
    });
  },
  methods:{
    showPosSelect(curposType){
      this.curpos=curposType;
      this.isShowPos=true;
    },
  	hidePosSelect(){
      this.isShowPos=false;
      if (this.curpos=="rentPos") {
        this.rentPos=this.curPosObj;
        this.rentPos.detailPos=this.rentPos.street+this.rentPos.streetNumber+this.rentPos.building;
      }else{
        this.returnPos=this.curPosObj;
        this.returnPos.detailPos=this.returnPos.street+this.returnPos.streetNumber+this.returnPos.building;
      }
    },
    returnData(){
      this.$emit('update:show', false);
      this.$emit("positioninfocomplete",{rentPos:this.rentPos,returnPos:this.returnPos});
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.outPN{
  font-size: 32px;
}
.subInfo{
  font-size: 30px; 
  color: var(--grey9);
  margin-top: 10px;
}
.arrowRight{
  width: 10px;
  height: 17px;
}
.infoPanel{
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: white;
  overflow-y: auto;
  z-index: 10;
  padding: 0 40px;
  & .title{
    font-size: 30px;
    font-weight: bold;
    line-height: 98px;
    border-bottom: 1Px solid #ededed;
    & .pos{
      height: 38px;
      width: 32px;
    }
  }
  & .mainPos{
    font-size: 30px;
    padding: 20px 0;
    border-bottom: 1Px solid #ededed;
  }
  & .input{
    font-size: 30px;
    padding: 40px 0;
    border: none;
    outline: none;
  }
  & .sep{
    height: 20px;
    border-radius: 1px;
    background-color: #ededed
  }
}
.selectPos{
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  & .showPos{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px;
    z-index: 200;
    background-color: white;
    font-size: 30px;
    & .btn{
      width: 130px;
      margin-left: 20px;
    }
  }
}
#map-container {
  width: 100%;
  height: 100%;
}
.nextStep{
  left: 0;
  z-index: 1 ;
}
</style>