
Page({
  data: {
  },

  get_token() {

  },

  tomap() {
    const openid = this.get_token();

    const db = wx.cloud.database()
    db.collection('managers').where({
      wxid: openid
    }).get({
      success: (res) => {
        if (res)
          wx.navigateTo({
            url: '../manager/manager',
          })
      }
    });

    db.collection('workers').where({
      wxid: openid
    }).get({
      success: (res) => {
        if (res)
          wx.navigateTo({
            url: '../worker/worker?name=' + res.data[0].name,
          })
      }
    })

    wx.navigateTo({
      url: '../worker/worker?openid=' + openid,
    })
  }
})
