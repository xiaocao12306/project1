<template>
  <div>
    <section class="sverice radius shadow-md">
      <header class="text-white card-header">
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
          <p class="text-lg" style="color: #f4d37a">{{ item.count }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
	import { icons,svericeList } from '../mock'
</script>

<style scoped>
/* 社区服务公告 */
.sverice {
  background-image: url(../assets/service_bg.png);
  padding: 10px;
  background-size: cover;
  background-position: center;
  border: 3px solid #f4d37a;
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
</style>
