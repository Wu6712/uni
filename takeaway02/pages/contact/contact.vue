<template>
	<view class="contact">
		<view>
			<image class="img" src="https://pic1.zhimg.com/80/v2-6bf5cb820852598b71914e09e26ed2d0_720w.webp" style="height: 150rpx;"></image>
		</view>
		<view class="info">
			<view @click="phone">联系电话:400-123-4567 (点击拨打) </view>
			<view>联系地址:江苏省常州市武进区鸣新中路22号</view>
		</view>
		<map class="map" :scale="scale" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:119.95446,
				latitude:31.678135,
				scale:15,
				markers:[
					{
						longitude:119.95446,
						latitude:31.678135,
						iconPath:'../../static/others/hmlogo.png',
						width:30,
						height:30,
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			view{
				line-height: 60rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
