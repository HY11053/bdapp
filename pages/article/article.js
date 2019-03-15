var app = getApp();
let wxParser = require('../../wxParser/index');
Page({
    data: {
        nodes: [{
            name: 'p',
            attrs: {
                class: 'div_class',
                style: 'line-height: 60px; color: red;'
            },
            children: [{
                type: 'text',
                text: 'Hello&nbsp;World!'
            }]
        }],
    },
    onLoad: function (options) {
        let index=options.index;
        this.setData({id:options.index})

    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面加载的生命周期函数
        var that=this
        console.log(that.data.id)
        //单页文档接口请求
        swan.request({
            url: app.globalData.baseUrl+"getarticle/?id="+that.data.id, //请求地址
            method: 'GET',
            dataType: 'json',
            success: function (res) {
                console.log(res.data);
                that.setData({ thisarticleinfos:res.data });
                console.log(res.data.body)
                let ht=res.data.body;
                wxParser.parse({
                    bind: 'richText',
                    html:ht ,
                    target: that,
                    enablePreviewImage: true, // 禁用图片预览功能
                });
                swan.setPageInfo && swan.setPageInfo({
                    title:that.data.thisarticleinfos.title+app.globalData.baseName,
                    keywords: that.data.thisarticleinfos.keywords,
                    description:that.data.thisarticleinfos.description,
                    articleTitle: that.data.thisarticleinfos.title,
                    releaseDate:that.data.thisarticleinfos.created_at,
                    // 单张图时值可以是字符串
                    image: that.data.thisarticleinfos.litpic,
                    success: function () {
                        console.log(that.data.thisarticleinfos.title);
                        console.log('普通文档页面基础信息设置完成');
                    }
                });
            },
            fail: function (err) {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
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