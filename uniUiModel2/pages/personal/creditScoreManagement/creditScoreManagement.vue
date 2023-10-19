<template>
	<view >
		<view class="smalltitle">信用分</view>
		<view class="box">
			<qiundatacharts type="gauge" :opts="opts1" :chartData="chartData1" />
		</view>
	</view>
</template>

<script>
	import qiundatacharts from '../../../uni_modules/qiun-data-charts/qiun-data-charts.vue'
	export default {
		data() {
			return {
				opts: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [5, 5, 5, 5],
					dataLabel: true,
					dataPointShape: false,
					enableScroll: false,
					legend: {
						show: true,
						position: "right",
						lineHeight: 25
					},
					extra: {
						radar: {
							gridType: "circle",
							gridColor: "#CCCCCC",
							gridCount: 3,
							opacity: 1,
							max: 240,
							labelShow: true,
							linearType: "custom",
							border: false
						}
					}
				},
				chartData: {
					categories: ["身份特质", "履约能力", "信用历史", "行为偏好"],
					series: [{
						name: "得分",
						data: [90, 110, 165, 195]
					}]
				},
				opts1: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: undefined,
					title: {
						// 显示的分数
						name: '',
						fontSize: 25,
						color: "#2fc25b",
						offsetY: 0
					},
					subtitle: {
						name: "信用分",
						fontSize: 15,
						color: "#1890ff",
						offsetY: 0
					},
					extra: {
						gauge: {
							type: "progress",
							width: 20,
							labelColor: "#666666",
							startAngle: 0.75,
							endAngle: 0.25,
							startNumber: 0,
							endNumber: 100,
							labelFormat: "",
							splitLine: {
								fixRadius: -10,
								splitNumber: 10,
								width: 15,
								color: "#FFFFFF",
								childNumber: 5,
								childWidth: 12
							},
							pointer: {
								width: 24,
								color: "auto"
							}
						}
					}
				},
				chartData1: {
					categories: [{
						"value": 0.2,
						"color": "#1890ff"
					}, {
						"value": 0.8,
						"color": "#2fc25b"
					}, {
						"value": 1,
						"color": "#f04864"
					}],
					series: [{
						name: "得分",
						data: 1
					}]
				},
				
			}
		},
		methods: {
			getUserInfo() {
				this.$request({
					url: '/user/getInfoByUsername?username='+uni.getStorageSync('username'),
					method: 'get',
				}).then(res => {
					console.log(res);
					this.opts1.title.name = res.data.score
				})
			}
		},
		components: {
			qiundatacharts
		},
		onLoad() {
			this.getUserInfo()
		}
	}
</script>

<style>

</style>
