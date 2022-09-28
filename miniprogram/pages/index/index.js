const app = getApp()
Page({
  data: {
    self: "1"
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  tomap () {
    
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
        
        // const db = wx.cloud.database()

        // db.collection('managers').get({
        //   success: function(managers) {
        //     console.log(managers)
        //   }
        // })

        // db.collection('workers').get({
        //   success: function(workers) {
        //     console.log(workers)
        //   }
        // })
        console.log(res)
        if (this.data.self=="1")
        wx.navigateTo({
          url: '../test/test'
        })
        else if (this.data.self == "manager")
        wx.navigateTo({
          url: '../manager/manager'
        })
        else if (this.data.self == "worker")
        wx.navigateTo({
          url: '../worker/worker'
        })
      }
    })
  },
  onShareAppMessage () {
    return {
      title: '快来使用巡检登记小工具',
      imageUrl: '../../images/top.svg'
    }
  }
})
