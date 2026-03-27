App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'luke-agent-dev-7g1nc8tqc2ab76af',
        traceUser: true
      })
    }
  },
  onShareAppMessage() {
    return {
      title: '人话翻译机 - 粘贴话术，一键看穿真相',
      path: '/pages/index/index'
    }
  }
})
