<template>
	<view>
		<!-- 上 -->
		<view v-if="logined" style="width: 100%;height: 13vh;display: flex;">
			<u-avatar :src="src" mode="circle" size="large" style="margin: 30rpx 0 0 20rpx;"></u-avatar>
			<view style="margin-left: 20px;text-align: center;line-height: 13vh;">
				<h1>{{username}}</h1>
			</view>
		</view>
		<view v-else style="width: 100%;height: 13vh;display: flex;" @click="login">
			<u-avatar :src="src" mode="circle" size="large" style="margin: 30rpx 0 0 20rpx;"></u-avatar>
			<view style="margin-left: 20px;text-align: center;line-height: 13vh;">
				<h1>{{username}}</h1>
			</view>
		</view>
		<!-- 中 -->
<!-- 		<view style="width: 100%;height: 15vh;display: flex;align-items: center;justify-content: space-around;">
			<view style="height: 50%;width: 15%;display: flex;flex-wrap: wrap;align-items: center;">
				<u-image width="100%" height="80%" src="../../static/dingdan.png"></u-image>
				<view style="width: 100%;text-align: center;">
					<span style="font-size: 8px;">我的订单</span>
				</view>
			</view>
			<view style="height: 50%;width: 15%;display: flex;flex-wrap: wrap;align-items: center;">
				<u-image width="100%" height="80%" src="../../static/daifukuan.png"></u-image>
				<view style="width: 100%;text-align: center;">
					<span style="font-size: 8px;">待付款</span>
				</view>
			</view>
			<view style="height: 50%;width: 15%;display: flex;flex-wrap: wrap;align-items: center;">
				<u-image width="100%" height="80%" src="../../static/pingjia.png"></u-image>
				<view style="width: 100%;text-align: center;">
					<span style="font-size: 8px;">评价</span>
				</view>
			</view>
			<view style="height: 50%;width: 15%;display: flex;flex-wrap: wrap;align-items: center;">
				<u-image width="90%" height="80%" src="../../static/tuikuan.png"></u-image>
				<view style="width: 100%;text-align: center;">
					<span style="font-size: 8px;">退款</span>
				</view>
			</view>
		</view> -->
		<!-- 下 -->
		<view style="width: 100%;height: 30vh;">
			<u-cell-group>
				<u-cell-item style="height: 80px;" title="收藏" @click="clickShouCang"></u-cell-item>
				<u-cell-item style="height: 80px;" title="地址" @click="clickAddress"></u-cell-item>
				<u-cell-item style="height: 80px;" title="修改密码" @click="clickChangePasswd"></u-cell-item>
				<u-cell-item style="height: 80px;" title="关于我们" @click="goContact"></u-cell-item>
			</u-cell-group>
		</view>
		
		<!-- 退出登录 -->
		<u-button shape="circle" @click="logout" style="color: red;height: 60px;margin-top: 240rpx;">退出登录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				username: '',
				// 记录是否登录
				logined: false
			}
		},
		methods: {
			// 获取token,检测是否登录
			isLogin() {
				if (sessionStorage.getItem("token")) {
					this.src = '../../static/-6f2aa995ccdc66a.jpg'
					this.username = sessionStorage.getItem('username')
					this.logined = true
				} else {
					this.src = ''
					this.username = '请登录'
					this.logined = false
				}
			},
			// 去修改密码页
			clickChangePasswd() {
				if (sessionStorage.getItem('token')) {
					uni.navigateTo({
						url:'/pages/changePasswd/changePasswd'
					})
				} else {
					uni.showToast({
						title: '未登录，不能修改密码',
						icon: 'none',
						duration: 2000
					})
				}
			},
			// 去登录界面
			login() {
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			// 退出登录
			logout() {
				sessionStorage.removeItem('token')
				sessionStorage.removeItem('username')
				this.logined = false
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			goContact(){
				if (sessionStorage.getItem('token')) {
					uni.navigateTo({
						url:"../contact/contact"
					})
				}else {
					uni.showToast({
						title: '请登录后再操作',
						icon: 'none',
						duration: 2000
					})
				}
			},
			// 去地址管理页
			clickAddress() {
				if (sessionStorage.getItem('token')) {
					uni.navigateTo({
						url: '../address/address?username=' + this.username
					})
				}else {
					uni.showToast({
						title: '请登录后再操作',
						icon: 'none',
						duration: 2000
					})
				}
			},
			// 去收藏页
			clickShouCang() {
				if (sessionStorage.getItem('token')) {
					uni.navigateTo({
						url: '../shoucang/shoucang'
					})
				}else {
					uni.showToast({
						title: '请登录后再操作',
						icon: 'none',
						duration: 2000
					})
				}
			}
		},
		onLoad() {
			this.isLogin()
		},
		onShow() {
			this.isLogin()
		}
	}
</script>

<style>

</style>
