<template>
  <div class="register-box">
    <h2>用户注册</h2>
    <van-form @submit="onSubmit" @failed="onFailed">
      <van-cell-group inset>
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          v-model="username"
          label="用户"
          name="用户"
          placeholder="用户名"
          :rules="[
            { required: true, message: '请填写用户名' },
            { validator: asyncValidator, message: '用户已存在' },
          ]"
        />
        <van-field
          v-model="password1"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="password2"
          type="password"
          name="重复密码"
          label="重复密码"
          placeholder="重复密码"
          :rules="[
            { required: true, message: '请填写密码' },
            { validator, message: '两次密码输入不一致' },
          ]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <van-floating-bubble icon="sign" @click="goLogin" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import loginApi from "@/api/login";
// Toast
import { closeToast, showLoadingToast } from "vant";
import "vant/es/toast/style";
import { type FieldRuleValidator } from "vant";
const router = useRouter();

const username = ref("");
const password1 = ref("");
const password2 = ref("");

const onSubmit = () => {
  loginApi.register(username.value, password1.value).then((res) => {
    console.log(res);
    if ("err" in res) {
    } else {
      router.push("/login");
    }
  });
};

// 校验函数可以返回 Promise，实现异步校验
const asyncValidator:FieldRuleValidator = (val: any) =>{
    return new Promise((resolve) => {
    showLoadingToast("验证中...");

    loginApi.isUerExist(val).then((res) => {
      console.log(res);
      closeToast();
      if (res.data.user_id != 0) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });

}


const validator = () => {
  const isSame = password1.value === password2.value ? true : false;
  return isSame;
};

const goLogin = () => {
  router.push("/login");
};

const onFailed = (errorInfo: any) => {
  console.log("failed", errorInfo);
};
</script>

<style scoped>
.register-box {
  text-align: center;
  width: 300px;
  margin: 0 auto;
  padding-top: 15em;
}

.register-box h2 {
  color: grey;
  margin-bottom: 1em;
}
</style>
