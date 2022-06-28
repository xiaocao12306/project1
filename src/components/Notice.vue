<template>
  <div>
    <!-- 公告 -->
    <section class="notices radius shadow-md">
      <header class="card-header">
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
  </div>
</template>

<script setup>
import { icons, svericeList } from '../mock'
</script>

<style scoped>
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
.notice-item {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  align-items: center;
}
</style>
