//获取全局共享数据的方法
//getApp()可获取App()产生的示例对象
const app = getApp()
const datas = app.globalData;
console.log("共享数据：", datas)
Page({
//----------------------2.初始化数据-------------------------
  /**
   * 页面的初始数据
   */
  data: {

  },
//------------------------1.生命周期函数-----------------------
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //---------------------------3.监听绑定事件----------------

  /**
   * 获取用户信息
   */
  handleGetUserInfo(event) {
    //event.detail中存放的就是用户信息
    console.log("用户信息：", event)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // --------------------------4.监听其他事件------------------
  //监听页面滚动
  onPageScroll(obj) {
    console.log('滚动事件--：',obj)
  },
  //监听页面是否滚动到底部
  onReachBottom(obj){
    console.log("页面滚动到底部")
  },
  //下拉刷新
  onPullDownRefresh(){
    console.log("下拉刷新")
  }

})