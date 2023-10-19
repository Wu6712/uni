<template>
	<!-- 预约首页 -->
	<view>
		<u-search style="padding: 20rpx; background-color: #007AFF;"
		 placeholder="请输入博物馆名称" :action-style="{'color':'#ffffff'}"></u-search>
		
		<view class="box" style="display: flex;">
			<view>
				<image src="../../static/暂无图片.jpg" mode="" style="width: 200rpx; height: 200rpx; background-color: #000000;"></image>
			</view>
			
			<!-- <view style="margin-left: 30rpx;" v-for="item in list"> -->
			<view style="margin-left: 30rpx;">
				<view style="font-weight: 500; font-size: 40rpx;">XX图书馆</view>
				<!-- <view style="font-weight: 500; font-size: 40rpx;">XX图书馆{{item.name}}</view> -->
				<view style="margin-top: 20rpx; font-size: 30rpx;">开放时间：{{}}</view>
				
				 <u-button shape="circle" type="primary" size="default" plain style="margin-left: 250rpx;">立即预约</u-button>
			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {
			
		},
		onLoad() {
			this.$request({
				url:'/museum/list',
				method:'post'
			}).then(res =>{
				this.list = res.data
			})
		}
	}
</script>

<style>

</style>
