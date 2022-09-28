// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  sign() {
    var adapter = wx.getNFCAdapter();
    adapter.startDiscovery(null, (code) => {
      switch (code) {
        case 13000:
          alert("设备不支持NFC！"); break;
        case 13001:
          alert("NFC开关未打开!"); break;
        case 13019:
          alert("用户未授权！"); break;
      }
    }, null);
    adapter.onDiscovered((res) => {

      const device = adapter.getNfcA();

      const db = wx.cloud.database();
      db.collection("records").add({
        data: {
          rfid: device.getAtqa(),
          time: new Date(),
          worker: null  //该如何获取wxid？？？
        }
      })
    })
  }
})