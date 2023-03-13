import App from './App'
import Vue from 'vue'
import store from '@/store';

Vue.config.productionTip = false

Vue.prototype.navto = (url)=>{
	uni.navigateTo({
		url:url
	})
}
Vue.prototype.swito = (url)=>{
	uni.switchTab({
		url:url
	})
}
App.mpType = 'app'

//uview
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)


let vuexStore = require("@/store/u.mixin.js");
Vue.mixin(vuexStore);
// 引入请求封装，将app参数传递到配置中

const app = new Vue({
	store,
    ...App
})
require('config/request.js')(app)

app.$mount()


