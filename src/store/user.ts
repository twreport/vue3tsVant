import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore('user', {
    // other options...
    state: () => {
        const userNameSession = sessionStorage.getItem('user_name')
        const userIdSession = sessionStorage.getItem('user_id')
        const accessTokenSession = sessionStorage.getItem('access_token')
        const expiresSession = sessionStorage.getItem('expires')
        return {
            'user_name': userNameSession?userNameSession:'',
            'user_id': userIdSession?Number(userIdSession):0,
            'access_token': accessTokenSession?accessTokenSession:'',
            'expires': expiresSession?Number(expiresSession):0
        }
    },
    getters: {
        getUserName(): string | null{
            return this.user_name;
        },
        getAccessToken(): string | null{
            return this.access_token;
        },
        getUserId(): number | null{
            return this.user_id;
        },
        getExpires(): number | null{
            return this.expires;
        }
    },
    actions: {
        setUserName(user_name: string): void {
            this.user_name = user_name;
            sessionStorage.setItem('user_name', user_name)
        },
        setUserId(user_id: number): void {
            this.user_id = user_id;
            sessionStorage.setItem('user_id', user_id.toString())

        },
        setAccessToken(access_token: string): void {
            this.access_token = access_token;
            sessionStorage.setItem('access_token', access_token)

        },
        setExpires(expires: number): void {
            this.expires = expires;
            sessionStorage.setItem('expires', expires.toString())

        },
        setUserLogin(data: any):void {
            this.setUserName(data.user_name);
            this.setAccessToken(data.access_token);
            this.setUserId(Number(data.user_id));
            this.setExpires(Number(data.expires));
        }
    }
})
