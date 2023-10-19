<template>
	<!-- 图书馆预约首页 -->
	<view>
		<!-- <u-button style="width: 95%;margin: 3vh auto;background-color: #ff8783;height: 100rpx;color: #000000;" @click="Go1">咨询公告</u-button>
		<u-button style="width: 95%;margin: 4vh auto;background-color: #4cd964;height: 100rpx;color: #000000;" @click="Go2">门票预约</u-button>
		<u-button style="width: 95%;margin: 3vh auto;background-color: #fcb552;height: 100rpx;color: #000000;" @click="Go3">时间预约</u-button> -->
		<view >
			<u-cell-group>
				<u-cell-item v-for="item in list" :arrow="false">
					<view slot="label" @click="clickLogs(item)">
						<view>
							<view style="font-weight: 700;">{{item.name}}</view>
							<view style="display: flex;">
								<view>
									开始时间：
								</view>
								<view>
									{{item.start_time}}
								</view>
							</view>
							<view style="display: flex;">
								<view>
									结束时间：
								</view>
								<view>
									{{item.end_time}}
								</view>
							</view>
						</view>
					</view>
				</u-cell-item>
			</u-cell-group></view>
			
			<u-popup v-model="show" mode="bottom" length="20%">
				<view>地点: {{item.name}}</view>
				<view>开始时间: {{item.start_time}}</view>
				<view>结束时间: {{item.end_time}}</view>
				<view v-if="item.status === 1">状态：预约成功</view>
				<view v-else-if="item.status === 2">状态：已取消</view>
				<view v-else-if="item.status === 3">状态：已完成</view>	
				<view v-else-if="item.status === 4">状态：超时</view>	
				<view v-if="item.status === 1">
					<u-button type="success" @click="sign(item)">签到</u-button>
					<u-button type="warning" @click="cancel(item)">取消预约</u-button>
				</view>
			</u-popup>
			
		</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				show: false,
				item: {}
				
			}
		},
		methods: {
			getDataList() {
				this.$request({
					url: '/reservation/list2?pageNum=1&pageSize=10',
					method: 'post'
				}).then(res => {
					console.log(res);
					this.list = res.data.data
				})
			},
			Go1() {
				uni.navigateTo({
					url: 'consultationAnnouncement/consultationAnnouncement'
				})
			},
			Go2() {
				uni.navigateTo({
					url: 'seatReservation/seatReservation'
				})
			},
			Go3() {
				this.$toast("功能暂未开发")
			},
			clickLogs(item) {
				this.show = true
				this.item = item
				console.log(this.item);
			},
			sign(item) {
				console.log(item);
				this.$request({
					url: `/reservation/sign/${item.id}`,
					method: 'post'
				}).then(res => {
					console.log(res);
					if(res.code === 200) {
						this.show = false
						this.getDataList()
						uni.showToast({
							title: res.message
						})
					} else {
						uni.showToast({
							title:res.message,
							icon:"error"
						})
						this.show = false
						this.getDataList()
					}
				})
			},
			cancel(item) {
				this.$request({
					url: `/reservation/cancel/${item.id}`,
					method: 'post'
				}).then(res => {
					console.log(res);
					if(res.code === 200) {
						this.show = false
						this.getDataList()
						uni.showToast({
							title: res.message
						})
					}
				})
			}
		},
		onLoad() {
			if (!uni.getStorageSync('token')) {
				uni.reLaunch({
					url: "../login/login"
				})
			}
			this.getDataList()
			
		}
	}
</script>

<style>

</style>