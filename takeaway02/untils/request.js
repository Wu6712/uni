// 请求封装
export default function request(config) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: config.url,
			method: config.method || 'get',
			data: config.data || {},
			success(res) {
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}