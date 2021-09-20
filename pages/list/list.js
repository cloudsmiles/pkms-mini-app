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
      // set default picture
      if (array[index].picture == "" || array[index].picture == undefined) {
        array[index].picture = "https://www.hualigs.cn/image/612e7b56331f6.jpg"
      }
    })
    this.setData(getApp().globalData)
  }
})