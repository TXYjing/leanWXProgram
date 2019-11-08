Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "首页",
    students: [{
        name: "小明",
        age: 3
      },
      {
        name: "小红",
        age: 3
      },
      {
        name: "小花",
        age: 3
      },
      {
        name: "小蔡",
        age: 3
      },
      {
        name: "小狼",
        age: 3
      },
      {
        name: "小草",
        age: 3
      }
    ],
    counter: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  handleCount() {
    var that=this;
    this.setData({
      counter: this.data.counter+1
    })
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

  }
})