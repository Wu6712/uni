<template>
	<view>
		<view v-for="(item,index) in dataList" :key="index" style="display: flex;justify-content: center;">
			<view style="width: 95%;height: 200rpx;box-shadow: 5rpx 5rpx 5rpx 5rpx grey;margin-top: 20rpx;
							border-radius: 10rpx;display: flex;align-items: center;">
				<view>
					<image :src="item.image" style="height: 180rpx;width: 180rpx;display: block;margin-left: 10rpx;"></image>
				</view>
				<view style="margin-left: 15rpx;">
					<view>{{item.name}}</view>
					<view>地点：{{item.address}}</view>
				</view>
				<view style="position: absolute;right: 25rpx;">
					<u-button type="primary" @click="booking(item)">预约</u-button>
				</view>
			</view>
		</view>
		
		<u-popup v-model="timeShow" mode="bottom">
			<uni-section
				title="选择时间"
				type="line"
			></uni-section>
			<view class="example-body">
				<uni-datetime-picker
					v-model="datetimerange"
					type="datetimerange"
					:start="startTime"
					:end="endTime"
					rangeSeparator="至"
					@change="changeTime($event)"
				/>
			</view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [],
				timeShow: false,
				datetimerange: [],
				startTime: '',
				endTime: '',
				insertDate: {}
			}
		},
		onLoad() {
			this.$request({
				url: '/museum/list?pageNum=1&pageSize=10',
				method: 'post'
			}).then(({ data: res }) => {
				console.log(res);
				this.dataList = res.data
			})
		},
		methods: {
			booking(item) {
				this.insertDate = {}
				this.insertDate.museumId = item.id
				this.getCurrentTime()
				this.timeShow = true
			},
			getCurrentTime() {
				let currentDate = new Date();
				var year = currentDate.getFullYear();
				var month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // 月份从0开始，需要加1，并且保证两位数格式
				var day = ('0' + currentDate.getDate()).slice(-2); // 保证两位数格式
				var day02 = ('0' + (currentDate.getDate()+7)).slice(-2);
				var hours = ('0' + currentDate.getHours()).slice(-2); // 保证两位数格式
				var minutes = ('0' + currentDate.getMinutes()).slice(-2); // 保证两位数格式
				
				// 格式化成"yyyy-MM-dd HH:mm"格式
				this.startTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
				this.endTime = year + '-' + month + '-' + day02 + ' ' + hours + ':' + minutes;
				console.log(this.startTime);
				console.log(this.endTime);
			},
			changeTime(e) {
				this.insertDate.startTime = e[0]
				const parts = e[1].split(' ');
				
				// 获取日期部分和时间部分
				const datePart = parts[0];
				const timePart = parts[1].split(':').slice(0, 2).join(':'); // 获取前两个元素，并用':'连接它们
				
				// 重新组合日期和时间
				this.insertDate.endTime = `${datePart} ${timePart}`;
				this.insertDate.status = 0
				this.insertDate.userId = 0
				
				console.log(this.insertDate);
				
				this.$request({
					url: '/reservation/addOne',
					method: 'post',
					data: this.insertDate
				}).then(res => {
					if(res.code == 200) {
						this.timeShow = false
						uni.showToast({
							title:res.message
						})
					}
				})
			}
		}
	}
</script>

<style>
</style>
