<template>
	<view>
		<view class="box" style="display: flex;">
			<!-- <image></image> -->
			<view>
				<u-avatar></u-avatar>
			</view>
			<view style="margin-left: 2vh;">
				<view style="line-height: 98rpx;">{{userdata.username}}</view>
			</view>
		</view>
		<view class="box">
			<u-cell-group>
				<u-cell-item v-for="item in list" :title="item.title" @click="Go(item.link)">
				</u-cell-item>
			</u-cell-group>
		</view>
		<u-button type="error" style="width: 60%;margin-top: 40rpx;" @click="exit">退出登录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userdata: {},
				list: [{
						title: '修改密码',
						link:'../changePassword/changePassword'
					},
					{
						title: '客服微信',
						link:''
					},
					{
						title: '信用分管理',
						link:'creditScoreManagement/creditScoreManagement'
					}
				]
			}
		},
		methods: {
			exit(){
				uni.removeStorageSync('token')
				uni.removeStorageSync('username')
				uni.reLaunch({
					url:"../login/login"
				})
			},
			Go(link){
				uni.navigateTo({
					url:link
				})
			}
		},
		onLoad() {
			this.$request({
				url: '/user/list?pageNum=1&pageSize=10'
			}).then(res => {
				console.log(res);
				res.data.data.map((item) => {
					if (item.username == uni.getStorageSync('username')) {
						this.userdata = item
					}
				})
			})
		}
	}
</script>

<style>

</style>
