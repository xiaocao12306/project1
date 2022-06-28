<template>
		<section class="radius bg-white shadow-md margin-top padding">
          <header class="card-header">
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
</template>

<script setup>
		import { icons, rate } from '../mock'
</script>

<style scoped>
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