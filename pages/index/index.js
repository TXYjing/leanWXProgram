Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr0:["春花","秋月","冷杨"]
  },
  handleconsole() {
    console.log("打印")
  },
  handletouchstart(){
    console.log("手指开始触摸")
  },
  handletouchmove(){
    console.log("触摸移动手势")
  },
  handletouchcancel(){
    console.log("触摸取消手势")
  },
  handletouchend(){
    console.log("触摸结束手势")
  },
  handletap(){
    console.log("轻点手势")
  },
  handlelongtap(){
    console.log("长按手势")
  },
  handleOuter(event){
    console.log('outer---:',event)
  },
  handleInner(event){
    console.log('inner---:',event)
  },
  handleTap0(event){
    console.log("事件参数传递",event)
  },
  handlecaptureview1(event){
    console.log("handlecaptureview1",event)
  },
  handleview1(event){
    console.log("handleview1",event)
  },
  handlecaptureview2(event){
    console.log("handlecaptureview2",event)
  },
  handleview2(event){
    console.log("handleview2",event)
  },
  handlecaptureview3(event){
    console.log("handlecaptureview3",event)
  },
  handleview3(event){
    console.log("handleview3",event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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