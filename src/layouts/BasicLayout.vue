<template>
  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>
  <div id="center">
    <router-view />
  </div>
  <van-tabbar :route="true" @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>


</template>

<script setup lang='ts'>
import {useRouter} from "vue-router";
const router = useRouter();
import { Toast } from 'vant';
const onClickLeft = () => router.back();
const onClickRight = () => {
  router.push('/search')
}

// const active = ref("index");

const onChange = (index) => Toast(`标签 ${index}`);
</script>

<style scoped>
#center{
  padding-bottom: 50px;
}
</style>
