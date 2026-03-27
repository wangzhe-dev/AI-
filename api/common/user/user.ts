/*
 * @Description:
 * @Version: V1.0.0
 * @Author: 周艳凯 484894717@qq.com
 * @Date: 2025-02-26 16:43:43
 * @LastEditors: 周艳凯 484894717@qq.com
 * @LastEditTime: 2025-02-26 16:57:10
 * @FilePath: user.ts
 * Copyright 2025 Marvin, All Rights Reserved.
 * 2025-02-26 16:43:43
 */
import request from '@/utils/request'; //导入http下的httpload.js
export function getlist(data: Record<string, any>) {
  // get请求 可以拼接url或者传入数据对象 二选一
  return request.get('/list', { params: data });
}
