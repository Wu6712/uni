export default function request(config) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: 'http://localhost:8798' + config.url,
			method: config.method || 'get',
			data: config.data || {},
			header:{
				Authorization:this.$token
			},
			success(res) {
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}
