<template>
  <div class="priceSetting">
    <div @click="$emit('update:show', true)">
      <div class="flexBox outPN">
        <div class="flex1 bold">
          设置出租价格
        </div>
        <img class="arrowRight" src="../../assets/img/i-arrowRight.png">
      </div>
      <div class="subInfo">
        <div class="whp50">车辆租金{{priceSetting.price?priceSetting.price+"元/天":''}}</div>
        <div class="whp50">违章押金{{priceSetting.price5?priceSetting.price5+"元":''}}</div>
        <div class="whp50" v-if="priceSetting.price2">
          手续费：{{priceSetting.price2}}元
        </div>
        <div  class="whp50" v-if="priceSetting.price3">
          异地空驶：{{priceSetting.price3}}元
        </div>
        <div  class="whp50" v-if="priceSetting.price4">
          服务费：{{priceSetting.price4}}元
        </div>
        <div  class="whp50" v-if="priceSetting.price5">
          违章押金：{{priceSetting.pric5}}元
        </div>
        <div  class="whp50" v-if="priceSetting.price6">
          安全管理：{{priceSetting.pric6}}元
        </div>

      </div>
    </div>
    <div class="infoPanel" v-show="show">
      <group gutter="0" label-width="118px">
        <x-input class="input" title="车辆租金：" placeholder="请填写" v-model="priceSetting.price">
          <span slot="right">元/天</span>
        </x-input>
        <x-input  class="input" title="手续费：" placeholder="请填写" v-model="priceSetting.price2">
          <span slot="right">元</span>
        </x-input>
        <x-input  class="input" title="异地空驶：" placeholder="请填写" v-model="priceSetting.price3">
          <span slot="right">元</span>
        </x-input>
        <x-input  class="input" title="服务费：" placeholder="请填写" v-model="priceSetting.price4"><span slot="right">元</span></x-input>
        <x-input  class="input" title="违章押金：" placeholder="请填写" v-model="priceSetting.price5"><span slot="right">元</span></x-input>
        <x-input  class="input" title="安全管理：" placeholder="请填写" v-model="priceSetting.price6"><span slot="right">元</span></x-input>
      </group>
      <div class="nextStep nextStepEnable"  @click="returnData">
        下一步
      </div>
    </div>
  </div>
</template>

<script>
import { XInput, Group } from 'vux'
export default {
  name: 'priceSetting',
  components: {
    XInput,
    Group
  },
  props:["initialPriceSetting","show"],
  watch:{
    initialPriceSetting:function(){
      this.priceSetting=this.initialPriceSetting;
    }
  },
  data(){
  	return{
      priceSetting:this.initialPriceSetting
  	}
  },
  methods:{
  	returnData(){
      this.$emit('update:show', false);
      this.$emit("pricesettingcomplete",this.priceSetting);
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
/deep/ .weui-cells{
  font-size: 30px;
}
.whp50{
  width: 49%;
  display: inline-block;
}
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
}
.input{
  line-height: 60px;
}
</style>