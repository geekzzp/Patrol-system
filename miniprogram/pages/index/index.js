
Page({
  data: {
  },

  get_token() {

    return '61_-3-JFvUE4BWd2RTDM0EysOtVH_UsMvxVPNolcLdUOb7erhuOuldeXIy7AcE';
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
  }
})
