// pages/manager3/manager3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: []
  },
  onLoad () {
    const db = wx.cloud.database()
    db.collection('records').get({
      success: (res) => {
        this.setData({records: res.data})
        console.log(res.data)
      }
    })
  }

})