<template>
	<!-- 图书馆预约首页 -->
	<view>
		<u-button style="width: 95%;margin: 3vh auto;background-color: #ff8783;height: 100rpx;color: #000000;" @click="Go1">咨询公告</u-button>
		<u-button style="width: 95%;margin: 4vh auto;background-color: #4cd964;height: 100rpx;color: #000000;" @click="Go2">座位预约</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			Go1(){
				uni.navigateTo({
					url:'consultationAnnouncement/consultationAnnouncement'
				})
			},
			Go2(){
				uni.navigateTo({
					url:'seatReservation/seatReservation'
				})
			}
		},
		onLoad() {
			if(!uni.getStorageSync('token')){
				uni.reLaunch({
					url:"../login/login"
				})
			}
		}
	}
</script>

<style>
	
</style>
