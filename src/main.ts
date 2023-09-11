import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

// 引入Vant组件样式
import 'vant/lib/index.css';

const app = createApp(App);

// 引入pinia并持久化
const pinia = createPinia();
pinia.use(piniaPluginPersist);
app.use(pinia);

app.use(router);

//绑定页面跳转权限，如果没有登录，直接跳转至登录页面
import "./permission.ts";
// 引入自定义样式，覆盖官方部分组件样式
// import "./assets/custom.less";
import { ConfigProvider } from 'vant';
app.use(ConfigProvider);
app.mount('#app')
