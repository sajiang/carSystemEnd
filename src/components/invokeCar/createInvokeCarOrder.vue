<template>
  <div class="createInvokeCarOrder">
    <div class="tip">
      被授权的用户，拥有控制此车的所有权限
    </div>
    <div class="form">
      <div class="cars" @click="selectCarShow=true">
        <div class="bold font32">需要调车基本信息</div>
        <div class="flexBox mgt20">
          <div v-if="checkedCarLabel.length==0" class="flex1 font30 lightGrey">选择已上传车辆</div>
          <div v-else class="flex1 font30 ">
            <span class="plateNum" v-for="item in checkedCarLabel">{{item}}</span>
          </div>
          <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
        </div>
      </div>
      <div class="person">
        <input :class="tel.toString().length==11?'completedTel':''" v-model="tel" type="tel" @input="inputTel" placeholder="填写被授权用户电话号码">
        <div class="font30" v-if="tel.toString().length==11">
          <div>姓名：{{personInfo.name}}</div>
          <div>身份证：{{personInfo.idCard}}</div>
          <div>还车地址：{{personInfo.returnPlace}}</div>
        </div>
      </div>
      <div class="timeSetting">
        <div class="bold font32">设置调车时间</div>
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
      <div class="priceSetting">
        <div class="bold font32">设置调车价格</div>
        <div class="flexBox">
          <div class="label">租金</div>
          <input class="flex1" type="" name="">
        </div>
        <div class="flexBox">
          <div class="label">押金</div>
          <input class="flex1" type="" name="">
        </div>
      </div>
    </div>
    <div class="nextStep nextStepEnable" @click="naviToInvokeCarList">
      确定
    </div>
    <div class="selectCar" v-show="selectCarShow">
      <checklist title="选择已上传车辆" :options="carList" v-model="checkedCarValue" @on-change="change"></checklist>
      <div class="nextStep nextStepEnable" @click="selectCarShow=false">
        确定
      </div>
    </div>
  </div>
</template>

<script>
import { Checklist ,Datetime} from 'vux'
export default {
  name: 'createInvokeCarOrder',
  components: {
    Checklist,Datetime
  },
  beforeRouteLeave(to, from, next){
    if (this.selectCarShow) {
      this.selectCarShow=false;
      return;
    }
    else{
      next();
    }
  },
  data(){
  	return{
      selectCarShow:false,
      checkedCarValue:[],
      checkedCarLabel:[],
      carList:[{key:1,value:"琼A12345"},{key:2,value:"琼A44545"},{key:3,value:"琼A12885"},{key:4,value:"琼A98345"},{key:5,value:"琼A12348"},{key:6,value:"琼A95345"}],
      tel:"",
      personInfo:{
        name:"李先森",
        idCard:"******2214547852",
        returnPlace:"美兰区海景路海岸金沙109号"
      },
      nowTime:{
        date:''+new Date().getFullYear()+'-'+(new Date().getMonth()+1)+"-"+new Date().getDate(),
      },
      startTime: '',
      endTime:'',
      rangeDay:0,
  	}
  },
  methods:{
  	change (val, label) {
      this.checkedCarLabel=label;
    },
    inputTel(e){
      if (this.tel.length>10) {
        e.target.blur();
      }
    },
    onTimeChange (val) {
      if (this.startTime&&this.endTime) {
        console.log(this.startTime)
        this.rangeDay=parseInt((new Date(this.endTime.replace(/\-/g, '/')).getTime()-new Date(this.startTime.replace(/\-/g, '/')).getTime())/24/3600/1000)+1;
      }
    },
    naviToInvokeCarList(){
      this.$router.push({ path: `/invokeCar/invokeCarList`});
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
/deep/ .weui-cells:after , /deep/ .weui-cell:before ,/deep/ .weui-cells:before{
  content: none;
}
/deep/ .weui-cell{
  display: inline-flex;
  padding: 10px 7px;
}
/deep/ [class*=" weui-icon-"]:before, [class^=weui-icon-]:before {

    margin-left: .1em;
    margin-right: .1em;
}
/deep/ .weui-cells_checkbox .weui-cell__hd {
    padding-right: 0;
}
.tip{
  color: var(--red);
  height: 60px;
  background: rgba(204,204,204,0.4);
  font-size: 24px;
  text-align: center;
  line-height: 60px;
}
.form{
  padding: 30px;
  & .cars{
    padding: 40px 0;
    border-bottom: 1Px solid var(--border-grey);
    & .arrowRight{
      width: 10px;
      height: 17px;
    }
    & .plateNum{
      width: 194px;
      display: inline-block;
      color: #666;
    }
  }
  & .person{
    border-bottom: 1Px solid var(--border-grey);
    padding: 20px 0;
    & input{
      width: 100%;
      border:none;
      outline: none;
      font-size: 30px;
      height: 70px;
    }
    & .completedTel{
       height: 50px;
    }
  }
  & .timeSetting{
    border-bottom: 1Px solid var(--border-grey);
    padding: 20px 0;
    & .rentTime{
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
    }
  }
  & .priceSetting{
    padding: 20px 0;
    font-size: 30px;
    & .flexBox{
      border-bottom: 1Px solid var(--border-grey);
    }
    & .label{
      width: 115px;
      color: var(--grey9);
    }
    & input{
      height: 123px;
      font-size: 30px;
      border: none;
      outline: none;
    }
  }
}
.selectCar{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  background-color: white;
}
</style>