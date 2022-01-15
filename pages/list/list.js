// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allList: [],
    pairList: [],
    inputVal: "",
    inputShowed: false,
    totalNum: 0,
    page: 0,
  },

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
  initData: function () {
    getApp().globalData.pairList.forEach(function (item, index, array) {
      // Set default picture
      if (array[index].picture == "" || array[index].picture == undefined) {
        array[index].picture = "https://www.hualigs.cn/image/612e7b56331f6.jpg"
      }
    })
    this.setData({
      allList: getApp().globalData.pairList,
      pairList: getApp().globalData.pairList.slice(0, 10),
      totalNum: getApp().globalData.pairList.length,
      page: 1,
    })
  },
  binbottom:function(e){
    if (this.data.pairList.length === this.data.totalNum) {
      return 
    } else{
      //我们重复之前的数据
      let startNum, lastNum
      let that = this
      that.data.page++
      lastNum = that.data.page*10
      startNum = (that.data.page-1)*10

      console.log(startNum, lastNum);
      this.data.pairList = this.data.pairList.concat(that.data.allList.slice(startNum, lastNum));
      this.setData({
       pairList: that.data.pairList,
       page: that.data.page,
      })
    }
  },
  getList: function (inputValue) {
    // 根据输入值匹模糊匹配名称
    if (inputValue != "" && inputValue != undefined) {
      let newPairList = []
      for (let pair of getApp().globalData.pairList) {
        if (pair.name.indexOf(inputValue) != -1) {
          newPairList.push(pair)
        }
      }
      this.setData({
        allList: newPairList,
        pairList: newPairList.slice(0, 10),
        totalNum: newPairList.length,
        page: 1,
      })
    } else {
      this.setData({
        allList: getApp().globalData.pairList,
        pairList: getApp().globalData.pairList.slice(0, 10),
        totalNum: getApp().globalData.pairList.length,
        page: 1,
      })
    }
  }
})