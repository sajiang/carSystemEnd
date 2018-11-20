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
   

    //上传车辆信息
    { path: '/submitCarInfo/createNewCar', component: resolve => require(['@/components/submitCarInfo/createNewCar'], resolve) },

    //车辆详情
    { path: '/manage/carDetail/:carId', component: resolve => require(['@/components/manage/carDetail'], resolve) },
    //历史轨迹
    { path: '/manage/carHistory/:carId', component: resolve => require(['@/components/manage/carHistory'], resolve) },


  ]
})
