import request from "@/utils/request"

const userApi = {
    getUsersList(limit:number, offset:number) {
        return request({
            url: '/users_list',
            method: 'post',
            data: {
                limit,
                offset
            }
        })
    }
}

export default userApi