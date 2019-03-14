var app = getApp();
Page({
    data: {
        imgs: [
            "https://m.51xxsp.com/51xxsp/images/133113481.jpg",
            "https://m.51xxsp.com/51xxsp/images/133113481232.jpg",
            "https://m.51xxsp.com/51xxsp/images/1331134812.jpg",
            "https://m.51xxsp.com/51xxsp/images/1331134812.jpg",
            "https://m.51xxsp.com/51xxsp/images/1331134813.jpg"
        ]
    },
    onLoad: function (options) {
        // 监听页面加载的生命周期函数
        let index=options.index;
        var that=this
        //精品推荐
        swan.request({
            url: app.globalData.baseUrl+"brandarticles/?take=4&orderby=click", //请求地址
            method: 'GET',
            dataType: 'json',
            success: function (res) {
                that.setData({ thisarticleinfos:res.data });
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });

    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
        var that=this
        console.log(that.data.thisarticleinfos);
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
    }
});