<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
@import "uview-ui/index.scss";
	
	page{
		background-color: #f0f0f0;
	}
	
	.box{
		width: 95%;
		text-align: center;
		margin: 20rpx 0;
		padding: 20rpx;
		box-shadow: 5rpx 2rpx 2rpx #ccc;
		border-radius: 20rpx;
	}
</style>