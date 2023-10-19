<template>
	<view style="display: flex;flex-direction: column;align-items: center;">
		<u-input v-model="username" type="text" placeholder="请输入用户名" border
		 style="width: 80%;margin-top: 20px;" />
		<u-input v-model="password" type="password" placeholder="请输入密码" border 
		style="width: 80%;margin-top: 20px;"/>
		<u-input v-model="confirmPassword" type="password" placeholder="确认密码" border
		style="width: 80%;margin-top: 20px;"/>
		<u-button type="primary" @click="clickRegister"
		style="width: 80%;margin-top: 20px;"
		>
		注册
		</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				confirmPassword: ''
			}
		},
		methods: {
			clickRegister() {
				if (this.username !== '' && this.password !== '' && this.confirmPassword !== '') {
					uni.request({
						url: 'http://localhost:8888/simple-user/register?username='+this.username+"&password="+this.password,
						method: 'POST',
						header: {
							'Content-Type': 'application/json'
						},
						success: (res) => {
							console.log(res.data);
							uni.showToast({
								title: '注册成功',
								icon:'none',
								duration: 2000
							})
							// 页面登录页面
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
				}else {
					uni.showToast({
						title: '输入项不能为空',
						icon:'none',
						duration: 2000
					})
				}
			},
			userInfoInit() {
				this.username = ''
				this.password = ''
				this.confirmPassword = ''
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
