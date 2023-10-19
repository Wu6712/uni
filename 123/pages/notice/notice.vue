<template>
	<view>
		<view v-for="item in dataList" :key="item.id">
			<view>{{item.content}}</view>
		</view>
	</view>
</template>

<script>
export default {
		data() {
			return {
				dataList: []
			}
		},
		methods: {
			getData() {
				this.$request({
					url: '/notice/list?pageNum=1&pageSize=10',
					method: 'post'
				}).then(res => {
					console.log(res);
					this.dataList = res.data.data
				})
			} 
		},
		onLoad() {
			this.getData()
		}
	}
</script>

<style>

</style>