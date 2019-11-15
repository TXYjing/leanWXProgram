const TOKEN = 'token'

App({
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  //先从缓存中判断是否有token存储，如果没有则进行登录，如果有判断token是否过期如果没有过期无需再次登录，如果过期就重新登录==》避免每次onlaunch的时候都需要执行一次登录
  onLaunch: function() {
    //1.先从小程序中取出token
    const token = wx.getStorageSync(TOKEN)
    //2.判断token是否有值
    if (token && token.length !== 0) { //已有token，验证token是否过期
    //验证token是否过期
    this.check_token(token)
    } else {//没有token
      this.login()
    }

  },
  check_token(token){
    console.log("验证token")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
        // console.log('res',res)
        if(!res.data.errCode){
          this.globalData.token=token;
        }else{
          this.login()
        }

      },
      fail:(err)=>{
        console.log('err',err)
      }
    })
  },
  login() {
    console.log("登录操作")
    //登录操作
    wx.login({
      success: (res) => {
        //1.获取code（code的有效期一般为5分钟）
        const code = res.code;
        //2.将code发送到服务器(实际开发中需要传入用户名、密码等参数)
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            //1.取出token
            const token = res.data.token;
            //2.将token存到globalData中
            this.globalData.token = token;
            console.log(token)

            //3.将token进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
        // console.log('res',res)
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  }
})