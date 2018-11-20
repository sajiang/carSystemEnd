<template>
  <div class="mapIndex">
    <div id="mapIndex"></div>
    <div class="mapFloat">
      <div class="tip">灰色为闲置，红色为已出租，绿色为待出租</div>
      <div class="flexBox">
        <div class="search" @click="searchPlate.plateSearchShow=true">
          <img src="../../assets/img/search.png">
          <span>车辆搜索</span>
        </div>
        <popover placement="rightbottom" :gutter=10>
          <div class="sort">分类</div>
          <div slot="content">
            <div class="popover-demo-content">
              <div :class="curShowType==='all'?'baseGreen':''" @click="showAllMarker">所有30</div>
              <div :class="curShowType==='markertype1'?'baseGreen':''" @click="showOneTypeMaker('markertype1')">闲置2</div><!-- 灰色 -->
              <div :class="curShowType==='markertype2'?'baseGreen':''" @click="showOneTypeMaker('markertype2')">待出租12</div><!-- 蓝色 -->
              <div :class="curShowType==='markertype3'?'baseGreen':''"  @click="showOneTypeMaker('markertype3')">待确认<span class="red">3</span></div><!-- 红色 -->
              <div :class="curShowType==='markertype4'?'baseGreen':''"  @click="showOneTypeMaker('markertype4')">待审核<span class="red">6</span></div><!-- 红色 -->
              <div :class="curShowType==='markertype5'?'baseGreen':''"  @click="showOneTypeMaker('markertype5')">已出租12</div><!-- 绿色 -->
              <div :class="curShowType==='markertype6'?'baseGreen':''"  @click="showOneTypeMaker('markertype6')">同行调车6</div><!-- 绿色 -->
            </div>
          </div>
        </popover>
      </div>
    </div>
    <div>
      <img @click="naviToAddCar" class="addCar" src="../../assets/img/addCar.png">
    </div>
    <div v-show="searchPlate.plateSearchShow" class="plateSearch">
      <div class="searchBox">
        <span class="province" @click="searchPlate.chooseProvinceShow=true">
          {{searchPlate.chosenProvince.name?searchPlate.chosenProvince.name:"省"}}
          <span class="triangle"></span>
        </span>
        <input type="" name="" v-model="searchPlate.keyPlateNumber">
      </div>
      <div class="candidate">
        <div v-for="item in searchPlate.plateArr" @click="chosenPlate(item)">
          {{searchPlate.chosenProvince.name?searchPlate.chosenProvince.name:''}}
          {{item.plateNumber}}
        </div>
      </div>
      <div v-show="searchPlate.chooseProvinceShow" class="shadow"></div>
      <div v-show="searchPlate.chooseProvinceShow" class="chooseProvince">
        <div @click="chosenProvince(item)" v-for="item in searchPlate.provinceArr" class="provinceItem">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
import { Popover } from 'vux'

export default {
  name: 'mapIndex',
  components: {
    Popover
  },
  data(){
  	return{
      map:null,
      curPosMarker:{},
      curShowType:"all",
      markertype1:[],
      markertype2:[],
      markertype3:[],
      markertype4:[],
      markertype5:[],
      markertype6:[],
      infoWindow:{},
      searchPlate:{
        plateSearchShow:false,
        keyPlateNumber:"",
        plateArr:[],
        chooseProvinceShow:false,
        chosenProvince:{},
        provinceArr:[],
      }
  	}
  },
  created(){
    //初始化数据
    this.searchPlate.provinceArr.push({
      name:"皖",
      id:0,
    })
    for(let i=1;i<30;i++){
      this.searchPlate.provinceArr.push({
        name:"京",
        id:i,
      })
    }
  },
  mounted(){
    window.toCarDetail=this.toCarDetail;
    window.toCarHistory=this.toCarHistory;
    this.map = new AMap.Map('mapIndex', {
      zoom: 15,
    });
    this.infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(0, -10)
    });
    //默认给infowindow焦点
    this.infoWindow.open(this.map,this.map.getCenter());
    this.infoWindow.close();
    this.infoWindow.on('open',function(){
      if (document.getElementsByClassName("amap-info-content").length>0) {
        document.getElementsByClassName("amap-info-content")[0].click();

      }
    })
    this.getCarInfo();
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
            icon: new AMap.Icon({image:"../../static/img/i-curPos.svg",size:new AMap.Size(25, 44)}),
            position: data.position,
            offset:new AMap.Pixel(-12, -44)
        });
        this.map.add(this.curPosMarker);
        console.log("定位成功");
      })
      AMap.event.addListener(geolocation, 'error', (data)=>{
        console.log(data);
        this.$vux.alert.show({
          title: '定位失败',
          content: '请检查GPS是否开启。'
        })
      });
    });
  },
  watch:{
    "searchPlate.keyPlateNumber":function(val,newVal){
      this.searchPlate.plateArr=[];
      for(let i=0;i<9;i++){
        this.searchPlate.plateArr.push({
          plateNumber:val+i,
          id:i
        });
      }
    }
  },
  methods:{
    naviToAddCar(){
      this.$router.push({ path: `/submitCarInfo/createNewCar` });
    },
    toCarDetail(carId){
      this.$router.push({ path: `/manage/carDetail/${carId}` });
    },
    toCarHistory(carId){
      this.$router.push({ path: `/manage/carHistory/${carId}` });
    },
    createMaker(image,position,extData,){
      let markertest=new AMap.Marker({
        icon: new AMap.Icon({image:image,size:new AMap.Size(30, 30)}),
        position: position,
        offset:new AMap.Pixel(-15, -30),
        extData:extData
      });
      markertest.on('click',(e)=>{
        this.setAllMarkerToNormalSize();
        let icon=new AMap.Icon({image:e.target.getIcon().C.image,size:new AMap.Size(40, 40)});
        e.target.setIcon(icon);
        let extData=e.target.getExtData();
        
        let content=`
          <div style='font-size:14px;'>
            <div class='flexBox'>
              <div class="flex1" style="font-size:15px;">${extData.plateNumber}</div>
              <div class="baseGreen" onclick="toCarDetail(${extData.carId})">详情...</div>
            </div>
            <div>
              <img style='width:15px;height:15px' src='../../static/img/i-time.png'>${extData.time}
            </div>
            <div>
              <img style='width:15px;height:15px' src='../../static/img/i-speed.png'>${extData.speed}
              <span>方向：</span>${extData.direction}
              <span>ACC：</span>${extData.ACC}
            </div>
            <div>
              <img style='width:15px;height:15px' src='../../static/img/i-pos.png'>${extData.loc}
            </div>
            <div style="margin-top:2px;">
              <span class="greenBtn"  onclick="toCarHistory(${extData.carId})">历史轨迹</span>
            </div>
          </div>
        `;
        this.infoWindow.setContent(content);
        this.infoWindow.open(this.map,e.target.getPosition());

      })
      return markertest;
    },
  	getCarInfo(){
      let image="../../static/img/i-greyPos.svg";
      let position=[this.map.getCenter().getLng()+0.002,this.map.getCenter().getLat()+0.002];
      let extData={carId:"1",plateNumber:"琼AB6251",time:"2018-09-18 12:11:11",speed:"50km/h",direction:"北偏东",ACC:"开",loc:"海南省海口市秀英人民医院"}
      let markertest=this.createMaker(image,position,extData)
      this.markertype1.push(
        markertest
      );
      this.addmarker(this.markertype1);
      markertest=this.createMaker("../../static/img/i-bluePos.svg",[this.map.getCenter().getLng()+0.001,this.map.getCenter().getLat()+0.001],extData)
      this.markertype2.push(markertest);
      this.addmarker(this.markertype2);
      this.markertype3.push(
        new AMap.Marker({
          icon: new AMap.Icon({image:"../../static/img/i-redPos.svg",size:new AMap.Size(30, 30)}),
          position: [this.map.getCenter().getLng()+0.001,this.map.getCenter().getLat()-0.001],
          offset:new AMap.Pixel(-15, -30)
        })
      );
      this.addmarker(this.markertype3);
      this.markertype4.push(
        new AMap.Marker({
          icon: new AMap.Icon({image:"../../static/img/i-redPos.svg",size:new AMap.Size(30, 30)}),
          position: [this.map.getCenter().getLng()-0.001,this.map.getCenter().getLat()-0.001],
          offset:new AMap.Pixel(-15, -30)
        })
      );
      this.addmarker(this.markertype4);
      this.markertype5.push(
        new AMap.Marker({
          icon: new AMap.Icon({image:"../../static/img/i-greenPos.svg",size:new AMap.Size(30, 30)}),
          position: [this.map.getCenter().getLng()-0.002,this.map.getCenter().getLat()-0.001],
          offset:new AMap.Pixel(-15, -30)
        })
      );
      this.addmarker(this.markertype5);
      this.markertype6.push(
        new AMap.Marker({
          icon: new AMap.Icon({image:"../../static/img/i-greenPos.svg",size:new AMap.Size(30, 30)}),
          position: [this.map.getCenter().getLng()+0.002,this.map.getCenter().getLat()-0.001],
          offset:new AMap.Pixel(-15, -30)
        })
      );
      this.addmarker(this.markertype6);
    },
    setAllMarkerToNormalSize(){
      for(let i=1;i<7;i++){
        let key='markertype'+i;
        for(let j=0;j<this[key].length;j++){
          let icon=new AMap.Icon({image:this[key][j].getIcon().C.image,size:new AMap.Size(30, 30)});
          this[key][j].setIcon(icon);
        }
      }
    },
    addmarker(markerArr){
      for (var i = markerArr.length - 1; i >= 0; i--) {
        this.map.add(markerArr[i]);
      }
    },
    hideAllMarker(){
      for(let i=1;i<7;i++){
        let key='markertype'+i;
        for(let j=0;j<this[key].length;j++){
          this[key][j].hide();
        }
      }
    },
    showAllMarker(){
      for(let i=1;i<7;i++){
        let key='markertype'+i;
        for(let j=0;j<this[key].length;j++){
          this[key][j].show();
        }
      };
      this.curShowType='all';
    },
    showOneTypeMaker(type){
      this.curShowType=type;
      this.hideAllMarker();
      for(let j=0;j<this[type].length;j++){
        this[type][j].show();
      }
    },
    chosenProvince(item){
      this.searchPlate.chooseProvinceShow=false;
      this.searchPlate.chosenProvince=item;
    },
    chosenPlate(item){
      this.searchPlate.plateSearchShow=false;
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.popover-demo-content{
  font-size: 28px;
  padding: 14px;
  box-sizing: border-box;
}
#mapIndex {
  height: 100%;
  width: 100%;
}
.mapIndex{
  position: relative;
}
.mapFloat{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  & .tip{
    font-size: 24px;
    color: white;
    background-color: rgba(0,0,0,0.4);
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  & .search{
    width: 571px;
    margin: 21px 0 0 40px;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: var(--grey9);
    background: white;
    padding: 0 20px;
    box-sizing: border-box;
    height: 60px;
    border-radius: 30px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    & img{
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }
  & .sort{
    margin: 21px 0 0 20px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    height: 60px;
    line-height: 60px;
    width: 86px;
    text-align: center;
    font-size: 28px;
    background-color: white;
    border-radius: 30px;
  }
}
.addCar{
  width: 265px;
  height: 88px;
  position: fixed;
  bottom: 35px;
  left: 50%;
  margin-left: -132px;
}
.plateSearch{
  position: fixed;
  z-index: 1;
  background-color: #ededed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  & .searchBox{
    height: 68px;
    margin: 23px 30px;
    border-radius: 34px;
    overflow: hidden;
    display: flex;
    align-items: center;
    & .province{
      background-color: var(--baseGreen);
      color: white;
      width: 114px;
      line-height: 68px;
      display: inline-block;text-align: right;
      font-size: 28px;
      & .triangle{
        display: inline-block;
        width: 0;
        height: 0;
        width: 0;
        border-width: 10px;
        border-style: solid;
        border-color: white transparent transparent transparent;
        transform: rotate(-45deg); 
        position: relative;
        top: 12px;
        margin-left: 10px;
      }
    }
    & input{
      flex:1;
      height: 100%;
      border: none;
      outline: none;
      padding-left: 20px;
    }
  }
  & .candidate{
    margin-left: 70px;
    font-size: 32px;
  }
  & .shadow{
    position: fixed;
    z-index: 1;
    background-color: rgba(0,0,0,0.5);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  & .chooseProvince{
    position: fixed;
    z-index: 2;
    background-color: #ededed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    & .provinceItem{
      width: 60px;
      height: 60px;
      vertical-align: middle;
      text-align: center;
      display: inline-block;
      background-color: white;
      border: 1Px solid #999;
      margin: 12px;
    }
  }
}

.infoWindow{
  background-color: rgba(0,0,0,0.1);
}
</style>