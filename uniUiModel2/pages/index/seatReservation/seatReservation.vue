<template>
	<!-- 预约功能页 -->
	<view>
		<!-- 预约记录 -->
		<view v-if="current==1">
			<view class="box">
				<u-cell-group>
					<u-cell-item :arrow="false" v-for="item in map">
						<view slot="title">
							<view>
								<view>{{item}}</view>
							</view>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
		</view>

		<!-- 预约选座 -->
		<view v-if="current==2">
			<uni-calendar :insert="true" :lunar="true" :start-date="nowDate" :end-date="'2050-5-20'" showMonth
				@change="change" />
			<view class="box" v-for="item in dataList.floor" @click="Go()">
				<view style="display: flex;justify-content: space-between;">
					<view style="font-weight: 700;font-size: 26rpx;">{{item + '楼连学习区'}}</view>
					<view>
						<u-button size="mini" type="primary"
							style="background-color: #e5ecff;border: 1rpx solid #007AFF;color: #000000;height: 40rpx;width: 100rpx;">
							筛选</u-button>
					</view>
				</view>
				<view style="display: flex;justify-content: space-between;margin: 20rpx 0;">
					<view style="display: flex;font-size: 18rpx;">
						<view>总数：</view>
						<view>23</view>
					</view>
					<view style="display: flex;font-size: 18rpx;">
						<view>可用：</view>
						<view>19</view>
					</view>
				</view>
				<u-line-progress active-color="#4cd964" :percent="70" :show-percent="false" striped striped-active
					height="20"></u-line-progress>
			</view>
		</view>

		<!-- 通知公告 -->
		<view v-if="current==3">

		</view>



		<!-- 底部导航栏 -->
		<view style="height: 125rpx;position: fixed;bottom: 0;width: 100%;">
			<u-line color="#000"></u-line>
			<view>
				<u-grid col="3">
					<u-grid-item v-for="item in currentList" @click="currentC(item.current)">
						<image style="width: 40rpx;height: 40rpx;" :src='item.page' v-if="current!=item.current">
						</image>
						<image style="width: 40rpx;height: 40rpx;" :src='item.spage' v-if="current==item.current">
						</image>
						<view style="font-size: 20rpx;color: #007AFF;" v-if="current==item.current">{{item.title}}
						</view>
						<view style="font-size: 20rpx;" v-if="current!=item.current">{{item.title}}</view>
					</u-grid-item>
				</u-grid>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentList: [{
						current: 1,
						page: '../../../static/template.png',
						spage: '../../../static/templateHL.png',
						title: '预约记录'
					},
					{
						current: 2,
						page: '../../../static/template.png',
						spage: '../../../static/templateHL.png',
						title: '预约座位'
					},
					{
						current: 3,
						page: '../../../static/template.png',
						spage: '../../../static/templateHL.png',
						title: '通知公告'
					},
					// {
					// 	current:4,
					// 	page:'../../../static/template.png',
					// 	spage:'../../../static/templateHL.png',
					// 	title:'我的'
					// }
				],
				current: 1,
				appointmentRecordList: [],
				map: [],
				nowDate: '',
				dataList: {},
			}
		},
		methods: {
			currentC(current) {
				this.current = current
				uni.setNavigationBarTitle({
					title: this.currentList[current - 1].title
				})
			},
			change(e) {
				console.log('change 返回:', e)

			},
			Go() {
				uni.navigateTo({
					url: 'seatDeatil/seatDeatil?data=1'
				})
			}
		},
		onLoad() {
			this.currentC(1)
			this.$request({
				url: '/reservation/listAll?pageNum=1&pageSize=10',
				method: 'post'
			}).then(res => {
				console.log(res);
				this.appointmentRecordList = res.data.data
				this.map = res.data.data.map(item => {
					return item.floor + '楼' + item.area + item.row + '行' + item.column + '列'
				})
			})
			
			this.$request({
				url: '/seat/list3?pageNum=1&pageSize=50',
				method: 'post'
			}).then(res => {
				console.log(res);
				const dataList = {}
				res.data.data.map(item => {
						let area = item.area
						let column = item.column
						let row = item.row
						let floor = item.floor
						if(!dataList.area) {
							dataList.area = []
						}
						if(!dataList.column) {
							dataList.column = []
						}
						if(!dataList.row) {
							dataList.row = []
						}
						if(!dataList.floor) {
							dataList.floor = []
						}
						
						if(dataList.area.indexOf(item.area) === -1) {
							dataList.area.push(item.area)
						}
						if(dataList.column.indexOf(item.column) === -1) {
							dataList.column.push(item.column)
						}
						if(dataList.row.indexOf(item.row) === -1) {
							dataList.row.push(item.row)
						}
						if(dataList.floor.indexOf(item.floor) === -1) {
							dataList.floor.push(item.floor)
						}
						
				})
				this.dataList = dataList
				console.log(dataList);
			})
			
			var date = new Date();
			var nowMonth = date.getMonth() + 1;
			var strDate = date.getDate();
			var seperator = "-";
			if (nowMonth >= 1 && nowMonth <= 9) {
				nowMonth = "0" + nowMonth;
			}
			if (strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
			this.nowDate = nowDate
		}
	}
</script>

<style>

</style>
