<!--
 * @Description: 
 * @Version: V1.0.0
 * @Author: 周艳凯 484894717@qq.com
 * @Date: 2025-02-26 18:35:24
 * @LastEditors: 周艳凯 484894717@qq.com
 * @LastEditTime: 2025-02-28 15:35:11
 * @FilePath: index.vue
 * Copyright 2025 Marvin, All Rights Reserved. 
 * 2025-02-26 18:35:24
-->
<!-- z-paging自定义的下拉刷新view -->
<template>
  <view class="refresher-container">
    <!-- 这里的图片请换成自己项目的图片 -->

    <div
      class="var-pull-refresh__control var-elevation--2"
      style="transform: translate3d(0px, 14px, 0px) translate(-50%)"
    >
      <text
        v-if="status === 'default'"
        class="default iconfont icon-xiangxiajiantoucuxiao"
        style="color: rgb(103, 81, 164)"
      />
      <text
        v-if="status == 'release-to-refresh' || status == 'loading'"
        class="loading iconfont icon-shuaxin"
        style="color: rgb(103, 81, 164)"
        :class="status === 'loading' ? 'var-icon--loading' : ''"
      />
      <text
        v-if="status === 'complete'"
        class="complete iconfont icon-duihao2-copy"
      />
      <!-- <svg
       
        t="1740566820426"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3054"
        width="16"
        height="16"
      >
        <path
          d="M512.2048 1024H512a25.4976 25.4976 0 0 1-18.1248-7.4752L168.0384 690.688a25.6 25.6 0 0 1 36.2496-36.2496l282.112 282.112V25.6a25.6 25.6 0 0 1 51.2 0v911.36l282.5216-282.5216a25.6 25.6 0 1 1 36.1984 36.2496l-325.8368 325.8368a25.4976 25.4976 0 0 1-18.2784 7.4752z"
          fill="rgb(103, 81, 164)"
          p-id="3055"
        ></path>
      </svg> -->
      <!-- <svg
        v-if="status !== 'default'"
        :class="status === 'loading' ? 'var-icon--loading' : ''"
        t="1740567047747"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4055"
        width="16"
        height="16"
      >
        <path
          d="M490.057143 950.857143c-73.142857-7.314286-146.285714-29.257143-204.8-65.828572-102.4-58.514286-168.228571-153.6-197.485714-270.628571-29.257143-109.714286-14.628571-234.057143 51.2-329.142857 124.342857-204.8 394.971429-270.628571 599.771428-146.285714 197.485714 117.028571 263.314286 365.714286 160.914286 570.514285l-65.828572-29.257143c87.771429-168.228571 21.942857-380.342857-138.971428-475.428571C533.942857 95.085714 307.2 146.285714 197.485714 321.828571c-51.2 80.457143-65.828571 182.857143-43.885714 277.942858a351.085714 351.085714 0 0 0 168.228571 226.742857c51.2 29.257143 109.714286 51.2 168.228572 51.2v73.142857z"
          fill="rgb(103, 81, 164)"
          p-id="4056"
        ></path>
        <path
          d="M870.4 775.314286L665.6 665.6l36.571429-65.828571 204.8 109.714285z"
          fill=""
          p-id="4057"
        ></path>
      </svg> -->
    </div>

    <!-- <image
      v-if="status !== 'default'"
      class="refresher-image"
      mode="aspectFit"
      src="@/static/refresher_loading.gif"
    ></image> -->
    <!-- <text class="refresher-text">{{ statusText }}</text> -->
  </view>
</template>

<script setup lang="ts">
defineProps({
  status: {
    type: String,
    default: function () {
      return 'default';
    }
  }
});
</script>

<style scoped>
.refresher-container {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  height: 150rpx;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.refresher-image {
  margin-top: 10rpx;
  height: 45px;
  width: 45px;
}

.refresher-text {
  margin-top: 10rpx;
  font-size: 24rpx;
  color: #666666;
}

.var-pull-refresh__control {
  display: flex;
  width: 80rpx;
  height: 80rpx;
  align-items: center;
  justify-content: center;
  background-color: rgb(254, 247, 255);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  z-index: 90;
  color: rgb(57, 123, 254);
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.default {
  animation: fadeInOut 1s ease-in-out; /* 持续3秒、缓动循环 */
}
.loading {
  animation: fadeInOut 1s ease-in-out; /* 持续3秒、缓动循环 */
}

.complete {
  color: #00c28e;
  animation: fadeInOut 1s ease-in-out; /* 持续3秒、缓动循环 */
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: scale(0.8); /* 初始缩小并透明 */
  }
  100% {
    opacity: 1;
    transform: scale(1); /* 中间完全显示并恢复原始大小 */
  }
}

.var-icon--loading {
  animation: infinite-rotate 1.5s cubic-bezier(0.3, 0.6, 0.2, 1.4) infinite;
  transform-origin: center; /* 确保旋转中心为元素中心 */
}

/* 定义旋转动画 */
@keyframes infinite-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
