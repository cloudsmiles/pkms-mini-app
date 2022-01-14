// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData()
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
    this.getList();
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
    this.getList();
  },
  inputTyping: function (e) {
    //搜索数据
    this.getList(e.detail.value);
    this.setData({
      inputVal: e.detail.value
    });
  },
  initData: function() {
    getApp().globalData.pairList.forEach(function (item, index, array) {
      // Set default picture
      if (array[index].picture === "" || array[index].picture === undefined) {
        array[index].picture = "https://www.hualigs.cn/image/612e7b56331f6.jpg"
      }
    });
    this.setData({
      pairList: getApp().globalData.pairList
    });
  },
   getList: function(inputValue) {
    // 根据输入值匹模糊匹配名称
    if (inputValue !== "" && inputValue !== undefined) {
      let newPairList = [];
       for (let pair of getApp().globalData.pairList) {
         if (pair.name.indexOf(inputValue) !== -1) {
            newPairList.push(pair)
         }
       }
       this.setData({
         pairList: newPairList
       });
    } else {
      this.setData({
        pairList: getApp().globalData.pairList
      });
    }
  },
});