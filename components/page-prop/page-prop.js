// components/page-prop/page-prop.js
Component({
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // title:String
    title: {
      type: String,
      value: "默认标题",
      //观察者
      observer: function(newval, oldval) {
        // console.log("新值", newval)
        // console.log("旧值", oldval)
      }
    },
    content: {
      type: String,
      value: "默认内容",
      //观察者
      observer: function(newval, oldval) {
        // console.log("新值", newval)
        // console.log("旧值", oldval)
      }
    }, 
  },
  // 组件的样式属性
  externalClasses: ['titleClass','contentClass'],
  /**
   * 组件的初始数据
   */
  // data: {

  // },

  /**
   * 组件的方法列表
   */
  // methods: {

  // }
})