<template>
	<view style="width: 100%;height: 94vh;">
		<view class="addressBox">
			{{userAddress}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				userAddress: ''
			}
		},
		methods: {
			getAddress() {
				this.$request({
					url: 'http://localhost:8888/simple-user/fuzzyList?pageNum=1&pageSize=1&username=' + this.username,
					method: 'post'
				}).then(res => {
					console.log(res);
					this.userAddress = res.data.data[0].address
				})
			}
		},
		onLoad() {
			const data = this.$route.query.username
			this.username = data
			this.getAddress()
		}
	}
</script>

<style scoped>
.addressBox {
	background: #FFFFFF;
	border-radius: 20rpx;
	margin: 20rpx;
	padding: 20rpx;
}
</style>
