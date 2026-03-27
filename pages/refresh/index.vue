<!--
 * @Description: 
 * @Version: V1.0.0
 * @Author: 周艳凯 484894717@qq.com
 * @Date: 2025-02-26 18:35:24
 * @LastEditors: 周艳凯 484894717@qq.com
 * @LastEditTime: 2025-02-27 11:08:26
 * @FilePath: index.vue
 * Copyright 2025 Marvin, All Rights Reserved. 
 * 2025-02-26 18:35:24
-->
<template>
  <view>
    <z-paging
      ref="paging"
      v-model="dataList"
      :show-refresher-when-reload="true"
      :refresher-complete-delay="1000"
      @query="queryList"
    >
      <!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
      <!-- 自定义下拉刷新view -->
      <template #refresher="{ refresherStatus }">
        <!-- 此处的custom-refresh为demo中自定义的组件，非z-paging的内置组件，请在实际项目中自行创建。这里插入什么view，下拉刷新就显示什么view -->
        <custom-refresher :status="refresherStatus" />
      </template>
      <!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
      <view v-for="(item, index) in dataList" :key="index" class="item">
        <view class="item-title"> listItem{{ index }} </view>
      </view>
    </z-paging>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import customRefresher from '@/components/custom-refresher/index.vue';

const paging = ref();
// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
const dataList = ref([]);

// @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用paging.value.reload()即可
const queryList = (pageNo: number, pageSize: number) => {
  // 生成1-5秒随机延迟（含边界值）
  const delay = Math.floor(Math.random() * 4001 + 1000);

  setTimeout(() => {
    console.log(pageNo, pageSize);
    paging.value.complete(
      Array.from({ length: Math.floor(Math.random() * 30) + 1 }, () => ({
        title: Math.floor(Math.random() * 100) + 1
      }))
    );
  }, delay);

  // 此处请求仅为演示，请替换为自己项目中的请求
  // request.queryList({ pageNo,pageSize }).then(res => {
  // 	// 将请求结果通过complete传给z-paging处理，同时也代表请求结束，这一行必须调用
  //     paging.value.complete(res.data.list);
  // }).catch(res => {
  // 	// 如果请求失败写paging.value.complete(false);
  // 	// 注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
  // 	// 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
  // 	paging.value.complete(false);
  // })
};
</script>

<style lang="scss" scoped>
.item {
  align-items: center;
  display: flex;
  min-height: 40px;
  outline: none;
  width: 100%;
  padding: 10px 12px;
  position: relative;
  box-sizing: border-box;
  font-size: 14px;
  color: rgb(0, 0, 0);
}
.item::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  bottom: 0;
  right: 12px;
  left: 12px;
  border-bottom: 1px solid rgb(154, 147, 147);
  transform: scaleY(0.5);
  transition: border 0.25s;
}
</style>
