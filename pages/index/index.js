//index.js  
//获取应用实例  
var app = getApp();
Page({
  data: {
    selected: true,
    selected1: false,
    sessionKey: '',
    //movies: [{ url: '../images/banner.png' }, { url: '../images/banner1.jpg' }]
    imgs: [
      "https://m.51xxsp.com/51xxsp/images/133113481.jpg",
      "https://m.51xxsp.com/51xxsp/images/133113481232.jpg",
      "https://m.51xxsp.com/51xxsp/images/1331134812.jpg",
      "https://m.51xxsp.com/51xxsp/images/1331134812.jpg",
      "https://m.51xxsp.com/51xxsp/images/1331134813.jpg"
    ]
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    });
  },
  //品牌列表
  blists:function(){
    swan.navigateTo({
      url: '/pages/blists/blists'
    });
  },
  //文档列表
  nlists:function(){
    swan.navigateTo({
      url: '/pages/nlists/nlists'
    });
  },
  //文档详情
  news:function(){
    swan.navigateTo({
      url: '/pages/news/news'
    });
  },
  /**代理报名 */
  dlbm: function () {

    swan.navigateTo({
      url: '/pages/dlbm/index'
    });
  },
  /**必备资料 */
  bbzl: function () {

    swan.navigateTo({
      url: '/pages/bbzl/index'
    });
  },
  /**课程试听 */
  stkc: function () {

    swan.navigateTo({
      url: '/pages/stkc/index'
    });
  },
  getPhoneNumber2: function (e) {
    console.log(e.detail.errMsg);
    console.log(e.detail.iv);
    console.log(e.detail.encryptedData);
    swan.request({
      url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的接口地址
      method: 'GET',
      dataType: 'json',
      data: {
        key: 'value'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
      },
      fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
      }
    });
    swan.navigateTo({
                        url: '../bbzl/index'
                      });

    // swan.login({
    //   success: res => {
    //     console.log(res.code);
    //     swan.request({
    //       url: 'https://fapiao.gaodun.com/api/acca/user_info',
    //       data: {
    //         // 'encryptedData': encodeURIComponent(e.detail.encryptedData),
    //         // 'iv': e.detail.iv,
    //         'code': res.code
    //       },
    //       method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //       header: {
    //         "Content-Type": "application/x-www-form-urlencoded"
    //       },
    //       success: function (res) {
    //         console.log('key' + res.data.phoneNumber);
    //         console.log('appid' + res.data.openid);
    //         // console.log(res.data.session_key)
    //         // if (res.status == 1) {//我后台设置的返回值为1是正确
    //         //存入缓存即可
    //         // wx.setStorageSync('phone', res.phone);

    //         // }
    //         swan.request({
    //           url: 'https://fapiao.gaodun.com/api/acca/decrypt',
    //           data: {
    //             //  'encryptedData': encodeURIComponent(e.detail.encryptedData),
    //             'encryptedData': e.detail.encryptedData,
    //             'iv': e.detail.iv,
    //             'sessionKey': res.data.session_key,
    //             'openid': res.data.openid
    //           },
    //           method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //           header: {
    //             "Content-Type": "application/x-www-form-urlencoded"
    //           },
    //           success: function (res) {
    //             console.log(res.data);
    //             console.log(JSON.parse(res.data));
    //             var data = JSON.parse(res.data);
    //             console.log(data.phoneNumber);
    //             // if (res.status == 1) {//我后台设置的返回值为1是正确
    //             //存入缓存即可
    //             // wx.setStorage('phone', res.data.phoneNumber);
    //             var orderInfo = data.phoneNumber;
    //             // wx.setStorageSync(phone, res.data.phoneNumber)
    //             // wx.navigateTo({
    //             //             url: '../dlbm/index'
    //             //           })
    //             if (orderInfo == undefined) {
    //               swan.showToast({
    //                 title: '请重新授权',
    //                 icon: 'loading',
    //                 duration: 1000
    //               });
    //             } else {
    //               swan.setStorage({
    //                 key: 'orderInfo',
    //                 data: orderInfo,
    //                 success: function (res) {
    //                   swan.navigateTo({
    //                     url: '../bbzl/index'
    //                   });
    //                 }
    //               });
    //             }
    //           },
    //           fail: function (err) {}
    //         });
    //       },
    //       fail: function (err) {
    //         console.log(err);
    //       }
    //     });
    //   }
    // });
  },
  /**进群学习 */
  jqxx: function () {

    swan.navigateTo({
      url: '/pages/jqxx/index'
    });
  },
  /**教材购买 */
  jcgm: function () {

    swan.navigateTo({
      url: '/pages/jcgm/index'
    });
  },
  /**学前评估 */
  xqkp: function () {

    swan.navigateTo({
      url: '/pages/xqpg/index'
    });
  },
  /**免试查询 */
  mkcx: function () {

    swan.navigateTo({
      url: '/pages/mkcx/index'
    });
  },
  /**报考指南**/
  bkzn: function () {

    swan.navigateTo({
      url: '/pages/bkzn/bkzn'
    });
  },
  /**私播**/
  sibo: function () {

    swan.navigateTo({
      url: '/pages/sibo/sibo'
    });
  },
  /**EP智课 人工智能学习**/
  zhineng: function () {

    swan.navigateTo({
      url: '/pages/ep/ep'
    });
  },
  /**问一问查一查跳转到第三方小程序 */
  appid_tz: function () {
    swan.navigateToSmartProgram({
      appId: 'wxe798424c0caaca13',
      path: 'pages/index/index',
      extraData: {},
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    });
  },

  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    });
  }
});