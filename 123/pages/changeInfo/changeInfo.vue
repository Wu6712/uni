<template>
	<view>
		<view class="box" style="margin-top:3vh">
			<u-form>
				<u-form-item label="昵称" label-align="center" label-width="150">
					<u-input v-model='userInfo.nickname' placeholder="请输入用户名"></u-input>
				</u-form-item>
				<u-form-item label="性别" label-align="center" label-width="150">
					<u-radio-group v-model="value">
								<u-radio 
									@change="radioChange"
									v-for="(item, index) in list" :key="index"
									:name="item.name"
									:disabled="item.disabled"
								>
									{{item.name}}
								</u-radio>
							</u-radio-group>
				</u-form-item>
				<u-form-item label="地址" label-align="center" label-width="150">
					<u-input v-model='userInfo.address' placeholder="请输入密码"></u-input>
				</u-form-item>
			</u-form>
		</view>
		
		<view style="display: flex;">
			<u-button style="margin-top: 50rpx;width: 40%;" @click="sub" type="primary">
				确认修改</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				value: '',
				list: [
					{
						name: '男',
						disabled: false,
						value: 1
					},
					{
						name: '女',
						disabled: false,
						value: 0
					}
				],
				
			}
		},
		methods: {
			radioChange(e) {
				this.value = e
			},
			sub() {
				if(this.value == '男') {
					this.userInfo.sex = 1
				}else {
					this.userInfo.sex = 0
				}
				this.$request({
					url: '/user/save',
					method: 'post',
					data: this.userInfo
				}).then(res => {
					if(res.code == 200) {
						this.$toast('修改成功!')
					} else {
						this.$toast('修改失败!')
					}
					
				})
			}
		},
		onLoad() {
			this.$request({
				url: '/user/info?username=' + uni.getStorageSync('username'),
				method: 'get'
			}).then(res => {
				console.log(res);
				this.userInfo = res.data
				if (this.userInfo.sex == 1) {
					this.value = '男'
				} else {
					this.value = '女'
				}
				console.log(this.userInfo);
			})
		},
	}
</script>

<style>
</style>