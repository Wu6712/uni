import Vue from 'vue'
import App from './App'
import uView from 'uview-ui';
import request from 'untils/request.js'
Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$toast = title => {
	uni.showToast({
		title: title,
		icon: "none"
	})
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
