<template>
	<view style="display: flex;flex-direction: column;align-items: center;">
		<u-input v-model="oldPasswd" type="password" placeholder="请输入旧密码" border
		 style="width: 80%;margin-top: 20px;" />
		<u-input v-model="newPasswd" type="password" placeholder="请输入新密码" border 
		style="width: 80%;margin-top: 20px;"/>
		<view style="width: 80%;display: flex;justify-content: space-between;">
			<u-button type="primary" @click="clickChangePasswd"
			style="width: 100%;margin-top: 20px;"
			>
			修改密码
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPasswd: '',
				newPasswd: ''
			}
		},
		methods: {
			userInfoInit() {
				this.oldPasswd = '',
				this.newPasswd = ''
			},
			clickChangePasswd() {
				if (this.oldPasswd !== '' && this.newPasswd !== '') {
					if (this.oldPasswd !== this.newPasswd) {
						uni.request({
							url: 'http://localhost:8888/simple-user/info/password2?username='+sessionStorage.getItem('username')
							+'&oldPassword='+this.oldPasswd+'&newPassword='+this.newPasswd,
							method:'POST',
							header: {
								'Content-Type': 'application/json'
							},
							success: (res) => {
							console.log(res.data);
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
					}else {
						uni.showToast({
							title: '新密码和旧密码不能一样',
							icon: 'none',
							duration: 2000
						})
					}
				}else {
					uni.showToast({
						title: '新密码或旧密码不能为空',
						icon: 'none',
						duration: 2000
					})
				}
			}
		},
		onLoad() {
			this.userInfoInit()
		}
	}
</script>

<style>

</style>
