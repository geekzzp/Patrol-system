// pages/manager1/manager1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const db = wx.cloud.database()
    db.collection("workers").get({
      success: (res) => {
        this.setData({workers: res.data});
      }
    })
  }
})