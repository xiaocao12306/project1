<template>
  <div>
    <section class="bg-white radius shadow-md margin-top padding">
      <header class="card-header">
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
  </div>
</template>

<script setup>
	import { icons,  helpList } from '../mock'
</script>

<style scoped>
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
</style>
