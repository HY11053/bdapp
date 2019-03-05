// pages/address/address.js
const md5 = require('../../crypto-js/md5');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    email: '',
    phone: '', picCode: '',
    code: '',
    imgUrl: 'https://fapiao.gaodun.com/sms.php'
  },
  //获取用户输入的用户名
  getCode() {
    let s = (new Date().getTime() + this.rand(100000, 999999)).toString()
    this.setData({
      time: md5(s).toString().toUpperCase()
    })
  },
  getpicCode(e) {
    this.setData({
      picCode: e.detail.value
    })
  },
  getMycode(e) {
    this.setData({
      code: e.detail.value
    })
  },
  send() {
    let d = this.data
    let that = this
    swan.request({
      url: 'https://fapiao.gaodun.com/sms.php',
      method: 'GET',
      data: {
        phone: d.phone,
        act: 'checkCode',
        call: 'callback',
        code: d.picCode,
        openid: this.data.time
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },

      success: function (result) {
        if (result.data.code) {
          swan.showToast({
            title: result.data.msg,
            duration: 2000,
            mask: true,
            icon: 'none'
          })
        } else {
          swan.showToast({
            title: result.data,
            duration: 2000,
            mask: true,
            icon: 'none'
          })
        }
        //         swan.showToast({
        //   title: result.data.msg,
        //   duration: 2000,
        //   mask: true,
        //   icon: 'none'
        // })
        //   console.log(that.data.resultlist)
      }
    })
  },
  //获取用户输入的用户名
  username: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  phone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  email: function (e) {
    this.setData({
      email: e.detail.value
    })
  },

  //搜索机票
  search: function () {
    let d = this.data
    let that = this
    swan.request({
      url: 'https://fapiao.gaodun.com/sms.php',
      method: 'GET',
      data: {
        phone: d.phone,
        act: 'chktel',
        call: 'callback',
        pcode: d.code,
        openid: this.data.time
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },

      success: result => {
        console.log(result)
        if (result.data == 1) {
          swan.request({
            url: 'https://fapiao.gaodun.com/api/batacca/info',
            method: 'POST',
            data: {
              phone: d.phone,
              name: d.username,
              email: d.email
            },
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },

            success: function (result) {
              console.log(result.data)

              if (result.data.code == 200) {
                swan.showToast({
                  title: '提交成功',
                  duration: 2000,
                  mask: true
                })
              } else {
                swan.showToast({
                  title: result.data.msg,
                  duration: 2000,
                  mask: true,
                  icon: 'none'
                })
              }

              //   console.log(that.data.resultlist)
            }
          })
        } else {
          swan.showToast({
            title: result.data,
            duration: 2000,
            mask: true,
            icon: 'none'
          })
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // wx.getStorageSync(phone)
    // console.log(wx.getStorageSync(phone))
    swan.getStorage({
      key: 'orderInfo',
      success: function (res) {
        console.log(res)
        that.setData({
          phone: res.data
        })
      }
    })
    let s = (new Date().getTime() + this.rand(100000, 999999)).toString()
    this.setData({
      time: md5(s).toString().toUpperCase()
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
})
