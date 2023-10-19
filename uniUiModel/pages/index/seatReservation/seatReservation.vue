<template>
	<!-- 预约功能页 -->
	<view>
		<!-- 预约记录 -->
		<view v-if="current==1">
			<view class="box">
				<u-cell-group>
					<u-cell-item :arrow="false" v-for="item in appointmentRecordList">
						<view slot="title">
							<view>
								<view>{{item.address}}</view>
							</view>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
		</view>
		
		
		
		
		
		<!-- 底部导航栏 -->
		<view style="height: 125rpx;position: fixed;bottom: 0;width: 100%;">
			<u-line color="#000" ></u-line>
			<view>
				<u-grid col="3" >
					<u-grid-item v-for="item in currentList" @click="currentC(item.current)">
						<image style="width: 40rpx;height: 40rpx;" :src='item.page' v-if="current!=item.current"></image>
						<image style="width: 40rpx;height: 40rpx;" :src='item.spage' v-if="current==item.current"></image>
						<view style="font-size: 20rpx;color: #007AFF;" v-if="current==item.current">{{item.title}}</view>
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
				currentList:[{
					current:1,
					page:'../../../static/template.png',
					spage:'../../../static/templateHL.png',
					title:'预约记录'
				},
				{
					current:2,
					page:'../../../static/template.png',
					spage:'../../../static/templateHL.png',
					title:'预约座位'
				},
				{
					current:3,
					page:'../../../static/template.png',
					spage:'../../../static/templateHL.png',
					title:'通知公告'
				},
				// {
				// 	current:4,
				// 	page:'../../../static/template.png',
				// 	spage:'../../../static/templateHL.png',
				// 	title:'我的'
				// }
				],
				current:1,
				appointmentRecordList:[]
			}
		},
		methods: {
			currentC(current){
				this.current = current
				uni.setNavigationBarTitle({
					title:this.currentList[current-1].title
				})
			}
		},
		onLoad() {
			this.currentC(1)
			this.$request({
				url:'/reservation/listAll?pageNum=1&pageSize=10',
				method:'post'
			}).then(res=>{
				this.appointmentRecordList = res.data.data
			})
		}
	}
</script>

<style>

</style>
