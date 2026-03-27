<template>
  <view class="login">
    <image class="img-1" src="@/static/login/1.png" />
    <view class="title">
      <view class="title-p">
        <view class="title-p-text"> PIN </view>
        <image class="img-2" src="@/static/login/1.png" />
      </view>
    </view>
    <view class="title2"> 登录/注册 </view>

    <view class="form">
      <view class="form-item">
        <input class="form-item-input" placeholder="请输入你的手机号码" />
      </view>
      <view class="form-item">
        <input class="form-item-input" placeholder="请输入设置你的密码" />
      </view>
      <view class="form-item agree">
        <checkbox
          value="cb"
          checked="true"
          color="#000000"
          style="transform: scale(0.7)"
        />
        <view class="agree-text">
          我已阅读并同意<view class="agree-text-h"> 用户协议 </view>和<view
            class="agree-text-h"
          >
            隐私政策
          </view>
        </view>
      </view>
      <view class="form-item">
        <view class="form-item-btn" @click="login">
          <image class="img-3" src="@/static/login/3.png" />
          登录并霸占Ta的屏幕
        </view>
      </view>
      <view class="form-item">
        <view class="form-item-one"> 一键登录 </view>
      </view>
      <view class="form-item">
        <view class="form-item-tip">
          为了保证您的信息安全和使用体验 登录后会为你生成专属的邀请码
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
function login() {
  uni.navigateTo({
    url: '/pages/index/index'
  });
}
</script>
<style lang="scss">
page {
  height: 100%;
  width: 100%;
}
</style>
<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background: #18181a;
  position: relative;

  .img-1 {
    position: absolute;
    top: 0;
    right: -20rpx;
    width: 400rpx;
    height: 400rpx;
  }

  .title {
    position: absolute;
    top: 230rpx;
    width: 150rpx;
    height: 150rpx;
    left: 88rpx;

    .title-p {
      width: 100%;
      height: 100%;
      position: relative;

      .img-2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      .title-p-text {
        position: absolute;
        top: 13rpx;
        right: -40rpx;

        width: 100%;
        height: 100%;
        color: #fff;
        text-align: center;
        font-family: 'Paytone One';
        font-size: 36px;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
      }
    }
  }

  .title2 {
    position: absolute;
    top: 380rpx;
    left: 140rpx;
    color: #fff;
    text-align: center;
    font-family: 'PingFang SC';
    font-size: 32rpx;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }

  .form {
    position: absolute;
    top: 484rpx;
    left: 50%;
    transform: translate(-50%, 0rpx);
    width: 622rpx;
    height: auto;

    .form-item {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 40rpx;

      .form-item-input {
        border-radius: 80px;
        background: #262a29;
        width: 100%;
        height: 108rpx;
        flex-shrink: 0;

        .input-placeholder {
          color: rgba(255, 255, 255, 0.5);
          /*text-align: center;*/
          font-family: 'PingFang SC';
          font-size: 28rpx;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          width: 85%;
          position: absolute;
          left: 50% !important;
          top: 50% !important;
          transform: translate(-50%, -50%) !important;
        }

        .uni-input-input {
          width: 85%;
          margin: 0 auto;
          color: white;
          /*background: #262A29;*/
          /*width: 100%;*/
          /*height: 108rpx;*/
        }
      }

      .form-item-btn {
        margin-top: 40rpx;
        width: 100%;
        height: 108rpx;
        border-radius: 80rpx;
        background: linear-gradient(90deg, #c8f677 2.1%, #9aed86 99.87%);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
        text-align: center;
        font-family: 'Abhaya Libre SemiBold';
        font-size: 32rpx;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding-left: 20rpx;

        .img-3 {
          width: 120rpx;
          height: 150rpx;
          position: absolute;
          left: 60rpx;
          top: -45rpx;
          z-index: 1000;
        }
      }

      .form-item-one {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        font-family: 'PingFang SC';
        font-size: 26rpx;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 10rpx;
      }

      .form-item-tip {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: rgba(255, 255, 255, 0.3);
        font-family: 'PingFang SC';
        font-size: 22rpx;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        /* 166.667% */
        white-space: nowrap;
      }
    }

    .agree {
      justify-content: center;

      .agree-text {
        display: flex;
        align-items: center;
        color: rgba(255, 255, 255, 0.25);
        text-align: center;
        font-family: 'PingFang SC';
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        .agree-text-h {
          color: rgba(255, 255, 255, 0.7);
          margin: 0 12rpx;
        }
      }
    }
  }
}
</style>
