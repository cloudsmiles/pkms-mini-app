import {out} from './resource.js'

// app.js
App({
  onLaunch: function () {
    //当小程序初始化完成时，会触发onLaunch（全局只触发一次）
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
  globalData: {
    partnerList: out,
  },
})
