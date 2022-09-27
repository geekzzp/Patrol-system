const app = getApp()
Page({
  tomap () {
    
    wx.getUserProfile({
      
      desc: '',
      success: (res) => {
        const db = wx.cloud.database()

        db.collection('managers').get({
          success: function(managers) {
            if (res.cloudID in managers)
              wx.navigateTo({
                url: '../manager/manager'
              })
              else return;
          }
        })

        db.collection('workers').get({
          success: function(workers) {
            if (res.cloudID in workers)
              wx.navigateTo({
                url: '../worker/worker'
              })
              else return;
          }
        })
      }
    })
  },
  onShareAppMessage () {
    return {
      title: '快来使用LBS定位小工具',
      imageUrl: '../../asset/logo.png'
    }
  }
})
