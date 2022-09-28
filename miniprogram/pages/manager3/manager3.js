// pages/manager3/manager3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  get_by_date: function(date) {
    const db = wx.cloud.database()
    db.collection('records').where({
                      //如何判断日期？？？
    }).get({
      success: (res) => {
        return res;
      }
    })
  },
  
  
  get_by_person : function(person) {
    const db = wx.cloud.database()
    db.collection('workers').where({
      name: person
    }).get({
      success: (res) => {
        db.collection('records').where({
          worker: res[0]
        }).get({
          success: (records) => {
            return records;
          }
        })
      }
    });
  }
})