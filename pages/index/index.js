//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scrollViewHeight: 400
  },
  showPopup() {
    let popupComponent = this.selectComponent('.popup')
    popupComponent &&popupComponent.show()
  },
  close() {
    let popupComponent = this.selectComponent('.popup')
    popupComponent &&popupComponent.hide()
  },
  scroll(e) {
  },
  lower() {
    console.log('到底部了')
  },
  onLoad: function () {
    let windowHeight = wx.getSystemInfoSync().windowHeight;
    let windowWidth = wx.getSystemInfoSync().windowWidth;
    let ratio =   750 / windowWidth;
    let height = windowHeight * ratio;
    let scrollViewHeight = height * 0.95 - 160;
    this.setData({
      scrollViewHeight
    })
  },
  getUserInfo: function(e) {}
})
