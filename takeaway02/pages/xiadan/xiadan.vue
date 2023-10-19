<template>
	<view style="width: 100%; height: 93vh;position: relative;">
		<!-- 照片 -->
		<u-image width="100%" height="50vh" :src="itemData.image"></u-image>
		<!-- 菜名 -->
		<view style="display: flex;">
			<view style="width: 85%;font-size: 30px;margin-left: 20rpx;">
			{{itemData.name}}
			</view>
			<!-- 收藏 -->
			<view style="width: 15%;">
				<u-image height="100%" width="80%" :src="collectURL" @click="collectDish"></u-image>
			</view>
		</view>
		<!-- 菜描述 -->
		<view style="margin: 15rpx 0 0 20rpx;">
			描述: {{itemData.represent}}
		</view>
		<!-- 结算模块 -->
		<view style="width: 100%;height: 8vh;background-color: red;position: absolute;bottom: 0;display: flex;justify-content: space-between;">
			<view style="height: 100%; width: 70%;background-color: aliceblue;display: flex;justify-content: space-between;">
				<!-- 份数 -->
				<view style="display: flex;justify-content:space-between;align-items: center;">
					<u-button type="warning" size="mini" style="margin-left: 20px;border-radius: 50%;" @click="jian">-</u-button>
					<view style="margin-left: 10px;margin-right: 10px;">
						{{num}}份
					</view>
					<u-button type="warning" size="mini" @click="jia" style="border-radius: 50%;">+</u-button>
				</view>
				<!-- 钱数 -->
				<view style="height: 100%;width: 30%;line-height: 65px;text-align: center;font-size: 18px;color: red;">
					￥{{price}}
				</view>
			</view>
			<!-- 结算按钮 -->
			<view class="jieSuanBtn" @click="clickJieSuan">
				结算
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemData: {},
				num: 1,
				price: 0,
				collectURL: ''
			}
		},
		methods: {
			clickJieSuan() {
				uni.showToast({
					title: '下单成功',
					duration: 2000
				})
			},
			jia() {
				this.num += 1
				this.price = this.num * this.itemData.price
			},
			jian() {
				if (this.num > 1) {
					this.num -= 1
					this.price = this.num * this.itemData.price
				}
			},
			collectDish() {
				if (this.itemData.isCollect) {
					this.$request({
						url: 'http://localhost:8888/dish/cancelCollect?id=' + this.itemData.id,
						method: 'post',
					}).then(res => {
						uni.showToast({
							title: '取消收藏成功',
						})
						this.getDishInfo()
					})
				} else {
					this.$request({
						url: 'http://localhost:8888/dish/collect?id=' + this.itemData.id,
						method: 'post',
					}).then(res => {
						uni.showToast({
							title: '收藏成功',
						})
						this.getDishInfo()
					})
				}
			},
			getDishInfo() {
				this.$request({
					url: 'http://localhost:8888/dish/getOne?id=' + this.itemData.id,
				}).then(res => {
					this.itemData = res.data
				})
			}
		},
		onLoad() {
			const data = JSON.parse(decodeURIComponent(this.$route.query.data))
			this.itemData = data
			this.price = this.itemData.price
			this.collectURL = this.itemData.isCollect ? '../../static/collected.png' : '../../static/uncollect.png'
			console.log(data);
		}
	}
</script>

<style scoped>
.jieSuanBtn {
	height: 100%; 
	width: 30%; 
	background-color: red;
	color: aliceblue;
	font-size: 20px;
	line-height:65px;
	text-align: center;
}
</style>
