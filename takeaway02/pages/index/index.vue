<template>
	<view>
		<!-- 轮播图 -->
		<swiper class="box" indicator-dots indicator-color="#fff" autoplay="" circular="">
			<swiper-item v-for="item in 3">
				<image src="../../static/-7b374617ff53f97.jpg" style="width: 100%;height: 100%;"></image>
			</swiper-item>
		</swiper>

		<view style="display: flex;">
			<view style="width: 20%;">
				<!-- 左边栏目 -->
				<view>
					<u-cell-group>
						<u-cell-item v-for="item in left" :title='item.name' :arrow="false" @click="clickMenu(item.id)" ></u-cell-item>
					</u-cell-group>
				</view>
			</view>
			<!-- 右边内容 -->
			<view style="width: 80%;height: 65vh;background-color: #fff;overflow-y: scroll;padding-top: 20rpx;
				display: flex;flex-wrap: wrap; justify-content: center;">
				<view class="rightBox" v-for="item in right">
					<!-- 照片 -->
					<u-image width="150rpx" height="150rpx" :src="item.image"></u-image>
					<!-- 文字 -->
					<view style="width: 60%;margin-left: 2%;display: flex;flex-direction: column;justify-content: space-between;">
						<!-- 菜名 -->
						<view style="font-size: 20px;margin-top: 10rpx;">
							{{item.name}}
						</view>
						<!-- 描述 -->
						<view>
							{{item.represent}}
						</view>
						<!-- 价格 -->
						<view style="margin-bottom: 5rpx;color: red;font-size: 17px;">
							￥{{item.price}}
						</view>
					</view>
					<!-- 下单 -->
					<view style="display: flex;flex-direction: column-reverse;" >
						<u-button type="success" size="mini" plain @click="clickDish(item)">购买</u-button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				left: [], // 左边栏目信息
				right: [] // 有点食品详细信息
			}
		},
		onLoad() {
			this.getLeftList();
		},
		methods: {
			getLeftList() {
				// 请求左边栏目信息
				this.$request({
					url: 'http://localhost:8888/menu/list',
					data: {
						pageNum: 1,
						pageSize: 10
					}
				}).then(res => {
					console.log(res);
					this.left = res.data.data
					this.clickMenu(1)
				})
			},
			clickMenu(id) {
				console.log(id);
				// 发送请求获取右边数据
				this.$request({
					url:'http://localhost:8888/dish/IdList',
					data: {
						pageNum: 1,
						pageSize: 10,
						id: id
					},
				}).then(res=>{
					console.log(res);
					this.right = res.data
				})
			},
			clickDish(item) {
				console.log(item);
				// uni.showToast({
				// 	title: '下单' + item.name + '成功'
				// })
				// 跳转到下单页面
				uni.navigateTo({
					url: '../xiadan/xiadan?data=' + encodeURIComponent(JSON.stringify(item))
				})
			}
		}
	}
</script>

<style scoped>
.rightBox {
	width: 90%;
	height: 150rpx; 
	/* background-color: aqua; */
	margin-top: 20rpx;
	display: flex;
}
</style>