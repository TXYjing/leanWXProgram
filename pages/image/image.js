// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc:''
  },
  // 选择图片
  handleChooseAlbum(){
    var _this=this;
    //系统API，让用户在相册中选择或者打开拍照
    wx.chooseImage({
      success: function(res) {
        console.log(res)
        // 取出2图片路径
        const path=res.tempFilePaths[0]
        //设置imagepath
        _this.setData({
          imgSrc: path
        })
      },
    })
  },
//图片加载完成监听
  handleImageLoad(){
    console.log("图片加载")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})