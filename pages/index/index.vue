<!--
 * @Description:/
 * @Version: V1.0.0
 * @Author: 周艳凯 484894717@qq.com
 * @Date: 2025-02-26 11:42:02
 * @LastEditors: 周艳凯 484894717@qq.com
 * @LastEditTime: 2025-02-28 14:48:24
 * @FilePath: index.vue
 * Copyright 2025 Marvin, All Rights Reserved. 
 * 2025-02-26 11:42:02
-->
<template>
  <view class="content px-4">
    <image class="logo rounded-xl animate-bounce" src="@/static/logo.png" />
    <view>
      <text class="text-2xl line-through italic text-violet-400">
        tailwindcss </text
      ><text class="pl-2 text-rose-400 text-3xl"> 4.0 </text>
    </view>
    <text
      class="mb-2 p-2 pl-8 pr-8 bg-pink-500 rounded-xl shadow-xl text-base italic text-emerald-50 bg-pink-500"
    >
      pinia: {{ num }}
    </text>
    <view class="mb-2">
      <wd-button @click="handloading"> loading </wd-button>
    </view>
    <view class="mb-2">
      <wd-button type="success" @click="add"> pinia数据测试 </wd-button>
    </view>
    <view class="mb-2">
      <wd-button type="info" @click="https"> http请求 </wd-button>
    </view>
    <view class="mb-2">
      <wd-button type="warning" @click="refresh"> 下拉刷新 </wd-button>
    </view>
    <view class="mb-2">
      <wd-button type="error" @click="go"> 百度图表 </wd-button>
    </view>
    <view class="mb-2">
      <wd-button type="warning" @click="handlogin"> 跳转登录页 </wd-button>
    </view>
    <p>{{ $t('common.hello') }}</p>
    <view class="mb-2">
      <wd-button type="error" @click="handi18n('zh-CN')"> 切换中文 </wd-button>
    </view>
    <view class="mb-2">
      <wd-button type="error" @click="handi18n('en-US')"> 切换英文 </wd-button>
    </view>
    <wd-toast />
    <wd-progress :percentage="100" hide-text status="success" />
    <load v-if="loading" />
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useToast } from 'wot-design-uni';
import { appStore } from '@/stores/modules/app';
import { getlist } from '@/api/common/user/user';
import load from '@/components/loading/index.vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const store = appStore();

const num = computed(() => store.doubleCount);

const toast = useToast();

const loading = ref(false);

function add() {
  store.increment();
}

// http请求
function https() {
  toast.show('正在加载中');
  getlist({ id: 1 }).then((res) => {
    console.log(res, '我无语了');
  });
}

// 下拉刷新
function refresh() {
  uni.navigateTo({
    url: '/pages/refresh/index'
  });
}

// 跳转登录
function handlogin() {
  uni.navigateTo({
    url: '/sub/login/index'
  });
}

function go() {
  //在起始页面跳转到test.vue页面并传递参数
  uni.navigateTo({
    url: '/pages/echarts/index'
  });
}

function handloading() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}

function handi18n(local: string) {
  locale.value = local;
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.adla {
  width: 100%;
  height: 500rpx;
}
</style>
