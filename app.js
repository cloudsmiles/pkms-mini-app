import {
  out
} from './static/resource.js'

// app.js
App({
  onLaunch: function () {
    //当小程序初始化完成时，会触发onLaunch（全局只触发一次）
    this.overShare();
  },
  onShow: function () {
    //当小程序启动，或从后台进入前台显示，会触发onShow
  },
  onHide: function () {
    //当小程序从前台进入后台，会触发onHide
  },
  onError: function (msg) {
    //当小程序发生脚本错误，或者api调用失败时，会触发onError并带上错误信息
  },
  other: function () {
    //全局函数，可以被项目上的其他js文件调用
  },
  onShareAppMessage: function () { //小程序页面方法
  },
  overShare: function () {
    //间接实现全局设置分享内容
    wx.onAppRoute(function (res) {
      //获取加载的页面
      let pages = getCurrentPages(),
        //获取当前页面的对象
        view = pages[pages.length - 1];
      if (view) {
        wx.showShareMenu({
          withShareTicket: true,
          menus: ['shareAppMessage', 'shareTimeline']
        });
      }
    });
  },
  globalData: {
    pairList: out,
  },
});