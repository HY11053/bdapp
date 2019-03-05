// pages/address/address.js
const md5 = require('../../crypto-js/md5');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ids: 1,
    idd: 1,
    idf: 1,
    id: 1,
    name: '初中',
    username: '',
    education: '高中',
    identity: '在校学生',
    major: '财经相关',
    phone: '',
    picCode: '',
    code: '',
    imgUrl: 'https://fapiao.gaodun.com/sms.php'
  },
  //获取用户输入的用户名
  username: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
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
  phone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  changeOil: function (e) {
    console.log(e)
    this.setData({
      id: e.currentTarget.dataset.id,
      name: e.currentTarget.dataset.name
    })
  },
  changeeducation: function (e) {
    console.log(e)
    this.setData({
      idf: e.currentTarget.dataset.idf,
      education: e.currentTarget.dataset.education
    })
  },
  changeidentity: function (e) {
    console.log(e)
    this.setData({
      ids: e.currentTarget.dataset.ids,
      identity: e.currentTarget.dataset.identity
    })
  },
  changemajor: function (e) {
    console.log(e)
    this.setData({
      idd: e.currentTarget.dataset.idd,
      major: e.currentTarget.dataset.name
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
        if (result.data == 1) {
          swan.request({
            url: 'https://fapiao.gaodun.com/api/batacca/assess',
            method: 'POST',
            data: {
              phone: d.phone,
              name: d.username,
              identity: d.identity,
              education: d.education,
              major: d.major,
              english: d.name
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let s = (new Date().getTime() + this.rand(100000, 999999)).toString()
    this.setData({
      time: md5(s).toString().toUpperCase()
    })
  },
  rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


  },

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
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
})
