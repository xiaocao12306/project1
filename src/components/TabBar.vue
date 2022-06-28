<template>
  <div class="tabbar">
    <div class="left">
      <div class="tabbar-item text-primary" @click="home">
        <van-icon :name="icons.tabbar.buliding" size="24" />
        <div class="text-sm">物业中心</div>
      </div>
      <div class="tabbar-item text-primary" @click="shop">
        <van-icon :name="icons.tabbar.bag" size="24" />
        <div class="text-sm">商城</div>
      </div>
    </div>
    <!-- 中间悬浮按钮 -->
    <div class="tabbar-item main" @click="main">
      <div class="flower"></div>
      <div class="icon">
        <van-icon :name="icons.tabbar.main" color="white" size="27" />
        <div class="text-sm text-white" style="opacity: 0.8">开门/呼叫</div>
      </div>
      <div class="clear bottom"></div>
    </div>
    <div class="right">
      <div class="tabbar-item text-primary" @click="community">
        <van-icon :name="icons.tabbar.message" size="24" />
        <div class="text-sm">社区</div>
      </div>
      <div class="tabbar-item text-primary" @click="my">
        <van-icon :name="icons.tabbar.user" size="24" />
        <div class="text-sm">个人中心</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { icons } from '../mock'
function home(){
  console.log("home")
}
function shop(){
  console.log("shop")
}
function community(){
  console.log("community")
}
function my(){
  console.log("my")
}
</script>

<style scoped>
.tabbar {
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  left: 0;
  bottom: 0;

  /* padding: 20px; */
  width: 100%;
  background: transparent;
}
.left,
.right {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background: #fff;
  padding: 0 20px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
}
.left{
  border-radius:20px 40px 0 0;
}
.right{
  border-radius:40px 20px 0 0;
}
.tabbar-item {
  text-align: center;
  margin: 20px 0;
}
.tabbar:nth-child(2) .tabbar-item {
  border-radius: 0 20px 0 0;
}

/* 中间的悬浮按钮 */
.main {
  position: relative;
  width: 80px;
  bottom:0;
  margin: 0;
  /* height:100%; */
}
.bottom {
  position: absolute;
  bottom: 0;
  background: #fff;
  height: 40px;
  width: 100%;
}
.icon {
  position: absolute;
  bottom: 0px;
  left: -50%;
  transform: translate(20px,-30px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-image: url(../assets/icons/tabmain_btn/bg.svg);
  background-position: center;
  background-repeat: no-repeat;
  border: 20px solid transparent;
  box-sizing: content-box;
}
.flower {
  position: absolute;
  bottom: -70px;
  width: 90px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100px;
  background: transparent;

  border-radius: 100%;
  /* background:#000; */
  box-sizing:content-box;
  border-bottom: 40px solid white;
  /* box-shadow: inset 0px -4px 6px #dff6f4; */
}
/* .flower::after,
.flower::before {
  content: ' ';
  position: absolute;
  top: 36px;
  right: -20px;
  border-top: 14px solid #f5f5f5;
  background-color: #fff;
  width: 20px;
  height: 20px;
}
.flower::after {
  left: -16px;
  right: unset;
  border-top-right-radius: 100%;
}
.flower::before {
  right: -16px;
  left: unset;
  border-top-left-radius: 100%;
} */
/* 悬浮按钮END */
</style>
