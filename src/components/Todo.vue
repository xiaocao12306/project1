<template>
	<div>
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
	</div>
</template>

<script setup>
	import { icons, helpList } from '../mock'
</script>

<style scoped>
	.todo-list_item header{
		text-align: end;
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

.todo-list_item main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>