<template>
    <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o" @click="logout">标签</van-tabbar-item>
</van-tabbar>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useUserStore } from "@/store/user";
import { useMenuStore } from "@/store/menu";

const userStore = useUserStore();
const menuStore = useMenuStore();

const active = ref(0);

const logout = () => {
  userStore.$reset();
  menuStore.$reset();
  sessionStorage.clear();
  location.replace('/vant/#/home')
};

</script>

<style scoped></style>