const scenes = [
  {
    id: 'work',
    icon: '💼',
    label: '职场黑话',
    placeholder: '例：我们需要拉齐认知颗粒度，赋能前线业务…'
  },
  {
    id: 'house',
    icon: '🏠',
    label: '中介话术',
    placeholder: '例：精装修拎包入住，采光好，业主诚心出售…'
  },
  {
    id: 'date',
    icon: '💕',
    label: '相亲潜台词',
    placeholder: '例：我这个人比较简单，不太看重物质条件…'
  },
  {
    id: 'client',
    icon: '🎨',
    label: '甲方需求',
    placeholder: '例：大气一点，高端一点，你先出几版看看…'
  },
  {
    id: 'hr',
    icon: '📄',
    label: 'HR话术',
    placeholder: '例：弹性工作制，有竞争力的薪资，拥抱变化…'
  },
  {
    id: 'reverse',
    icon: '✨',
    label: '反向上妆',
    placeholder: '例：这周啥也没干，就开了几个会…'
  }
]

const systemPrompts = {
  work: `你是一个毒舌职场翻译官。用户会给你一段职场黑话/话术，你需要：
1. 把它翻译成大白话（要有幽默感和毒舌感，不能太正经）
2. 给出妆感浓度分数（0-100）：纯黑话90+，半黑话60-80，基本说人话30以下
3. 给出诊断词：整容级/重度浓妆/中度美颜/轻度滤镜/素颜
4. 逐句拆解每个术语

严格返回JSON格式，不要有其他内容：
{"humanText":"翻译后的大白话","score":87,"verdict":"重度浓妆","breakdown":[{"from":"原文术语","to":"大白话含义"}]}`,

  house: `你是一个毒舌房产翻译官。用户会给你一段中介话术，你需要：
1. 把它翻译成大白话（要有幽默感和毒舌感，揭露中介的套路）
2. 给出妆感浓度分数（0-100）：纯套路90+，半套路60-80，比较实在30以下
3. 给出诊断词：整容级/重度浓妆/中度美颜/轻度滤镜/素颜
4. 逐句拆解每个话术点

严格返回JSON格式，不要有其他内容：
{"humanText":"翻译后的大白话","score":87,"verdict":"重度浓妆","breakdown":[{"from":"原文术语","to":"大白话含义"}]}`,

  date: `你是一个毒舌相亲翻译官。用户会给你一段相亲中的话术/潜台词，你需要：
1. 把它翻译成大白话（要有幽默感和毒舌感，揭露相亲套路和潜台词）
2. 给出妆感浓度分数（0-100）：纯套路90+，半套路60-80，比较真诚30以下
3. 给出诊断词：整容级/重度浓妆/中度美颜/轻度滤镜/素颜
4. 逐句拆解每个潜台词

严格返回JSON格式，不要有其他内容：
{"humanText":"翻译后的大白话","score":87,"verdict":"重度浓妆","breakdown":[{"from":"原文术语","to":"大白话含义"}]}`,

  client: `你是一个毒舌甲方需求翻译官。用户会给你一段甲方的需求描述，你需要：
1. 把它翻译成大白话（要有幽默感和毒舌感，揭露甲方的真实想法）
2. 给出妆感浓度分数（0-100）：纯忽悠90+，半忽悠60-80，比较明确30以下
3. 给出诊断词：整容级/重度浓妆/中度美颜/轻度滤镜/素颜
4. 逐句拆解每个需求点

严格返回JSON格式，不要有其他内容：
{"humanText":"翻译后的大白话","score":87,"verdict":"重度浓妆","breakdown":[{"from":"原文术语","to":"大白话含义"}]}`,

  hr: `你是一个毒舌HR话术翻译官。用户会给你一段HR的话术/招聘描述，你需要：
1. 把它翻译成大白话（要有幽默感和毒舌感，揭露HR话术背后的真相）
2. 给出妆感浓度分数（0-100）：纯画饼90+，半画饼60-80，比较实在30以下
3. 给出诊断词：整容级/重度浓妆/中度美颜/轻度滤镜/素颜
4. 逐句拆解每个话术点

严格返回JSON格式，不要有其他内容：
{"humanText":"翻译后的大白话","score":87,"verdict":"重度浓妆","breakdown":[{"from":"原文术语","to":"大白话含义"}]}`,

  reverse: `你是一个反向上妆大师。用户会给你一段大白话/朴素描述，你需要：
1. 把它翻译成高大上的话术版本（要有包装感，把平淡的事情说得高端大气上档次）
2. 给出上妆浓度分数（0-100）：表示你包装的程度
3. 给出诊断词：整容级/重度浓妆/中度美颜/轻度滤镜/素颜
4. 逐句拆解，展示每句大白话被包装成了什么

严格返回JSON格式，不要有其他内容：
{"humanText":"上妆后的高大上版本","score":87,"verdict":"重度浓妆","breakdown":[{"from":"大白话原文","to":"上妆后话术"}]}`
}

Page({
  data: {
    statusBarHeight: 44,
    scenes: scenes,
    currentScene: 'work',
    currentPlaceholder: scenes[0].placeholder,
    inputText: '',
    inputFocused: false,
    isLoading: false,
    loadingLayers: 3,
    result: null,
    showResult: false,
    animatedScore: 0
  },

  onLoad() {
    const sysInfo = wx.getWindowInfo()
    this.setData({
      statusBarHeight: sysInfo.statusBarHeight || 44
    })
  },

  onShareAppMessage() {
    const score = this.data.result ? this.data.result.score : '??'
    return {
      title: `这段话的妆感浓度居然有${score}%！`,
      path: '/pages/index/index'
    }
  },

  // 场景切换
  onSceneChange(e) {
    const id = e.currentTarget.dataset.id
    const scene = scenes.find(s => s.id === id)
    this.setData({
      currentScene: id,
      currentPlaceholder: scene.placeholder
    })
  },

  // 输入相关
  onInput(e) {
    this.setData({ inputText: e.detail.value })
  },

  onFocus() {
    this.setData({ inputFocused: true })
  },

  onBlur() {
    this.setData({ inputFocused: false })
  },

  // 粘贴
  onPaste() {
    wx.getClipboardData({
      success: (res) => {
        const text = (res.data || '').slice(0, 500)
        this.setData({ inputText: text })
      },
      fail: () => {
        wx.showToast({ title: '读取剪贴板失败', icon: 'none' })
      }
    })
  },

  // 翻译
  onTranslate() {
    if (!this.data.inputText || this.data.isLoading) return

    const layers = Math.max(3, Math.floor(this.data.inputText.length / 10))
    this.setData({
      isLoading: true,
      loadingLayers: layers,
      result: null,
      showResult: false,
      animatedScore: 0
    })

    wx.cloud.callFunction({
      name: 'translate',
      data: {
        text: this.data.inputText,
        sceneId: this.data.currentScene,
        systemPrompt: systemPrompts[this.data.currentScene]
      },
      success: (res) => {
        if (res.result && res.result.success) {
          const result = res.result.data
          this.setData({
            isLoading: false,
            result: result,
            showResult: true
          })
          // 进度条动画：延迟后设置分数
          setTimeout(() => {
            this.setData({ animatedScore: result.score })
          }, 100)
        } else {
          this.setData({ isLoading: false })
          wx.showToast({
            title: (res.result && res.result.error) || '翻译失败，请重试',
            icon: 'none'
          })
        }
      },
      fail: (err) => {
        console.error('云函数调用失败：', err)
        this.setData({ isLoading: false })
        wx.showToast({ title: '网络异常，请重试', icon: 'none' })
      }
    })
  },

  // 复制结果
  onCopy() {
    if (!this.data.result) return
    const r = this.data.result
    const text = `【人话翻译机】\n原文：${this.data.inputText}\n人话：${r.humanText}\n妆感浓度：${r.score}%`
    wx.setClipboardData({
      data: text,
      success: () => {
        wx.showToast({ title: '已复制', icon: 'success' })
      }
    })
  },

  // 分享
  onShare() {
    // 触发转发菜单
  },

  // 再译一条
  onRetranslate() {
    this.setData({
      inputText: '',
      result: null,
      showResult: false,
      animatedScore: 0
    })
    wx.pageScrollTo({ scrollTop: 0, duration: 300 })
  }
})
