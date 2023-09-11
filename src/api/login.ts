import request from "@/utils/request"

const loginApi = {
    getInfo() {
        return request({
            url: '/',
            method: 'get'
        })
    },

    login(user_name: string, password: string) {
        return request({
            url: '/login',
            method: 'post',
            data: {
                user_name,
                password
            }
        })
    },

    refresh_token(refresh_token:string) {
        return request({
            url: '/refresh_token',
            method: 'post',
            data: {
                refresh_token
            }
        })
    },

    register(user_name: string, password: string) {
        return request({
            url: '/user',
            method: 'post',
            data: {
                user_name,
                password
            }
        })
    },

    isUerExist(user_name: string){
        return request({
            url: '/is_user_exist',
            method: 'post',
            data: {
                user_name
            }
        })
    }
}


export default loginApi;