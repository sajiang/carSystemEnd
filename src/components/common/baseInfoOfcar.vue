<template>
  <div class="baseInfoOfCar">
    <div @click="$emit('update:show', true)">
      <div class="flexBox outPN">
        <div class="flex1 bold">
          {{baseInfo.plateNumber?baseInfo.plateNumber:'车牌号'}}
        </div>
        <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
      </div>
      <div class="subInfo">{{infoStr?infoStr:"填写基本资料"}}</div>
    </div>
    <div class="infoPanel" v-show="show">
      <group gutter="0" label-width="118px">
        <x-input title="车牌号：" placeholder="请填写" :disabled="Boolean(baseInfo.cannotRewritePlateNum)" v-model="baseInfo.plateNumber"></x-input>
        <popup-picker ref="brand" title="品牌：" :show-name=true value-text-align="left" placeholder="请选择" :data="list" v-model="baseInfo.arr"></popup-picker>
        <popup-picker ref="type" title="型号：" :show-name=true value-text-align="left" placeholder="请选择" :data="list1" v-model="baseInfo.arr1"></popup-picker>
        <popup-picker ref="con" title="操作：" :show-name=true value-text-align="left" placeholder="请选择" :data="list2" v-model="baseInfo.arr2"></popup-picker>
        <x-input title="排量：" placeholder="请填写" v-model="baseInfo.value"></x-input>
        <popup-picker ref="size" title="规格：" :show-name=true value-text-align="left" placeholder="请选择" :data="list3" v-model="baseInfo.arr3"></popup-picker>
        <popup-picker ref="set" title="座位：" :show-name=true value-text-align="left" placeholder="请选择" :data="list4" v-model="baseInfo.arr4"></popup-picker>
        <x-input title="车辆识别代码：" placeholder="请填写" v-model="baseInfo.value"></x-input>
        <x-input title="发动机号码：" placeholder="请填写" v-model="baseInfo.value"></x-input>
        <div class="center">
          <div class="uploadWapper">
            <img v-if="!baseInfo.carLicense.imgDataUrl" class="idCardImg" src="../../assets/img/carLicense.png">
            <img v-else  class="idCardImg" :src="baseInfo.carLicense.imgDataUrl">
            <s-upload-img class="input" @fileUpload="saveCarLicense"></s-upload-img>
          </div>
        </div>
      </group>
      <div class="nextStep nextStepEnable"  @click="returnData">
        下一步
      </div>
    </div>
    
  </div>
</template>

<script>
import { XInput, Group ,PopupPicker} from 'vux'
import uploadImg from '@/components/common/uploadImg'
export default {
  name: 'baseInfoOfCar',
  components: {
    XInput,
    PopupPicker,
    Group,
    "s-upload-img":uploadImg
  },
  props:["initialBaseInfo","show"],
  watch:{
    initialBaseInfo:function(){
      this.baseInfo=this.initialBaseInfo;
    }
  },
  data(){
  	return{
      isMounted: false,
      baseInfo:this.initialBaseInfo,
      list: [[{
        name: 'BMW',
        value: '1'
      }, {
        name: 'BYD',
        value: '2'
      }]],
      list1:[[{
        name: '大众',
        value: '1'
      }, {
        name: '捷达',
        value: '2'
      }]],
      list2:[[{
        name: '手动',
        value: '1'
      }, {
        name: '自动',
        value: '2'
      }]],
      list3:[[{
        name: '两厢',
        value: '1'
      }, {
        name: '三厢',
        value: '2'
      }]],
      list4:[[{
        name: '两座',
        value: '1'
      }, {
        name: '三座',
        value: '2'
      }, {
        name: '四座',
        value: '3'
      }, {
        name: '五座',
        value: '4'
      }, {
        name: '六座',
        value: '5'
      }, {
        name: '七座',
        value: '6'
      }]],
  	}
  },
  mounted(){
    this.isMounted=true;
  },
  computed:{
    infoStr:function(){
      if (this.isMounted) {
        return this.$refs.brand.getNameValues()+this.$refs.type.getNameValues()+this.$refs.con.getNameValues()+this.baseInfo.value+this.$refs.size.getNameValues()+this.$refs.set.getNameValues()
      }
    }
  },
  methods:{
    getBrand(e){
      console.log(e)
      console.log(this.baseInfo.arr)
    },
    saveCarLicense(e){
      this.baseInfo.carLicense=e.imgObjs;
    },
    returnData(){
      this.$emit('update:show', false);
      this.$emit("baseinfocomplete",this.baseInfo);
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
/deep/ .weui-cells{
  font-size: 30px;
}
.outPN{
  font-size: 48px;
  line-height: 2;
}
.subInfo{
  font-size: 32px; 
  color: var(--grey6);
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
}
.uploadWapper{
  position: relative;
  margin: 20px 0;
  padding-bottom: 98px;
  display: inline-block;
  & .idCardImg{
    width: 640px;
    height: 440px;
  }
  & input{
    position: absolute;
    width: 640px;
    height: 440px;
    display: inline-block;
    left: 0;
    top:0;
    opacity: 0;
  }
}
</style>