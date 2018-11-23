<template>
  <div class="messageCenter">
    <div class="flexBox" v-for="item in messageList">
      <div class="dotWapper"><span class="dot" :class="item.isRead?'backGrey':'backGreen'"></span></div>
      <div class="mainContent flex1">
        <div class="title" :class="item.isRead?'readGrey':''">{{item.title}}</div>
        <div class="time" :class="item.isRead?'readGrey':'lightGrey'">{{item.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageCenter',
  data(){
  	return{
      messageList:[{
        title:"优惠活动通知",
        time:"2018-08-24 05:23",
        isRead:false,
        id:1
      },{
        title:"优惠活动通知",
        time:"2018-08-24 05:23",
        isRead:false,
        id:2
      },{
        title:"优惠活动通知",
        time:"2018-08-24 05:23",
        isRead:true,
        id:3
      }]
  	}
  },
  methods:{
  	
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.backGreen{
  background-color: #85b338;
}
.backGrey{
  background-color: #c7c7c7;
}
.readGrey{
  color: #c7c7c7;
}
.dotWapper{
  width: 93px;
  text-align: center;
  & .dot{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    display: inline-block;
    vertical-align: top;
  }
}
.mainContent{
  padding: 35px 0;
  border-bottom: 1Px solid #e6e6e6;
  & .time{
    font-size: 28px;
  }
}
</style>