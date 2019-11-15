Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  handleCounter(event){
    console.log('-----------', event)
    this.setData({
      counter: this.data.counter+1
    })
  },
  handleTitle(event){
    console.log("event",event)
  },
  handlePageCount(event){
    //获取自定义组件对象
    const my_classobj = this.selectComponent('.sel')
    // 通过对象改变数据
    // my_classobj.setData({
    //   counter: my_classobj.data.counter+1
    // })
    //通过组件方法改变组件数据
    my_classobj.increment(10)
    // console.log("", my_classobj)
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