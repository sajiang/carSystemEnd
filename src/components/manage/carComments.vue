<template>
  <div class="carComments">
    <div class="font24 lightGrey">收到总共评价{{totalNum}}条</div>
    <div class="commentsItem" v-for="item in comments">
      <div class="flexBox">
        <div class="font30 bold flex1">{{item.name}}</div>
        <div class="font24 lightGrey">{{item.commentTime}}</div>
      </div>
      <div class="font30">{{item.content}}</div>
      <div class="font24 lightGrey">下单时间：{{item.orderTIme}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carComments',
  data(){
  	return{
      totalNum:6,
      comments:[{
        name:"AAXIAOJIEJIE",
        commentTime:"2018-11-08 06:32",
        orderTIme:"2018-11-06 06:32",
        content:"这个车好舒服呀，装饰很漂亮，而且好划算啊!!!!"
      },{
        name:"AAXIAOJIEJIE",
        commentTime:"2018-11-08 06:32",
        orderTIme:"2018-11-06 06:32",
        content:"这个车好舒服呀，装饰很漂亮，而且好划算啊!!!!"
      },{
        name:"AAXIAOJIEJIE",
        commentTime:"2018-11-08 06:32",
        orderTIme:"2018-11-06 06:32",
        content:"这个车好舒服呀，装饰很漂亮，而且好划算啊!!!!"
      },{
        name:"AAXIAOJIEJIE",
        commentTime:"2018-11-08 06:32",
        orderTIme:"2018-11-06 06:32",
        content:"这个车好舒服呀，装饰很漂亮，而且好划算啊!!!!"
      },{
        name:"AAXIAOJIEJIE",
        commentTime:"2018-11-08 06:32",
        orderTIme:"2018-11-06 06:32",
        content:"这个车好舒服呀，装饰很漂亮，而且好划算啊!!!!"
      },{
        name:"AAXIAOJIEJIE",
        commentTime:"2018-11-08 06:32",
        orderTIme:"2018-11-06 06:32",
        content:"这个车好舒服呀，装饰很漂亮，而且好划算啊!!!!"
      },{
        name:"AAXIAOJIEJIE",
        commentTime:"2018-11-08 06:32",
        orderTIme:"2018-11-06 06:32",
        content:"这个车好舒服呀，装饰很漂亮，而且好划算啊!!!!"
      },{
        name:"AAXIAOJIEJIE",
        commentTime:"2018-11-08 06:32",
        orderTIme:"2018-11-06 06:32",
        content:"这个车好舒服呀，装饰很漂亮，而且好划算啊!!!!"
      },{
        name:"AAXIAOJIEJIE",
        commentTime:"2018-11-08 06:32",
        orderTIme:"2018-11-06 06:32",
        content:"这个车好舒服呀，装饰很漂亮，而且好划算啊!!!!"
      },]
  	}
  },
  methods:{
  	
  }
}
</script>
<style scoped>
@import "../../assets/css/common.css";
.carComments{
  padding: 30px;
}
.commentsItem{
  padding: 35px 0;
  border-bottom: 1Px solid var(--border-grey);
}
</style>