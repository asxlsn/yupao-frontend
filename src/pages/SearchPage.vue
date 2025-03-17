<script setup lang="ts">


import {ref} from 'vue';
import {useRouter} from "vue-router";

const searchText = ref('');
const originTagList = [{
  text: '性别',
  children: [
    {text: '男', id: "男"},
    {text: '女', id: "女"},
  ],
},
  {
    text: '年级',
    children: [
      {text: '大一', id: '大一'},
      {text: '大二', id: '大二'},
      {text: '大三', id: '大三'},
    ],
  }
]


//已选中标签
const activeIds = ref([]);
const activeIndex = ref(0);
const router = useRouter();

// 标签列表
let tagList = ref(originTagList);

// 关闭标签
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;

  })
}
const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
    return tempParentTag;
  })
}

const onCancel = (val) => {
  searchText.value = '';
  tagList.value = originTagList;
}

const doSearchResult = () =>{
  router.push({
    path: '/user/list',
    query: {
      tags: activeIds.value
    }
  })
}
</script>

<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length === 0">请选择标签</div>
  <van-row gutter="16">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="smail" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>

  </van-row>


  <van-divider content-position="left">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

  <van-button block type="primary" @click="doSearchResult" style="margin: 12px">搜索</van-button>

</template>

<style scoped>

</style>