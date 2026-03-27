<!--
 * @Description: 
 * @Version: V1.0.0
 * @Author: 周艳凯 484894717@qq.com
 * @Date: 2025-02-28 10:51:11
 * @LastEditors: 周艳凯 484894717@qq.com
 * @LastEditTime: 2025-02-28 14:53:15
 * @FilePath: index.vue
 * Copyright 2025 Marvin, All Rights Reserved. 
 * 2025-02-28 10:51:11
-->
<template>
  <div class="contain h-full flex flex-col">
    <div class="content flex-1">
      <home v-if="tabbar === 'home'" />
      <!-- <wode v-if="tabbar === 'user'"></wode> -->
      <poput v-if="tabbar === 'poput'" />
      <user v-if="tabbar === 'user'" />
    </div>
    <div class="tabbar">
      <wd-tabbar
        v-model="tabbar"
        shape="round"
        fixed
        bordered
        safe-area-inset-bottom
        placeholder
      >
        <wd-tabbar-item
          title="首页"
          is-dot
          name="home"
          :value="1"
          icon="home"
        />
        <wd-tabbar-item title="分类" :value="2" name="wode" icon="cart" />
        <wd-tabbar-item title="相册" :value="3" name="poput" icon="photo" />
        <wd-tabbar-item title="我的" :value="4" name="user" icon="user" />
      </wd-tabbar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import home from '../index/index.vue'; //首页
// import wode from '../wode/index.vue'; //首页
import poput from '../poput/index.vue';
import user from '../user/index.vue'; //我的页面
// import { useRoute } from 'uni-mini-router';
// const router = useRoute();
const tabbar = ref('home');

onMounted(() => {
  // console.log(router, '我回去到mounted了');
});
</script>

<style lang="scss" scoped>
:deep(.wd-tabbar) {
  z-index: 10 !important;
  // box-sizing: content-box;
  padding-top: 10rpx;
  /* stylelint-disable-next-line selector-class-pattern */
  // .wd-badge__content {
  //     border: none !important;
  // }
  .wd-badge__content {
    box-sizing: content-box;
    border: none !important;
  }
}
</style>
