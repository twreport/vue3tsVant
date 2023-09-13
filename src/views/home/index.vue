<template>
    <h2>HOME</h2>
</template>

<script setup lang="ts">
import { onMounted  } from 'vue';
import userApi from "@/api/user"
onMounted(()=>{
    userApi
    .getUsersList(10,0)
    .then(res=>{
        console.log(res);
    })
})
</script>

<style scoped></style>