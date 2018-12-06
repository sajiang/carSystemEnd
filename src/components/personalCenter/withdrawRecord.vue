<template>
  <div class="messageCenter">
    <div class="flexBox mainContent"  v-for="item in messageList">
      <div class=" flex1 font30">
        <div class="title" :class="item.isRead?'readGrey':''">尾号{{item.num}}信用卡</div>
        <div class="time" :class="item.isRead?'readGrey':'lightGrey'">{{item.time}}</div>
      </div>
      <div class="bold">-{{item.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageCenter',
  data(){
  	return{
      messageList:[{
        num:"2543",
        time:"2018-08-24 05:23",
        price:99,
        id:1
      },{
        num:"1354",
        time:"2018-08-24 05:23",
        price:99,
        id:2
      },{
        num:"8880",
        time:"2018-08-24 05:23",
        price:100,
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
.messageCenter{
  padding: 0 40px;
}
.backGreen{
  background-color: #85b338;
}
.backGrey{
  background-color: #c7c7c7;
}
.readGrey{
  color: #c7c7c7;
}
.mainContent{
  padding: 20px 0;
  border-bottom: 1Px solid #e6e6e6;
  & .time{
    font-size: 28px;
  }
}
</style>