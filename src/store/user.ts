import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore('user', {
    // other options...
    state: () => {
        return {
            'user_name': null,
            'user_id': null,
            'access_token': null,
            'expires': null
        }
    },
    getters: {
        getUserName(): string | null{
            return this.user_name;
        },
        getAccessToken(): string | null{
            return this.access_token;
            // const access_token = window.localStorage.getItem('access_token');
            // if (access_token) {
            //     return access_token;
            // } else {
            //     return this.access_token;
            // }
        },
        getUserId(): number | null{
            return this.user_id;
            // const user_id = window.localStorage.getItem('user_id');
            // if (user_id) {
            //     return Number(user_id);
            // } else {
            //     return this.user_id;
            // }
        },
        getExpires(): number | null{
            return this.expires;
            // const expires = window.localStorage.getItem('expires');
            // if (expires) {
            //     return Number(expires);
            // } else {
            //     return this.expires;
            // }
        }
    },
    actions: {
        setUserName(user_name: string): void {
            this.user_name = user_name;
            // window.localStorage.setItem('user_name', user_name);
        },
        setUserId(user_id: number): void {
            this.user_id = user_id;
            // window.localStorage.setItem('user_id', user_id.toString());
        },
        setAccessToken(access_token: string): void {
            this.access_token = access_token;
            // window.localStorage.setItem('access_token', access_token);
        },
        setExpires(expires: number): void {
            this.expires = expires;
            // window.localStorage.setItem('expires', expires.toString());
        },
        setUserLogin(data: any):void {
            // window.localStorage.clear();
            this.setUserName(data.user_name);
            this.setAccessToken(data.access_token);
            this.setUserId(Number(data.user_id));
            this.setExpires(Number(data.expires));
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
              key: 'userStore'
            }
          ]
    }
})