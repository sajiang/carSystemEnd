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
      <router-link class="navItem" to="/manage/manageIndex">
        <div class="tab">管理<span class="greenBadge">11</span></div>
        <div class="underlineWrap" ><span class="underline"></span></div>
      </router-link>
      <router-link class="navItem" to="/invokeCar/invokeCarList">
        <div class="tab">调车<span class="greenBadge">2</span></div>
        <div class="underlineWrap" ><span class="underline"></span></div>
      </router-link>
      <router-link class="contact relative" to="/personalCenter/messageCenter">
        <img class="icon" src="../assets/img/i-message.png">
        <span class="badge">10</span>
      </router-link>
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
      color: var(--backGreen);
      & .underline{
        vertical-align: top;
        display: inline-block;
        width: 28px;
        height: 100%;
        background-color: var(--backGreen);
      }
    }
  }
}
.tabContent{
  height: calc(100vh - var(--navHeight));
}
.greenBadge{
   display: inline-block;
    text-align: center;
    background: var(--backGreen);
    color: #fff;
    font-size: 24px;
    border-radius: 16px;
    line-height: 32px;
    padding: 0 8px;
    margin-left: 6px;
}
.contact{
  position: relative;
  & .badge{
    display: inline-block;
    text-align: center;
    background: #f74c31;
    color: #fff;
    font-size: 18px;
    border-radius: 14px;
    line-height: 1.2;
    padding: 0 4px;
    position: absolute;
    top: -10px;
    right: -20px;
  }
}

</style>