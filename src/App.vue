<template>
  <div id="app" class="app-container">
    <mt-header title="媒体资讯">
      <span v-show="$route.path != '/home'"  @click="$router.go(-1)"  slot="left">
       <mt-button icon="back">返回</mt-button>
      </span>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <nav class="mui-bar mui-bar-tab">
			<routerLink class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</routerLink>
			<routerLink class="mui-tab-item" to="/shopcar">
				<span id="badge" class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</routerLink>

			<routerLink class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</routerLink>
		</nav>
		<transition name="app">
    	<router-view></router-view>
		</transition>

  </div>

</template>

<script>

</script>

<style lang="less">
.app-container {
	// 只能x轴的方向,不然Y轴的方向就没有滚动条了
	// padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
	
}

.app-enter {
	opacity: 0;
	transform: translateX(100%);
	position: absolute;
	
}
.app-leave-to {
	opacity: 0;
	transform: translateX(-100%)
}
.app-enter-active, 
.app-leave-avtive {
	transition: all .5s ease;
}


</style>
