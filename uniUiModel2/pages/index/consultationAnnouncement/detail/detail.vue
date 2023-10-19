<template>
	<!-- 咨询公告详情页 -->
	<view>
		<view class="box">
			{{data.content}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{}
			}
		},
		methods: {
			
		},
		onLoad:function(option){
			this.$request({
				url:'/notice/one?id='+option.id
			}).then(res=>{
				// console.log(res);
				this.data = res.data
				uni.setNavigationBarTitle({
					title:res.data.content
				})
			})
		}
	}
</script>

<style>

</style>
