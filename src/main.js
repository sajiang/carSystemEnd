// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)

axios.defaults.baseURL = 'http://112.67.253.146:8011/api/';
axios.interceptors.response.use(function (response) {
	if (response.data.RetCode!==0) {
		Vue.$vux.alert.show({
          title: '请求接口失败',
          content: response.data.RetMsg
        })
		return response;
	}
	return response;
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});

Vue.prototype.$ajax = axios;

Vue.config.productionTip = false

const FastClick = require('fastclick');
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
