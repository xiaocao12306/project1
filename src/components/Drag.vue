<template>
  <div class="drag" @touchstart="down()" @touchmove.prevent="move()" @touchend="end()" id="moveDiv"></div>
</template>

<script setup>
	let flag = false;
	let position = {x:0,y:0};
	let nx, ny, dx, dy, xPum, yPum;
	function down() {
		flag = true;
		let touch;
		if(event.touches){
			touch = event.touches[0];
		}else{
			touch = event
		}
		position.x = touch.clientX;
		position.y = touch.clientY;
		dx = moveDiv.offsetLeft;
		dy = moveDiv.offsetTop;
	}

	function move(){
    if(flag){
      let touch ;
      if(event.touches){
          touch = event.touches[0];
      }else {
          touch = event;
      }
      nx = touch.clientX - position.x;
      ny = touch.clientY - position.y;
      xPum = dx+nx;
      yPum = dy+ny;
      //添加限制：只允许在屏幕内拖动
	  const maxWidth = document.body.clientWidth - 54;//屏幕宽度减去悬浮框宽高
	  const maxHeight = document.body.clientHeight - 54;
	  if (xPum < 0) { //屏幕x限制
		xPum = 0;
	  } else if (xPum>maxWidth) {
	    xPum = maxWidth;
	  }
	  if (yPum < 0) { //屏幕y限制
		yPum = 0;
	  } else if (yPum>maxHeight) {
		yPum = maxHeight;
	  }
			if(xPum <= 0) xPum = 0;
			if(yPum <= 0) yPum = 0;
			if(xPum >= document.body.clientWidth - 100) xPum = document.body.clientWidth - 100;
			if(yPum >= document.body.clientHeight - 120) yPum = document.body.clientHeight -120;
			console.log(document.body.clientHeight)
      moveDiv.style.left = xPum+"px";
      moveDiv.style.top = yPum +"px";
      //阻止页面的滑动默认事件
      document.addEventListener("touchmove",function(){ // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
          event.stopPropagation(); // 如果没有引入jq 就用 stopPropagation()
      },false);
    }
  }

	function end(){
    flag = false;
  }
</script>

<style scoped>
.drag {
  position: fixed;
  top: 50%;
  border-radius: 100%;
	width: 100px;
	height: 100px;
  background-image:url(../assets/icons/drag_btn.svg);
	background-position: center;
}
</style>
