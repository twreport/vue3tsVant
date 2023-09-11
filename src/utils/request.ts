import axios from "axios";
import { AxiosResponse } from "axios";
// Notify
import { showNotify } from 'vant';

// 因为本文件在pinia加载之前加载，因此只能使用sessionStorage
const userStoreStr = sessionStorage.getItem('userStore');
let userStore = {
    access_token: ''
};
console.log('userStoreStr',userStoreStr);

if(userStoreStr){
  userStore = JSON.parse(userStoreStr);
}

const access_token = userStore.access_token;
console.log('token', access_token);

const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // 超时设置
    timeout: 15000,
    headers: {
        'access_token': access_token,
        'Content-Type': 'application/json;charset=utf-8'
    }
})

request.interceptors.request.use(
    (config) => {
        return config;
    }
);

request.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            //如果正常返回没有错误
            if ('err' in response.data) {
                //如果有错误但能够正常返回且需要弹窗
                if ('msg' in response.data) {
                    showNotify({ type: 'warning', message: response.data.msg });
                }
            } else {
                //如果restful标准自定接口返回的msg没有值，则不弹窗，只要有值就必弹窗
                if ('msg' in response.data) {
                    showNotify({ type: 'success', message: response.data.msg });
                }
            }
            return response.data;
        }
        return Promise.reject(response.statusText);
    }
)

export default request;