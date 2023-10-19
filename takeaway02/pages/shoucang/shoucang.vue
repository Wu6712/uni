<template>
	<view>
		<view v-for="item in infoData" class="shouCangBox">
			<u-image height="100%" width="15%" :src="item.image" ></u-image>
			<view style="width: 80%;height:100%;margin-left: 13rpx;">
				<view style="font-size: 25px;">{{item.name}}</view>
				<view>{{item.represent}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoData: {}
			}
		},
		methods: {
			getInfo() {
				this.$request({
					url: 'http://localhost:8888/dish/allCollect'
				}).then(res => {
					console.log(res);
					this.infoData = res.data
				})
			}
		},
		onLoad() {
			this.getInfo()
		}
	}
</script>

<style scoped>
.shouCangBox {
	height: 14vh;
	background: #FFFFFF;
	border-radius: 20rpx;
	margin: 20rpx;
	padding: 20rpx;
	display: flex;
}
</style>
