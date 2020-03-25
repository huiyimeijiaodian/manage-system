import router from "./router.js";
import store from './store'
import Api from "@/utils/api.js";
import {Message} from "element-ui";
const whiteList = ['/login', '/auth-redirect'] // no redirect 白名单
const hasRole = true;
router.beforeEach((to, from, next) => {
  if (Api.getCookie("token")) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({
        path: '/'
      });
    } else {
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store
          .dispatch('GetUserInfo')
          .then(res => {
            // 拉取user_info
            // const roles = res.data.roles // note: roles must be a object array! such as: [{id: '1', name: 'editor'}, {id: '2', name: 'developer'}]
            // const menus = res.data.menus;
            store.dispatch('GenerateRoutes', store.getters.menus).then(accessRoutes => {
              // 根据roles权限生成可访问的路由表
              router.addRoutes(accessRoutes) // 动态添加可访问路由表
              next({
                ...to,
                replace: true
              }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
          })
          .catch(err => {
            store.dispatch('FedLogOut').then(() => {
              Message.error(err)
              next({
                path: '/'
              })
            })
          })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({
            path: '/401',
            replace: true,
            query: {
              noGoBack: true
            }
          })
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})