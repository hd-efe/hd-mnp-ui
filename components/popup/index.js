// components/popup/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    align: {
      type: String,
      value: 'top'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    zIndex: 100
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      console.log('show')
    },
    hide() {
      console.log('hide')
    }
  }
})
