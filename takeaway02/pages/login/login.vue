<template>
	<view style="display: flex;flex-direction: column;align-items: center;">
		<u-input v-model="username" type="text" placeholder="请输入用户名" border
		 style="width: 80%;margin-top: 20px;" />
		<u-input v-model="password" type="password" placeholder="请输入密码" border 
		style="width: 80%;margin-top: 20px;"/>
		<view style="width: 80%;display: flex;justify-content: space-between;">
			<u-button type="primary" @click="clickRegister"
			style="width: 45%;margin-top: 20px;"
			>
			注册
			</u-button>
			<u-button type="primary" @click="clickLogin"
			style="width: 45%;margin-top: 20px;"
			>
			登录
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 输入的用户名
				username: '',
				// 输入的密码
				password: ''
			}
		},
		methods: {
			// 重置一下username和password
			userInfoInit() {
				this.username = ''
				this.password = ''
			},
			// 点击登录按钮的函数
			clickLogin() {
				// 发送登录请求
				if (this.username !== '' && this.password !== '') {
					uni.request({
						url: 'http://localhost:8888/simple-user/login?username='+this.username+"&password="+this.password,
						method:'POST',
						// data: {
						// 	username: this.username,
						// 	password: this.password
						// },
						header: {
							'Content-Type': 'application/json'
						},
						success: (res) => {
							console.log(res.data);
							// 存储token
							sessionStorage.setItem("token", res.data.data)
							sessionStorage.setItem("username", this.username)
							uni.showToast({
								title: '登录成功',
								icon:'none',
								duration: 2000
							})
							// 页面我的页面
							 uni.navigateBack({
								delta: 1, // 返回上一页
								success: () => {
									console.log('返回成功')
								},
								fail: () => {
									console.log('返回失败')
								}
							})
						}
					})
				} else {
					uni.showToast({
						title: '用户名或密码不能为空',
						icon:'none',
						duration: 2000
					})
				}
			},
			// 点击注册按钮跳转到注册页面
			clickRegister() {
				uni.navigateTo({
					url:'/pages/register/register'
				})
			}
		},
		onLoad() {
			// 一进入这个页面就执行这个方法
			this.userInfoInit()
		}
	}
</script>

<style>

</style>
