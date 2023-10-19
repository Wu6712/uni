<template>
	<view>
		<view class="box" style="margin-top:3vh">
			<u-form>
				<u-form-item label="旧密码" label-align="center" label-width="150">
					<u-input v-model='oldPasswd' placeholder="请输入旧密码"></u-input>
				</u-form-item>
				<u-form-item label="新密码" label-align="center" label-width="150">
					<u-input v-model='newPasswd' placeholder="请输入新密码" type="password"></u-input>
				</u-form-item>
				<u-form-item label="确认密码" label-align="center" label-width="150">
					<u-input v-model='confirmPasswd' placeholder="请输入新密码" type="password"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<view style="display: flex;">
			<u-button style="margin-top: 50rpx;width: 40%;" @click="sub" type="primary">
				修改密码</u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPasswd: '',
				newPasswd: '',
				confirmPasswd: '',
			}
		},
		methods: {
			sub() {
				if (this.oldPasswd == '' || this.newPasswd == '' || this.confirmPasswd == '') {
					this.$toast('请输入密码')
				} else if(this.newPasswd !== this.confirmPasswd) {
					this.$toast('新密码和旧密码不同')
				} else {
					this.$request({
						url: '/user/info/passwordByName?username='+uni.getStorageSync('username')+'&oldPassword='+this.oldPasswd+'&newPassword='+this.newPasswd,
						method: 'post'
					}).then(res => {
						if (res.code == 200) {
							this.$toast('修改成功!')
						} else {
							this.$toast('修改失败!')
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
