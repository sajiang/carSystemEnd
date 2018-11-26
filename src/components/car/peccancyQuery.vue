<template>
  <div class="peccancyQuery">
    <div class="carInfoItem">
      <div class="flexBox">
        <label>车架号</label>
        <div class="flex1">6685124546</div>
      </div>
      <div class="flexBox">
        <label>发动机号</label>
        <div class="flex1">668512gdghs4546htgf24</div>
      </div>
    </div>
    <div class="listTitle">
      <div class="right bold font30 darkGreen">
        <span @click="isShowUnDeal=!isShowUnDeal">{{isShowUnDeal?'隐藏已缴':'查看全部'}}</span>
      </div>
      <div class="flexBox font30 mgt10">
        <div class="flex1">{{plateNum}}</div>
        <div>未处理<span class="red">{{unDealNum?unDealNum:0}}</span>笔</div>
      </div>
    </div>
    <div >
      <table class="table" border=1 rules=none frame=void>
        <thead>
          <th>排序</th>
          <th>时间</th>
          <th>扣分</th>
          <th>罚款</th>
          <th>缴费情况</th>
        </thead>
        <tbody class="center font30">
          <tr v-for="(item,index) in peccancyList" v-if="isShowUnDeal||!item.isDeal">
            <td>{{index+1}}</td>
            <td>{{item.time}}</td>
            <td>{{item.score}}</td>
            <td>{{item.fine}}</td>
            <td :class="item.isDeal?'':'red'">{{item.isDeal?"已缴":"未缴"}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'peccancyQuery',
  data(){
  	return{
      plateNum:"琼A344433",
      unDealNum:2,
      isShowUnDeal:false,
      peccancyList:[{
        time:"2018-08-02",
        score:3,
        fine:600,
        isDeal:false,
      },{
        time:"2018-08-03",
        score:4,
        fine:600,
        isDeal:false,
      },{
        time:"2018-08-04",
        score:3,
        fine:800,
        isDeal:true,
      }]
  	}
  },
  methods:{
  	
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.carInfoItem{
  padding: 40px;
  font-size: 30px;
  border-bottom: 20px solid var(--border-grey);
  & label{
    width: 150px;
    color: var(--grey9);
  }
}
.listTitle{
  padding: 30px 40px;
}
.table{
  width: 100%;
  & th{
    font-weight: normal;
    font-size: 24px;
    color: var(--grey9);
    background-color: var(--border-grey);
    border-color: var(--border-grey);
  }
}
</style>