//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    names: null,
    emils: null
  },
  gao_tz: function () {
    swan.navigateTo({
      url: '/pages/gao/gao'
    });
  },
  tz_kf: function () {
    swan.navigateTo({
      url: '/pages/kf/index'
    });
  }

});