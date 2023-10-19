<template>
	<view>
		<view class="box" style="margin-top:3vh">
			<u-form>
				<u-form-item label="用户名" label-align="center" label-width="150">
					<u-input v-model='username' placeholder="请输入用户名"></u-input>
				</u-form-item>
				<u-form-item label="密码" label-align="center" label-width="150">
					<u-input v-model='password' placeholder="请输入密码" type="password"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<view style="display: flex;">
			<u-button style="margin-top: 50rpx;width: 40%;" @click="sub" type="primary">
				登录</u-button>
			<u-button style="margin-top: 50rpx;width: 40%;" @click="regedit" type="primary">
				注册</u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			sub() {
				if (this.username == '' || this.password == '') {
					this.$toast('请输入用户名或密码')
				} else {
					this.$request({
						url: '/user/login?username='+this.username+'&password='+this.password,
						method: 'post'
					}).then(res => {
						if (res.code == 200) {
							this.$toast('登录成功!')
							uni.setStorageSync('username', this.username)
							uni.setStorageSync('token', res.data)
							uni.reLaunch({
								url: '../index/index'
							})
						} else {
							this.$toast('登录失败!')
						}
					})
				}
			},
			regedit(){
				uni.navigateTo({
					url:'regedit/regedit'
				})
			}
		}
	}
</script>

<style>

</style>
