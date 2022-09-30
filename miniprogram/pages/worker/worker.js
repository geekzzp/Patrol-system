// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: ''
  },

  onLoad(option) {
    const db = wx.cloud.database()
    db.collection('workers').where({
      wxid: wx.getStorageSync('openid')
    }).get({
      success: (res) => {
        this.setData({userName: res.data[0].name})
      }
    })


    const adapter = wx.getNFCAdapter()
    adapter.startDiscovery();
    adapter.onDiscovered((result) => {
      const device = adapter.getMifareClassic()
      console.log("device");
      device.connect({
        success: () => {
          console.log(device.getMaxTransceiveLength())
        },
        fail: () => {
          console.log("failed");
        },
        complete: () => {
          console.log(device)
        }
      })
    })
  }
})