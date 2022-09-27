// pages/personal/personal.js
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const app = getApp();
Page({
  data: {
    userName: '',
    userNum: '',
    userHead: './user-unlogin.png',
    login: false,
    operation: '登录',
    array: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // console.log(app.id)
    if (app.id != undefined) {
      userInfo.where({
        _id: app.id
      }).get().then(res => {
        // console.log(res)
        // console.log(app.userH)
        app.name = res.data[0].name;
        app.openid = res.data[0]._openid;
        app.qq = res.data[0].qq;
        app.array = res.data[0].society;
        app.socdone = res.data[0].socdone;
        app.office = res.data[0].office;
        app.officedone = res.data[0].officedone;
        this.setData({
          userName: res.data[0].name,
          userNum: res.data[0]._id,
          userHead: app.userH,
          operation: '退出',
          login: true,
        })
      })
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示.

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  defaultLogin: function (e) {
    let login = e.currentTarget.dataset.login;
    if (login === true) {
      // 点击退出
      wx.showToast({
        title: '退出中',
        icon: 'loading'
      })
      app.name = '';
      app.id = '';
      app.openid = '';
      app.qq = '';
      app.array='';
      app.socdone = '';
      app.office = '';
      app.officedone='';
      this.setData({
        userName: '',
        userNum: '',
        userHead: './user-unlogin.png',
        login: false,
        operation: '登录',
      })
      wx.hideToast()
    } else {
      // 点击登录
      wx.navigateTo({
        url: '../stunum/stunum'
      })
      /*
      wx.cloud.callFunction({
        name: 'getOpenid',
        complete: res => {
          // console.log(res.result)
          userInfo.where({
            _openid: res.result.openId
          }).get().then(res => {
            // console.log(res)
            if (res.data.length == 0) {
              wx.showModal({
                title: "提示！",
                content: '您的账号未实名认证',
                showCancel: false,
              })
            } else {
              wx.showToast({
                title: '登录中',
                icon: 'loading'
              })
              app.name = res.data[0].name;
              app.id = res.data[0]._id;
              app.openid = res.data[0]._openid;
              app.qq = res.data[0].qq;
              app.office = res.data[0].office;
              app.officedone = res.data[0].officedone;
              app.array = res.data[0].society;
              app.socdone = res.data[0].socdone;
              this.setData({
                userName: res.data[0].name,
                userNum: res.data[0]._id,
                userHead: app.userH,
                operation: '退出',
                login: true,
              })
              wx.hideToast()
            }
          })
        }
      })
      */
    }
  },
  listFirst: function () {
    // 社团选择
    // console.log(app.array)
    if (!this.data.login) {
      wx.showModal({
        title: "提示！",
        content: '请登录',
        showCancel: false,
      })
    } else if (app.array != undefined) {
      wx.showModal({
        title: "提示！",
        content: '您已申报，即将进入详情页',
        success: res => {
          if (res.confirm) {
            wx.navigateTo({
              url: '../newdetails/newdetails'
            })
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '../details/details'
      })
    }
  },
  office: function () {
    if (!this.data.login) {
      wx.showModal({
        title: "提示！",
        content: '请登录',
        showCancel: false,
      })
    } else if(app.array===undefined){
      wx.showModal({
        title: "提示！",
        content: '请先申报社团再进行职务申报',
        showCancel: false,
      })
    }
    else {
      wx.navigateTo({
        url: '../officer/officer'
      })
    }
  },
  common: function () {
    wx.navigateTo({
      url: '../socnum/socnum'
    })
  },
  getUserInfo: function (result) {
    app.userH = result.detail.userInfo.avatarUrl
    // console.log(app.userH)
  },
  setin: function () {
    wx.cloud.callFunction({
      name: 'getOpenid',
      complete: res => {
        // console.log(res.result)
        userInfo.where({
          _openid: res.result.openId
        }).get().then(res => {
          // console.log(res)
          if (this.data.login) {
            wx.showModal({
              title: "提示！",
              content: '您已登录',
              showCancel: false,
            })
          } else if (res.data.length != 0) {
            wx.showModal({
              title: "提示！",
              content: '您的微信账号已认证，请直接登录',
              showCancel: false,
            })
          } else {
            wx.navigateTo({
              url: '../stunum/stunum'
            })
          }
        })
      }

    })
  },
  result: function () {
    if (this.data.login) {
      wx.navigateTo({
        url: '../result/result'
      })
    } else {
      wx.showModal({
        title: "提示！",
        content: '请登录',
        showCancel: false,
      })
    }
  },
  help: function () {
    wx.navigateTo({
      url: '../help/help'
    })
  },
})