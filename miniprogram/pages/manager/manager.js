// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    userHead: ""
  },

  onLoad(option) {
    console.log(option)
    this.userName = option.name
  },

  tomanager1(){
    wx.navigateTo({
      url: '../manager1/manager1'
    })
  },
  tomanager2(){
    wx.navigateTo({
      url: '../manager2/manager2'
    })
  },
  tomanager3(){
    wx.navigateTo({
      url: '../manager3/manager3'
    })
  },
  tomanager4(){
    wx.navigateTo({
      url: '../manager4/manager4'
    })
  }
})