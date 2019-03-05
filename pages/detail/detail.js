Page({
  data: {
    // text:"这是一个页面"
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:' + e.detail.errMsg);
  }
});