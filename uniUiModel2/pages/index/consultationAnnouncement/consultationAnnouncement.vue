<template>
	<!-- 咨询公告列表页 -->
	<view>
		<view class="box">
			<u-cell-group >
				<u-cell-item v-for="item in list" :title="item.content" @click="GoDetail(item.id)"></u-cell-item>
			</u-cell-group>
			<view style="text-align: center;margin: 20rpx auto;font-size: 24rpx;">-------暂无更多公告------</view>
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
			GoDetail(id){
				uni.navigateTo({
					url:'detail/detail?id='+id
				})
			}
		},
		onLoad() {
			this.$request({
				url:'/notice/list?pageNum=1&&pageSize=10',
				method:'post'
			}).then(res=>{
				// console.log(res);
				this.list = res.data.data
				this.list.map((item)=>{
					if(item.content.length>10){
						var arr = item.split('')
						arr.splice(0,10)
						item.content = arr.join('')+"..."
					}
				})
			})
		}
	}
</script>

<style>

</style>
