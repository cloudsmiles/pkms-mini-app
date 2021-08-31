// pages/list/list.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().globalData.partnerList.forEach(function(item, index, array) {
      array[index].picture = "../../image/1.png"
    })
    this.setData(getApp().globalData)
  }
})