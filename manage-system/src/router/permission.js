import router from "./router.js";
import axios from "axios";
import Api from "@/utils/api.js";
import { Message } from "element-ui";

router.beforeEach((to, from, next) => {
  if(Api.getCookie("auth")) {
    if (to.path === '/adminauth/wxlogincallback') {
      next({path: '/home'})
    } else {
      next()
    }
  } else {
    console.log(from.path,to.path);
    if (from.path === '/adminauth/wxlogincallback' || to.path === '/adminauth/wxlogincallback') {
      next()
    } else {
      axios.post("/api/admin/auth.json")
        .then(res => {
          let data = res.data;
          if (data && data.rc === 0) {
            window.location.href = data.url
          } else {
            Message({
              message:"糟糕！用户权限获取失败",
              type:"warning"
            });
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})