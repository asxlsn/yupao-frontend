<script setup lang="ts">


import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();


const userList = ref([]);
onMounted(async () => {
// 上面的请求也可以这样做
  const userListData = await myAxios.get('/user/recommend', {
    params: {
      pageSize: 8,
      pageNum: 1
    },

  })
      .then(function (response) {
        console.log("/user/recommend", response);
        Toast.success("请求成功")
        return response?.data?.records;

      })
      .catch(function (error) {
        console.log("/user/recommend error", error);
        Toast.fail("请求失败")
      });

  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
})





</script>

<template>
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!userList ||userList.length < 1" description="数据为空"/>


</template>

<style scoped>

</style>