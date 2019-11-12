// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"信息",
    a:"哼哈",
    b:"二将",
    age:12,
    today: new Date().toLocaleString(),
    change:false,
    isShow:true,
    score:70,
    obj:{name:"拉拉",age:18},
    movies: ["罗小黑战记", "盗梦空间", "少年的你","哪吒之末世之瞳"],
    arr:[
      [10,11,12,13,14],
      [20,21,22,23,24],
      [30,31,32,33,34]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        today:new Date().toLocaleString()
      })
    },1000)
  },
  changeColor(){
    this.setData({
      change:!this.data.change
    })
  },
  handleShow(){
    this.setData({
      isShow:!this.data.isShow
    })
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