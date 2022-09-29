// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag: null,
    name: ''
  },

  onLoad(option) {
    this.setData({
      name: option
    })
  },

  sign() {
    const adapter = wx.getNFCAdapter();
    console.log(adapter)
    adapter.startDiscovery();
    adapter.onDiscovered((result) => {
      result.messages.messages.forEach(console.log)
      const device = adapter.getNdef();
      device.connect();
      if (device.isConnected()) {
        device.onNdefMessage((res) => {
          const db = wx.cloud.database();
          db.collection('records').add({
            name: this.name,
            time: new Date(),
            rfid: res.data
          })
        });
      };
    })
  }
})