<template>
  <van-config-provider :theme-vars="themeVars" theme-vars-scope="global">
  <RouterView></RouterView>
</van-config-provider>
</template>

<script setup lang="ts">
import { reactive } from "vue";

// 可在此处修改全局css变量
const themeVars = reactive({
  // ButtonPrimaryBorderColor: 'red',
  // ToastTextColor: 'red',
  // ToastBackground: '#000',
  // PrimaryColor: 'red'
})
</script>

<style scoped></style>