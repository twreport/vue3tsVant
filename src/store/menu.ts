import { defineStore } from 'pinia'

interface UserMenu {
    title: string
    path: string
    children?: UserMenu[]
}

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useMenuStore = defineStore('menu', {
    // other options...
    state: () => {
        return {
            'user_menu': null,
            'user_permission': null
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
              key: 'menuStore'
            },
          ]
    },
    getters: {
        getUserMenu(): UserMenu[] {
            return this.user_menu;
        },
        getUserPermission(): string[] {
            return this.user_permission;
        }
    },
    actions: {
        setUserMenu(user_menu: UserMenu[]): void {
            this.user_menu = user_menu;
        },
        setUserPermission(user_permission: string[]): void {
            this.user_permission = user_permission;
        }
    }
})