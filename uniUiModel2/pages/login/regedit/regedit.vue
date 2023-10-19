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
				<u-form-item label="确认密码" label-align="center" label-width="150">
					<u-input v-model='twicePassword' placeholder="请输入密码" type="password"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<view >
			
			<u-button style="margin-top: 50rpx;width: 40%;" @click="regedit" type="primary">
				注册</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:'',
				twicePassword:''
			}
		},
		methods: {
			regedit(){
				if(this.username==''||this.password==''||this.twicePassword==''){
					this.$toast('请输入完整信息！')
				}else if(this.password!=this.twicePassword){
					this.$toast('密码输入错误，请保证两次密码输入一致！')
				}else{
					this.$request({
						url:'/user/register?username='+this.username+'&password='+this.password,
						method:'post'
					}).then(res=>{
						console.log(res);
						if(res.code==200){
							this.$toast('注册成功！')
							setTimeout(()=>{
								uni.navigateBack({
									delta:1
								})
							},1000)
						}else{
							this.$toast('注册失败！')
						}
					})
				}
			}
		}
	}
</script>

<style>

</style>
