<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";
import {getCurrentUser} from "../services/user.ts";
const route = useRoute()
const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName
})



// const currentUser =await getCurrentUser()


const onSubmit = async () => {
  const currentUser =await getCurrentUser()
  if(!currentUser){
    Toast.fail("请先登录")
    return;
  }
  const res = await myAxios.post("/user/update",{
    id: currentUser.id,
    [editUser.value.editKey]: editUser.value.currentValue,
  })
  if (res.code === 0) {
    Toast.success("修改成功")
  } else {
    Toast.fail("修改失败")
  }

};
</script>

<template>
  <van-form @submit="onSubmit">
      <van-field
          v-model="editUser.currentValue"
          :name="String(editUser.editKey)"
          :label="String(editUser.editName)"
          :placeholder="`请输入 ${editUser.editName} `"
      />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<style scoped>

</style>