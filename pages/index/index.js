import request from '../../utils/network.js';
import '../../mock/home.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //使用封装的request发送网络请求
    //promise最大的优点是：防止多次请求的时候出现那回调地狱
    request({
      url: "http://httpbin.org/get"
      // url:"https://tangxinyu.com/navList"
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

  handleshow(){
    wx.showToast({
      title: '你再点我试试',
      icon:"loading",
      // content:"内容.jpg",
      success:function(res){
        console.log('res---:',res)
      }
      
    })
  },
  handleshowmodal(){
    wx.showModal({
      title: 'Modal',
      // icon:"loading",
      content:"内容.jpg",
      success:function(res){
        console.log('res---:',res)
      }
      
    })
  },
  handleshowload(){
    wx.showLoading({
      title: '加载中……',
      // icon:"loading",
      // content:"内容.jpg",
      success:function(res){
        console.log('res---:',res)
      }
      
    })
    setTimeout(()=>{
      wx.hideLoading()
    },1000)
  },
  
  handleshowsheet(){
    wx.showActionSheet({
      itemList: ["拍照","收藏","分享"],
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
  onShareAppMessage: function(options) {
    console.log('options',options)
    return({
      title:"给你分享图片",
      path:"",   imageUrl:"https://p0.meituan.net/wedding/252bf193b5353177d9d65366acca3cc5333988.jpg%40800w_600h_0e_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
    })
  }
})