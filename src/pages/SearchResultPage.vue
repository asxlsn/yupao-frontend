<script setup lang="ts">


import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";
import qs from 'qs';
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();


const {tags} = route.query;

const userList = ref([]);
onMounted(async () => {
// 上面的请求也可以这样做
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
      .then(function (response) {
        console.log("/user/search/tags", response);
        Toast.success("搜索成功")
        return response?.data;

      })
      .catch(function (error) {
        console.log("/user/search/tags error", error);
        Toast.fail("搜索失败")
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


const mockUser = {
  id: 123465,
  username: '黄昏下的侧脸',
  userAccount: 'huanghun',
  profile: '黄昏的下午，格外的安详，田野上边的孩子欢快的嬉戏着，童年的快乐此时呈现的无比清晰',
  avatarUrl: 'https://img0.baidu.com/it/u=1077282731,2234353719&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
  gender: 1,
  phone: '18888888888',
  email: 'asxlsn@163.com',
  userRole: 1,
  planetCode: '12345',
  tags: ['java', 'emo', 'python', '打工仔', '上班族'],
  createTime: new Date()
}


</script>

<template>
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!userList ||userList.length < 1" description="搜索为空"/>


</template>

<style scoped>

</style>