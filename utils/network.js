//写法一：
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}
//写法二：
// export default function request(options) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success: function(res) {
//         resolve(res)//成功的时候执行then
//         // console.log(res)
//       },
//       fail: function(err) {
//         reject(err)//失败的时候执行reject
//         // console.log(err)
//       }
//     })
//   })
// }