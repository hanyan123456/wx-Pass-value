// pages/home/index.js
const interfaces = require('../../utils/http.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logos:[
      {
        id: 1,
        name: '应季鲜果',
        count: 1
      }, {
        id: 2,
        name: '精致糕点',
        count: 6
      }, {
        id: 3,
        name: '全球美食烘培原料',
        count: 12
      }, {
        id: 4,
        name: '无辣不欢生猛海鲜',
        count: 5
      }
    ]
  },
  jumpPage: function (e) {
    // console.log(e.currentTarget.dataset.id)
    // console.log(e)
    // let homeId = e.currentTarget.dataset.id
      let homeId = e.currentTarget.dataset.name
    wx.navigateTo({
      url: '/pages/detail/index?name=' + homeId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   const that=this
   wx.showLoading({
     title: 'loading...',
   })
  //  wx.request({
  //    url: interfaces.homepage,
  //    header:{
  //      'content-type': 'application/json'
  //    },
  //    success(res){
  //      console.log(res)
  //      that.setData({
  //        logos: res.data.logos,
  //      })
      
  //    }
  //  })
    wx.hideLoading()
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})