<template>
	<div>
<van-swipe style="background:white" class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image :src="banner" mode="cover"/>
      </van-swipe-item>
    </van-swipe>
	</div>
</template>

<script setup>
import banner from '../assets/banner.png'
</script>

<style lang="scss" scoped>
</style>