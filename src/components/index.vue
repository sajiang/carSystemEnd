<template>
  <div class="index">
    <div class="nav">
      <router-link class="personalCenter" to="/personalCenter/index">
        <img class="icon" src="../assets/img/i-personalCenter.png">
      </router-link>
      <router-link class="navItem" to="/map/mapIndex">
        <div class="tab">地图</div>
        <div class="underlineWrap" ><span class="underline"></span></div>
      </router-link>
      <router-link class="navItem" to="/storeList">
        <div class="tab">管理</div>
        <div class="underlineWrap" ><span class="underline"></span></div>
      </router-link>
      <router-link class="navItem" to="/tourism">
        <div class="tab">调车</div>
        <div class="underlineWrap" ><span class="underline"></span></div>
      </router-link>
      <a class="contact" href=""><img class="icon" src="../assets/img/i-message.png"></a>
    </div>
    <keep-alive>
      <router-view class="tabContent"/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/common.css";

:root{
  --navHeight:98px;
}
.nav{
  height: var(--navHeight);
  padding: 0 40px;
  box-shadow:0px 1Px 20px #ccc;
  position: relative;
  z-index: 1;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  align-items:center ;
  justify-content:center;
  & .personalCenter{
    padding-right: 80px;
    & img{
      display: block;
    }
  }
  & .contact{
    padding-left: 80px;
    & img{
      display: block;
    }
  }
  & .navItem{
    flex: 1;
    color: var(--baseBlack);
    text-align: center;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    & .tab{
      line-height: calc(var(--navHeight)-5px);
      height: calc(var(--navHeight)-5px);
    }
    & .underlineWrap{
      height: 6px;
      line-height: 6px;
    }
    &.router-link-active{
      color: var(--baseGreen);
      & .underline{
        vertical-align: top;
        display: inline-block;
        width: 28px;
        height: 100%;
        background-color: var(--baseGreen);
      }
    }
  }
}
.tabContent{
  height: calc(100vh - var(--navHeight));
}
</style>