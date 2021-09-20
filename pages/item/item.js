// pages/item/item.js
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
    let id = options.id
    let selfData = {
      loading: true
    }
    
    getApp().globalData.pairList.forEach(function(item, index, array) {
      if (array[index].id == id) {
        selfData = array[index]
      }
    })

    selfData.loading = false
    // console.log(selfData)
    this.setData(selfData)
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  }
})