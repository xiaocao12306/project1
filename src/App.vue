<script setup>
import NavBar from './components/NavBar.vue'
import TabBar from './components/TabBar.vue'
import Swiper from './components/Swiper.vue'
import Drag from './components/Drag.vue'
import Qrcode from './components/Qrcode.vue'
import GridCard from './components/GridCard.vue'
import Notice from './components/Notice.vue'
import Todo from './components/Todo.vue'
import Public from './components/Public.vue'
import Help from './components/Help.vue'
import RateCard from './components/RateCard.vue'
import { ref } from 'vue'
import { icons, svericeList, helpList, rate } from './mock'
console.log(svericeList)
ref(svericeList, helpList, rate)
let show = ref(false)
function onscan(){
  show.value = true;
}
function close(){
  show.value = false;
}
</script>

<template>
  <div>
    <NavBar @onscan="onscan" />
    <main class="wrap">
      <Swiper />
      <GridCard />
      <section class="padding">
      
        <!-- 社区公告 -->
        <Notice />
        <!-- 待办 -->
        <Todo />

        <!-- 物业服务公示 -->
        <Public />

        <!-- 社区办事流程 -->
        <Help />

        <!-- 服务评价 -->
        <RateCard />
      </section>
    </main>
    <TabBar />
    <Drag />
    <van-popup 
      :show="show" 
      position="center" 
      :style="{ height: '70%',width:'80%' }" 
      @click-overlay="close" 
      class="radius">
      <Qrcode />
      </van-popup>
  </div>
</template>

<style>
@import url('./assets/style/global.css');
#app {
  background-color: #f5f5f5;
  height: 100vh;
}
.wrap {
  height: 100vh;
  overflow: auto;
  padding-bottom: 140px;
  background-color: #f5f5f5;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.card-header {
  display: flex;
  justify-content: space-between;
}
.card-header .title {
  display: flex;
  align-items: center;
}
.card-header .right {
  display: flex;
  align-items: center;
}
p {
  font-size: 14px;
  color: #535c68;
}
</style>
