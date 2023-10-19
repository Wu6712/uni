<template>
	<view>
		<view class="box">
					<view style="display: flex; justify-content: space-between;margin-bottom: 26rpx;">
						<view>当前预约</view>
						<view>待履约</view>
					</view>
					
					<view style="font-weight: 600;font-size: 40rpx;">
						{{}}博物馆
					</view>
					
					<view style="display: flex; justify-content: space-between; margin: 20rpx; margin-top: 40rpx;">
						<view style="font-size: 30rpx;">博物馆 一楼--A区</view>
						<!-- <u-button style="width: 150rpx; margin-left: 255rpx; height: 50rpx; background-color: #FFFFFF;  color: #FFFFFF; background-color: #007AFF;">签到</u-button> -->
						<u-button shape="circle" type="primary" size="mini" style="margin-left: 310rpx;">签到</u-button>
					</view>
					
					<view style="display: flex; justify-content: space-between; margin: 20rpx; margin-top: 20rpx;">
						<view style="font-size: 30rpx;">2023-08-31</view>
						<!-- <u-button style="width: 150rpx; margin-left: 320rpx; height: 50rpx; background-color: #FFFFFF;  color: #007AFF;">取消</u-button> -->
						<u-button plain size="mini" type="primary" shape="circle" style="margin-left: 380rpx;">取消</u-button>
					</view>
					
					
				</view>
				
				<view style="margin: 20rpx; font-weight: 600; font-size: 30rpx;">最近预约</view>
				<view class="box">
					<view style="display: flex; justify-content: space-between;margin: 10rpx;">
						<view>{{}}博物馆</view>
						<view>预约时间{{}}</view>
					</view>
					
					<view style="display: flex; justify-content: space-between; margin: 20rpx; margin-top: 40rpx;">
						<view style="font-size: 30rpx; color: grey;">博物馆</view>
						<!-- <u-button style="width: 150rpx; margin-left: 390rpx; height: 50rpx; background-color: #FFFFFF;  color: #007AFF;">再次预约</u-button> -->
						<u-button plain size="mini" type="primary" shape="circle" style="margin-left: 450rpx;">取消</u-button>

					</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
