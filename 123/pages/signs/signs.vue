<template>
	<view>
		
		<view class="box" v-if="dataList.length">
			<u-cell-group >
				<u-cell-item :label='item.name' v-for="item in dataList" :arrow='false'>
					<u-button size='mini' type='primary' @click="booking(item.id)">预约</u-button>
				</u-cell-item>
			</u-cell-group>
		</view>
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				dataList: []
			}
		},
		onLoad() {
			this.getDataList()
		},
		methods: {
			getDataList() {
				this.$request({
					url: '/reservation/list2?pageNum=1&pageSize=10',
					method: 'post'
				}).then(res => {
					res.data.data.map(item => {
						if(item.username == uni.getStorageSync("username") && item.status != 2) {
							this.dataList.push(item)
						}
					})
					console.log(this.dataList);
				})
			},
			booking(id) {
				this.$request({
					url: '/reservation/appointment?id=' + id,
					method: 'post'
				}).then(res => {
					console.log(res);
					this.$toast(res.message)
					this.dataList = []
					this.getDataList()
				})
			}
		}
	}
</script>

<style>
</style>