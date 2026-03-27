<template>
  <view class="content">
    <view style="width: 100%; height: 750rpx">
      <ehcartss ref="chart1" class="adla" />
    </view>
  </view>
</template>

<script setup lang="ts">
/* eslint-disable */
import { onMounted, ref } from 'vue';
import ehcartss from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue';
// #ifdef VUE3
// #ifdef MP
// 由于vue3 使用vite 不支持umd格式的包，小程序依然可以使用，但需要使用require
const echarts = require('../../uni_modules/lime-echart/static/echarts.min');
// #endif
// #ifndef MP
// 由于 vue3 使用vite 不支持umd格式的包，故引入npm的包

import * as echarts from 'echarts';
// #endif
// #endif

const chart1 = ref();

onMounted(() => {
  let base = +new Date(1968, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let date = [];

  let data = [Math.random() * 300];

  for (let i = 1; i < 20000; i++) {
    let now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }

  const option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10
      },
      {
        start: 0,
        end: 10
      }
    ],
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 158, 68)'
            },
            {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }
          ])
        },
        data: data
      }
    ]
  };

  // 组件能被调用必须是组件的节点已经被渲染到页面上
  setTimeout(async () => {
    if (!chart1.value) return;
    const myChart = await chart1.value?.init(echarts);
    myChart.showLoading();
    myChart.setOption(option);
    setTimeout(() => {
      myChart.hideLoading();
    }, 1000);
  }, 300);
});
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
