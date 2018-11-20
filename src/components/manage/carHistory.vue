<template>
  <div class="carHistory">
    <div id="carHistory"></div>
    <div class="timeSelects">
      <calendar class="timeSelect" title="" placeholder="开始日期" v-model="startDate"></calendar>
      <div class="line"></div>
      <calendar class="timeSelect" title="" placeholder="结束日期" v-model="endDate"></calendar>
      <span class="sureBtn">确定</span>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
import { Calendar } from 'vux'
export default {
  name: 'carHistory',
  components: {
    Calendar
  },
  data(){
  	return{
      map:{},
      startDate:"",
      endDate:"",
      polyline:{},
      pathArr:[{
        lng:116.368904,
        lat:39.913423,
        stopTime:"11-16 16:00",
        startTime:"11-17 15:20",
        during:"1.2小时",
      },{
        lng:116.382122,
        lat:39.901176,
        stopTime:"11-16 16:00",
        startTime:"11-17 15:20",
        during:"1.2小时",
      },{
        lng:116.387271,
        lat:39.912501,
        stopTime:"11-16 16:00",
        startTime:"11-17 15:20",
        during:"1.2小时",
      },{
        lng:116.398258,
        lat:39.904600,
        stopTime:"11-16 16:00",
        startTime:"11-17 15:20",
        during:"1.2小时",
      }]
  	}
  },
  mounted(){
    this.map = new AMap.Map('carHistory', {
      zoom: 13,
      center:new AMap.LngLat(116.387271,39.912501),
    });
    this.addPath();
    this.addAllMarker();
    
  },
  methods:{
    addPath(){
      let path = [];
      for(let i=0;i<this.pathArr.length;i++){
        path.push(new AMap.LngLat(this.pathArr[i].lng,this.pathArr[i].lat))
      }
      this.polyline = new AMap.Polyline({
        path: path,  
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: "#81af2f", // 线条颜色
        lineJoin: 'round' // 折线拐点连接处样式
      });
      // 将折线添加至地图实例
      this.map.add(this.polyline);
    },
  	createMaker(data){
      let marker=new AMap.Marker({
        icon: new AMap.Icon({image:"../../static/img/i-greenPos.svg",size:new AMap.Size(25, 25)}),
        offset:new AMap.Pixel(-12, -25),
        position:[data.lng,data.lat],
        label:{
          content:`<div>${data.stopTime} (停${data.during})</div>
                   <div>${data.startTime}</div>`,
          offset:new AMap.Pixel(30, 0),
        }
      });
      return marker;
    },
    addAllMarker(){
      for(let i=0;i<this.pathArr.length;i++){
        let marker=this.createMaker(this.pathArr[i]);
        this.map.add(marker);
      }
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.sureBtn{
  width: 120px;
  text-align: center;
  box-sizing: border-box;
  height: 60px;
  border-radius: 30px;
  line-height: 60px;
  font-size: 30px;
  color: white;
  background-color: var(--baseGreen);
}
#carHistory {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.timeSelects{
  position: fixed;
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & .timeSelect{
    background-color: white;
    width: 248px;
    height: 60px;
    font-size: 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
    & /deep/ .vux-cell-primary{
      text-align: center;
    }
    & /deep/ .vux-cell-placeholder{
      color: white;
    }
    & /deep/ .vux-cell-value{
      color: white;
    }
  }
  & .line{
    height: 4px;
    width: 28px;
    background-color: #919191;
  }
}
</style>