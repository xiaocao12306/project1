<script setup>
import NavBar from './components/NavBar.vue'
import TabBar from './components/TabBar.vue'
import Swiper from './components/Swiper.vue'
import Drag from './components/Drag.vue'
import Qrcode from './components/Qrcode.vue'
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
      <div class="navigators shadow-md padding">
        <van-grid :border="false">
          <van-grid-item :icon="icons.gridIcon.gridIcon8" text="访客邀约" />
          <van-grid-item :icon="icons.gridIcon.gridIcon1" text="智能门禁" />
          <van-grid-item :icon="icons.gridIcon.gridIcon6" text="报事报修" />
          <van-grid-item :icon="icons.gridIcon.gridIcon7" text="投诉建议" />
          <van-grid-item :icon="icons.gridIcon.gridIcon2" text="社区留言板" />
          <van-grid-item :icon="icons.gridIcon.gridIcon3" text="物业缴费" />
          <van-grid-item :icon="icons.gridIcon.gridIcon5" text="街道直通车" />
          <van-grid-item :icon="icons.gridIcon.gridIcon4" text="更多" />
        </van-grid>
      </div>
      <section class="padding">
        <!-- 公告 -->
        <section class="notices radius shadow-md">
          <header>
            <div class="title">
              <van-icon :name="icons.cardIcon.box" size="24" />
              <h3 style="margin-left: 8px">社区公告早知道</h3>
            </div>
            <a class="right text-light text-sm">
              更多<van-icon
                name="https://pic-xiaocao123-1304191709.cos.ap-guangzhou.myqcloud.com/more.svg"
                style="margin-left: 4px"
              />
            </a>
          </header>
          <ul class="notice-list">
            <li class="notice-item">
              <p>
                关于今晚<span class="text-yellow">19</span>点到<span
                  class="text-yellow"
                  >21</span
                >点停水通知！
              </p>
              <p class="text-light time">2021-11-18</p>
            </li>
            <li class="notice-item">
              <p>
                本社区将于<span class="text-yellow">9</span>月<span
                  class="text-yellow"
                  >18</span
                >日晚举行<span class="text-yellow">社区中秋晚会！</span>
              </p>
              <p class="text-light time">2021-11-18</p>
            </li>
          </ul>
        </section>

        <!-- 待办 -->
        <ul class="todo-list margin-top">
          <li class="todo-list_item shadow-md radius">
            <header>
              <van-icon name="ellipsis" color="#126156" size="20" />
            </header>
            <main>
              <van-icon :name="icons.todoIcon.todo" color="#4b5cc4" size="54" />
              <span class="text-lg" style="color: #4b5cc4">0</span>
              <p style="color: #4b5cc4">我的待办</p>
            </main>
          </li>
          <li class="todo-list_item shadow-md radius">
            <header>
              <van-icon name="ellipsis" color="#126156" size="20" />
            </header>
            <main>
              <van-icon :name="icons.todoIcon.fix" color="#5cc2ad" size="54" />
              <span class="text-lg" style="color: #5cc2ad">1</span>
              <p style="color: #5cc2ad">我的报修</p>
            </main>
          </li>
          <li class="todo-list_item shadow-md radius">
            <header>
              <van-icon name="ellipsis" color="#126156" size="20" />
            </header>
            <main>
              <van-icon
                :name="icons.todoIcon.things"
                color="#ff9800"
                size="54"
              />
              <span class="text-lg" style="color: #ff9800">3</span>
              <p style="color: #ff9800">我的事项</p>
            </main>
          </li>
          <li class="todo-list_item shadow-md radius">
            <header>
              <van-icon name="ellipsis" color="#126156" size="20" />
            </header>
            <main>
              <van-icon
                :name="icons.todoIcon.complaints"
                color="#eb5757"
                size="54"
              />
              <span class="text-lg" style="color: #eb5757">2</span>
              <p style="color: #eb5757">我的投诉</p>
            </main>
          </li>
        </ul>

        <!-- 物业服务公示 -->
        <section class="sverice radius shadow-md">
          <header class="text-white">
            <div class="title">
              <van-icon :name="icons.cardIcon.notification" size="24" />
              <h3 style="margin-left: 8px">本月物业服务公示</h3>
            </div>
            <a class="right">
              <van-icon name="arrow" style="margin-left: 4px" />
            </a>
          </header>
          <ul class="sverice-list">
            <li v-for="(item, index) in svericeList" :key="index">
              <p style="color: white; opacity: 0.7">{{ item.title }}</p>
              <p class="text-lg" style="color: #F4D37A;">{{ item.count }}</p>
            </li>
          </ul>
        </section>

        <!-- 社区办事流程 -->
        <section class="bg-white radius shadow-md margin-top padding">
          <header>
            <div class="title">
              <van-icon :name="icons.cardIcon.briefcase" size="24" />
              <h3 style="margin-left: 8px">社区办事流程</h3>
            </div>
            <a class="right">
              <van-icon name="arrow" style="margin-left: 4px" />
            </a>
          </header>
          <ul class="help-list">
            <li v-for="(item, index) in helpList" :key="index">
              <h4 class="text-primary">{{ item.title }}</h4>
              <footer>
                <p class="text-sm">{{ item.updateTime }}</p>
                <div class="text-sm">
                  <van-icon name="eye-o" />
                  {{ item.views }}
                </div>
              </footer>
            </li>
          </ul>
        </section>

        <!-- 服务评价 -->
        <section class="radius bg-white shadow-md margin-top padding">
          <header>
            <div class="title">
              <van-icon :name="icons.cardIcon.star" size="24" color="#126156" />
              <h3 style="margin-left: 8px">服务评价</h3>
            </div>
            <a class="right">
              <van-icon name="arrow" style="margin-left: 4px" />
            </a>
          </header>
          <div class="rate-about">
            <div class="left">
              <p class="text-xl">{{ rate.count }}分</p>
              <van-rate
                v-model="rate.count"
                allow-half
                readonly
                color="#ff9800"
              />
              <p class="margin-top">{{ rate.rateCount }}人评价</p>
            </div>
            <ul class="right">
              <li v-for="(item, index) in rate.details" :key="index">
                <span class="text-sm text-light">{{ item.name }}</span>
                <van-progress
                  :percentage="item.process"
                  stroke-width="10"
                  :show-pivot="false"
                  color="#fdd015"
                  style="width: 58%; margin: 0 10px"
                />
                <span class="text-sm text-light">{{ item.count }}个</span>
              </li>
            </ul>
          </div>
        </section>
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
.navigators {
  border-radius: 0 0 16px 16px;
  background: white;
}

/* 公告 */
.notices {
  background: white;
  padding: 16px 10px;
}
.notices .time {
  flex-shrink: 0;
  width: 80px;
  margin-left: 10px;
}
header {
  display: flex;
  justify-content: space-between;
}
header .title {
  display: flex;
  align-items: center;
}
header .right {
  display: flex;
  align-items: center;
}
.notice-item {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  align-items: center;
}
p {
  font-size: 14px;
  color: #535c68;
}

/* 工具箱待办等 */
.todo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.todo-list_item {
  background: white;
  padding: 16px;
  width: 46%;
  margin-bottom: 16px;
}
.todo-list_item header {
  text-align: end;
  padding: 0;
  margin: 0;
}
.todo-list_icon {
  border-radius: 100%;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  box-sizing: content-box;
}
.todo-list_item:nth-of-type(1) .todo-list_icon {
  border: 5px solid #ebedf8;
  background: #dde0f4;
}
.todo-list_item:nth-of-type(2) .todo-list_icon {
  border: 5px solid #ecf8f5;
  background: #e3f5f1;
}
.todo-list_item:nth-of-type(3) .todo-list_icon {
  border: 5px solid #ffeccd;
  background: #ffe8c5;
}
.todo-list_item:nth-of-type(4) .todo-list_icon {
  border: 5px solid #fbe7e7;
  background: #fbdfdf;
}

.todo-list_item main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

/* 社区服务公告 */
.sverice {
  background-image: url(./assets/service_bg.png);
  padding: 10px;
  background-size: cover;
  background-position: center;
  border: 3px solid #F4D37A;
}
.sverice-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.sverice-list li {
  width: 50%;
  padding: 10px;
  text-align: center;
}

.sverice-list p:nth-child(1) {
  font-size: 16px;
  text-align: start;
}
.sverice-list li:nth-child(1) {
  border-right: 2px solid #7cada6;
  border-bottom: 2px solid #7cada6;
}
.sverice-list li:nth-child(3) {
  border-right: 2px solid #7cada6;
}
.sverice-list li:nth-child(2) {
  border-bottom: 2px solid #7cada6;
}

/* 社区办事流程 */
.help-list li {
  margin-top: 20px;
}
.help-list li footer {
  display: flex;
  color: #535c68;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

/* 评分 */
.rate-about {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
}
.rate-about .left {
  text-align: center;
  margin-right: 10px;
}
.rate-about .right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.rate-about .right li {
  display: flex;
  align-items: center;
}
</style>
