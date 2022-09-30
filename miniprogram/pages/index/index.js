
Page({
  data: {
  },
  get_token() {
    return '61_-3-JFvUE4BWd2RTDM0EysOtVH_UsMvxVPNolcLdUOb7erhuOuldeXIy7AcE';
  },

  tomap() {
    // wx.cloud.callFunction({
    //   name: 'getOpenid',
    //   complete: res => {
    //     console.log('云函数获取到的openid: ', res);
    //     wx.setStorageSync('openid', res.result.openId);
    //     console.log(res);}
    //   })
    const openid = this.get_token();
    console.log(openid)
    wx.setStorageSync("openid", openid)
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
            url: '../worker/worker',
          })
      }
    })
  }
})
