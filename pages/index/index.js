//获取应用实例
var app = getApp();
Page({
  data: {
    imgs: [
      "https://m.51xxsp.com/51xxsp/images/133113481.jpg",
      "https://m.51xxsp.com/51xxsp/images/133113481232.jpg",
      "https://m.51xxsp.com/51xxsp/images/1331134812.jpg",
      "https://m.51xxsp.com/51xxsp/images/1331134812.jpg",
      "https://m.51xxsp.com/51xxsp/images/1331134813.jpg"
    ],
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
  },
    onLoad: function () {
        // 监听页面加载的生命周期函数
        swan.setPageInfo && swan.setPageInfo({
            title: '晒元宵节活动红包，爱奇艺60张年卡、600张季卡等你拿！-百度贴吧',
            keywords: '百度,百度贴吧,好运中国年,60,晒元,宵节',
            description: '晒元宵节活动红包，爱..昨天的百度APP元宵节活动中，共发出2亿现金红包、含151万个手气现金大奖和240辆红旗轿车，谁是好运锦鲤，快来分享！马上惊喜升级~摇中红包的锦鲤们即刻晒出红包金额截图，我们将会抽取660位好运锦鲤',
            articleTitle: '晒元宵节活动红包，爱奇艺60张年卡、600张季卡等你拿！',
            releaseDate: '2019-01-02 12:01:30',
            // 单张图时值可以是字符串
            image: this.data.imgs,
            success: function () {
                console.log('页面基础信息设置完成');
            }
        });
        this.requestApi('app');
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    //请求功能函数
    requestApi:function(api)
    {
        swan.request({
            url: api, // 仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'POST',
            dataType: 'json',
            success: function (res) {
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    },
});
