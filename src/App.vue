<template>
  <div id="app">
    <keep-alive>
      <router-view/>
  </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style src="./assets/css/index.css"></style>
<style lang="less" >
@import '~vux/src/styles/reset.less';
img {
  content: normal !important; 
}
#app{
  font-size: 36px;
  color: #333;
}
</style>