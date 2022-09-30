// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    userNum: ""
  },

  onLoad(option) {
    const db = wx.cloud.database()
    const openid = wx.getStorageSync("openid")
    db.collection('managers').where({
      wxid: openid
    }).get({
      success: (res) => {
        console.log(res)
        this.setData({
          userName: res.data[0].name,
          userNum: res.data[0].number,
        })
      }
    });
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