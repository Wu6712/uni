<template>
	<view>
		<view style="width: 100%;height: 100rpx;background-color: #FFFFFF;display: flex;justify-content: space-around;">
			<view style="text-align: center;margin: 20rpx;">
				<image src="../../../../static/单人座位——选座位.png" style="height: 40rpx;" mode="heightFix"></image>
				<view style="font-size: 18rpx;">当前可用</view>
			</view>
			<view style="text-align: center;margin: 20rpx;">
				<image src="../../../../static/单人.png" style="height: 40rpx;" mode="heightFix"></image>
				<view style="font-size: 18rpx;">当前有约</view>
			</view>
		</view>
		<view style="min-height: 80vh;background-color: #FFFFFF;margin-top: 20rpx;">
			<u-grid col="6" :border="false">
				<u-grid-item v-for="(item,index) in 23" @click="choiceTime()">
					<view style="text-align: center;">
						<image src="../../../../static/单人座位——选座位.png" style="height: 60rpx;" mode="heightFix"></image>
						<view>{{index+1}}</view>
					</view>
				</u-grid-item>
			</u-grid>
		</view>
		<u-popup v-model="show" mode="center" border-radius="20">
			<view style="width: 500rpx;height: 400rpx;"></view>
		</u-popup>
	</view>
</template>

<script>
import { log } from 'console'
	export default {
		data() {
			return {
				show:false
			}
		},
		methods: {
			choiceTime(){
				this.show = true
			},
			getSeatData() {
				this.$request({
					url: '',
					method: ''
				})
			}
		},
		// onLoad() {
		// 	uni.setNavigationBarTitle({
		// 		title:'一楼连廊学习区'
		// 	})
		// 	getSeatData()
		// }
		onLoad:function(option){
			console.log(option);
		}
	}
</script>

<style>

</style>
