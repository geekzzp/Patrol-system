
Page({
  data: {
    self: ""
  },
  tomap () {
    console.log('按钮被按下了');
    wx.getUserProfile({
      
      desc: '',
      success: (res) => {
        const db = wx.cloud.database()

        db.collection('managers').get({
          success: function(managers) {
            console.log(managers)
          }
        })

        db.collection('workers').get({
          success: function(workers) {
            console.log(workers)
          }
        })
      }
    })

    if (self == "manager")
      wx.navigateTo({
        url: '../manager/manager',
      })
      else if (self == "worker")
        wx.navigateTo({
          url: '../worker/worker',
        })
  },
  onShareAppMessage () {
    return {
      title: '快来使用LBS定位小工具',
      imageUrl: '../../asset/logo.png'
    }
  }
})
