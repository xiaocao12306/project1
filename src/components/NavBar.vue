<template>
  <div class="nav">
    <header class="bg-primary padding">
      <div class="left" @click="selectMap">
        <van-icon :name="map" size="20" />
        <div class="drop-menu">
          <span style="margin: 0 10px">{{community}}</span>
          <van-icon name="arrow-down" color="#fff" />
        </div>
      </div>
      <div class="right">
        <van-icon
          style="margin-right: 20px"
          :name="scanner"
          size="20"
          color="#267064"
          @click="handleScan"
        />
        <van-icon
          :name="message"
          size="20"
          color="#267064"
          @click="handleMessage"
        />
      </div>
    </header>
    <div class="clear"></div>
    <van-popup
      :show="show"
      position="top"
      :style="{marginTop: '50px',padding:'10px 0' }"
      @click-overlay="closePop"
    >
      <van-radio-group v-model="checked" >
        <van-cell-group>
          <van-cell 
            :clickable="true"
            v-for="item in communityList" 
            :key="item.id" 
            :title="item.name"
            @click="selectCommunity(item.name)">
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-popup>
  </div>
</template>

<script setup>
import map from '../assets/icons/header/map.svg'
import scanner from '../assets/icons/header/scanner.svg'
import message from '../assets/icons/header/message.svg'
import { ref } from 'vue'
import { communityList } from '../mock'
const emit = defineEmits(['onscan'])
let community = ref(communityList[0].name)
let show = ref(false)
function closePop() {
  show.value = false
}
function selectMap() {
  console.log('selectMap')
  show.value = true
}
function handleMessage() {
  console.log('handleMessage')
}
function handleScan() {
  console.log('handleScan')
  emit('onscan')
  
}
function selectCommunity(e){
  console.log(e)
  community.value = e
  closePop()
}
</script>

<style scoped>
.nav {
  height: 50px;
  overflow: hidden;
}
header {
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(../assets/header_bg.png);
}
.left {
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: flex-end;
}
.right {
  display: flex;
  color: white;
}
</style>
