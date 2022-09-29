// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag: null
  },

  get_nfc() {
    const adapter = wx.getNFCAdapter();
    console.log(adapter)
    adapter.startDiscovery();
    adapter.onDiscovered((result) => {
      result.messages.messages.forEach(console.log)
    })
  },

  sign() {
    this.get_nfc();
  }
})