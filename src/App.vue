<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header title="信息管理系统"></mt-header>
    <!-- <mt-button type="primary">测试按钮</mt-button> -->
    <router-view/>
    <!-- 底部导航 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" :to="{name:'home'}">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'menber'}">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'shopcart'}">
        <span class="mui-icon mui-icon-gear">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <!-- mui-icon mui-icon-gear -->
      <router-link class="mui-tab-item" :to="{name:'user'}">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
