/**
 * 登录权限校验
 */

import router from "./router/index.ts";
// Notify
import { showNotify } from 'vant';
import 'vant/es/notify/style';

import { useUserStore } from "@/store/user";
import { useMenuStore } from "@/store/menu";


router.beforeEach((to, from, next) => {
    console.log(from);
    const userStore = useUserStore();
    const menuStore = useMenuStore();


    const access_token: string | null = userStore.access_token;
    const expires: number | null = userStore.expires;
    const user_permission: string | null = menuStore.user_permission;

    console.log('userStore', userStore);
    console.log('menuStore', menuStore);

    console.log('access_token', access_token);
    console.log('expires', expires);
    console.log('user_permission', user_permission);
    const now: number = Date.parse(new Date().toString()) / 1000;

    //核心逻辑是判断是否超时
    //如果没有token则重新登录；
    //如果有token但登录时间已经超过token时限则重新登录
    //如果有token但登录时间已经超过token时限但还未超过refresh时限，则refresh

    console.log('============to============');
    console.log(access_token);
    
    console.log(to.path);
    

    if (access_token === '' || access_token === undefined || access_token === null) {
        //如果token不存在,则直接进入登录页面
        if (to.path !== "/login" && to.path !== "/register") {
            next({
                path: "/login"
            });
        } else {
            next();
        }
    } else if (expires === null || expires < now) {
        //如果已经超时，则直接进入登录页面
        if (to.path !== "/login") {
            next({
                path: "/login"
            });
        } else {
            next();
        }
    } else {
        //如果一切正常则检验用户是否有登录权限
        if(user_permission && user_permission.indexOf(to.path) > -1){
        //如果没问题就正常进入页面
        next();
        }else{
            showNotify({ type: 'warning', message: '您没有访问权限！' });
            next({path: "/login"});
        }
    }
}) 
