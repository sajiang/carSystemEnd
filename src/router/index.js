import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import mapIndex from '@/components/map/mapIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/map/mapIndex',
      children:[{
        path: '/map/mapIndex',
        name: 'map',
        component: mapIndex,
      },{
        path: '/manage/manageIndex',
        component: resolve => require(['@/components/manage/manageIndex'], resolve)
      },{
        
        path: '/invokeCar/invokeCarList',
        component: resolve => require(['@/components/invokeCar/invokeCarList'], resolve)
      }]
    },
    //绑定手机号
  	{ path: '/submitPersonalInfo/bindPhone', component: resolve => require(['@/components/submitPersonalInfo/bindPhone'], resolve) },
  	//输入验证码
    { path: '/submitPersonalInfo/inputIdentifyCode', component: resolve => require(['@/components/submitPersonalInfo/inputIdentifyCode'], resolve) },
  	//上传身份证
    { path: '/submitPersonalInfo/submitIdCard', component: resolve => require(['@/components/submitPersonalInfo/submitIdCard'], resolve) },
    //上传营业执照
    { path: '/submitPersonalInfo/submitBusinessLicence', component: resolve => require(['@/components/submitPersonalInfo/submitBusinessLicence'], resolve) },
    //上传人脸识别
    { path: '/submitPersonalInfo/submitFaceRecognition', component: resolve => require(['@/components/submitPersonalInfo/submitFaceRecognition'], resolve) },
    //绑定信用卡
    { path: '/submitPersonalInfo/bindCreditCard', component: resolve => require(['@/components/submitPersonalInfo/bindCreditCard'], resolve) },
    //设置支付密码
    { path: '/submitPersonalInfo/setPayPassword', component: resolve => require(['@/components/submitPersonalInfo/setPayPassword'], resolve) },
    //选择提取银行
    { path: '/submitPersonalInfo/selectBank', component: resolve => require(['@/components/submitPersonalInfo/selectBank'], resolve) },
   

    //上传车辆信息
    { path: '/car/createNewCar', component: resolve => require(['@/components/car/createNewCar'], resolve) },
    //控车
    { path: '/car/controlCar/:carId', component: resolve => require(['@/components/car/controlCar'], resolve) },
    //车辆设置
    { path: '/car/carSetting/:carId', component: resolve => require(['@/components/car/carSetting'], resolve) },
    //租车人信息
    { path: '/car/rentCarPersonInfo/:carId', component: resolve => require(['@/components/car/rentCarPersonInfo'], resolve) },
    //违章信息查询
    { path: '/car/peccancyQuery/:carId', component: resolve => require(['@/components/car/peccancyQuery'], resolve) },
    { path: '/car/peccancyQuery', component: resolve => require(['@/components/car/peccancyQuery'], resolve) },
    //车辆确认
    { path: '/car/carCheck/:carId', component: resolve => require(['@/components/car/carCheck'], resolve) },
  
  
    //车辆评价
    { path: '/manage/carComments/:carId', component: resolve => require(['@/components/manage/carComments'], resolve) },
    //历史轨迹
    { path: '/manage/carHistory/:carId', component: resolve => require(['@/components/manage/carHistory'], resolve) },
    //车辆订单列表
    { path: '/manage/carOrderList/:carId', component: resolve => require(['@/components/manage/carOrderList'], resolve) },
    //车辆当前订单详情
    { path: '/manage/carCurOrderDetail/:carId', component: resolve => require(['@/components/manage/carCurOrderDetail'], resolve) },
    //退押金
    { path: '/manage/depositManage/:carId', component: resolve => require(['@/components/manage/depositManage'], resolve) },
      
    //创建调车
    { path: '/invokeCar/createInvokeCarOrder', component: resolve => require(['@/components/invokeCar/createInvokeCarOrder'], resolve) },
    //调车订单详情
    { path: '/invokeCar/invokeCarDetail', component: resolve => require(['@/components/invokeCar/invokeCarDetail'], resolve) },

    //个人中心
    { path: '/personalCenter/index', component: resolve => require(['@/components/personalCenter/index'], resolve) },
    //提现
    { path: '/personalCenter/withdrawCash', component: resolve => require(['@/components/personalCenter/withdrawCash'], resolve) },
    //提现记录
    { path: '/personalCenter/withdrawRecord', component: resolve => require(['@/components/personalCenter/withdrawRecord'], resolve) },
    //消息中心
    { path: '/personalCenter/messageCenter', component: resolve => require(['@/components/personalCenter/messageCenter'], resolve) },
    //银行卡管理
    { path: '/personalCenter/manageBank', component: resolve => require(['@/components/personalCenter/manageBank'], resolve) },

  ]
})
