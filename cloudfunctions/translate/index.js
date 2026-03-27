const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

exports.main = async (event) => {
  const { text, sceneId, systemPrompt } = event

  // 参数校验
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return { success: false, error: '请输入需要翻译的文本' }
  }
  if (text.length > 500) {
    return { success: false, error: '文本不能超过500字' }
  }

  try {
    // 调用腾讯混元大模型
    const ai = cloud.getAI()
    const res = await ai.createCompletion({
      model: 'hunyuan-lite',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: text }
      ],
      temperature: 0.8,
      max_tokens: 2000
    })

    // 提取回复内容
    let content = ''
    if (res && res.choices && res.choices[0]) {
      content = res.choices[0].message.content || ''
    }

    // 解析JSON（容错处理）
    let parsed
    try {
      // 去除可能的 ```json ``` 包裹
      let jsonStr = content.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim()
      // 尝试匹配花括号内容
      const match = jsonStr.match(/\{[\s\S]*\}/)
      if (match) {
        jsonStr = match[0]
      }
      parsed = JSON.parse(jsonStr)
    } catch (e) {
      console.error('JSON解析失败，原始内容：', content)
      return { success: false, error: 'AI 返回格式异常，请再试一次' }
    }

    // 校验返回结构
    if (!parsed.humanText || parsed.score === undefined || !parsed.breakdown) {
      return { success: false, error: 'AI 返回内容不完整，请再试一次' }
    }

    // score 范围校验
    parsed.score = Math.max(0, Math.min(100, Math.round(Number(parsed.score) || 0)))

    // 确保 verdict 存在
    if (!parsed.verdict) {
      if (parsed.score >= 90) parsed.verdict = '整容级'
      else if (parsed.score >= 75) parsed.verdict = '重度浓妆'
      else if (parsed.score >= 55) parsed.verdict = '中度美颜'
      else if (parsed.score >= 30) parsed.verdict = '轻度滤镜'
      else parsed.verdict = '素颜'
    }

    return { success: true, data: parsed }
  } catch (err) {
    console.error('云函数执行失败：', err)
    return { success: false, error: '翻译服务暂时不可用，请稍后重试' }
  }
}
