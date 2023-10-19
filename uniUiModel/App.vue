<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
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
		background-color: #f0f2f6;
	}
	
	.box{
		width: 95%;
		border-radius: 20rpx;
		margin: 20rpx auto;
		padding: 20rpx;
		box-shadow: 2rpx 2rpx 5rpx #CCCCCC;
		background-color: #FFFFFF;
	}
	
	.swiper{
		width: 100%;
		height: 100%;
	}
	
	.gridimg{
		width: 80rpx;
		height: 80rpx;
	}
	
	.gridname{
		font-size: 16rpx;
	}
	
	.img{
		width: 300rpx;
		height: 200rpx;
	}
	
	.rich{
		div{
			p{
				img{
					display: none;
				}
			}
		}
	}
	
	.smalltitle{
		font-weight: 700;
		margin: 20rpx;
	}
	
	.font{
		font-weight: 600;
		font-size: 26rpx;
	}
	
	.none{
		margin-top: 500rpx;
		font-weight: 700;
		font-size: 30rpx;
		text-align: center;
		color: #C0C0C0;
	}
	
	.flex{
		display: flex;
	}
</style>
