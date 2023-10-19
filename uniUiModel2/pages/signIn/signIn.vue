<template>
	<view>
		<view style="text-align: right;">
			<image src="../../static/扫码.png" style="width: 50rpx;height: 50rpx;margin: 20rpx;" @click="signin"></image>
		</view>
		<view style="width: 300rpx;height: 300rpx;border-radius: 50%;background-color: #4CD964;margin: 10vh auto;text-align: center;" @click="signin">
		</view>
		<view style="margin-top: -21vh;text-align: center;font-size: 40rpx;" @click="signin">签到</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			signin(){
				this.$toast('签到成功！')
			}
		}
	}
</script>

<style>

</style>
