<template>
  <div>
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
  </div>
</template>

<script setup>
import { icons } from '../mock'
</script>

<style scoped>
.navigators {
  border-radius: 0 0 16px 16px;
  background: white;
}
</style>
