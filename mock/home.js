var Mock=require('./WxMock.js')
/**轮播图接口 */
// console.log("Mock",Mock)
var Random = Mock.Random;
var imageArr=[];
for(var i=0;i<=5;i++){
  imageArr.push(Random.image('200x100', Random.color(), "轮播图"))
}
/**视频列表接口 */
var videoListArr=[];
for(var i=0;i<=30;i++){
  var _obj=new Object();
  _obj.id=Mock.mock({"number|1-100":100});
  _obj.link="";
  _obj.imgSrc = Random.image('200x150', Random.color(), "广告图")
  _obj.desc = Random.cparagraph(1);
  _obj.playCount=Mock.mock({"number|10-100":10})
  _obj.commentCount=Mock.mock({"number|1000-10000":1000})
  _obj.videoSrc=Random.image('200X150',Random.color(),"视频")

  videoListArr.push(_obj)
}

/**菜单栏获取接口 */
var navList = Mock.mock('https://tangxinyu.com/navList',{
  "codeText":"请求成功",
  "code":200,
  "data":{
    navList:["首页","动画","番剧","国创","音乐","舞蹈","科技","游戏","娱乐","鬼畜","电影","电视剧"]
  }
});
/**轮播图获取接口 */
var swiperList = Mock.mock('https://tangxinyu.com/swiperList',{
  "codeText": "请求成功",
  "code": 200,
  "data": {
    swiperList: imageArr
  }
})
/**视频列表获取接口 */
var videoList = Mock.mock('https://tangxinyu.com/videoList', {
  "codeText": "请求成功",
  "code": 200,
  "data": {
    videoList: videoListArr
  }
})

/**视频详情获取接口 */
var videoDetail = Mock.mock('https://tangxinyu.com/videoDetail',{
  "codeText": "请求成功",
  "code": 200,
  "data": {
    videoInfo: {
      author:"阿兰若",
      commentcount:12435,
      date:"2019-11-07",
      id:233,
      playCount:"24.7万",
      videoSrc:Random.image('200X150',Random.color(),"视频详情"),
      videoTitle:"世界上最美的童话镇，你要去看吗？请带我……"
    }
  }
})
export default {
  navList,
  swiperList,
  videoList,
  videoDetail
}

