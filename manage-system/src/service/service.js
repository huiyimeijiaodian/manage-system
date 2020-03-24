import axios from 'axios'
import Api from '@/utils/api.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {Message} from 'element-ui'

// 全局请求条
NProgress.configure({showSpinner: false})
// 创建axios 实例
let instance = axios.create({
  data: {
    adminType: 'kefuBoss'
  },
  timeout: 5000,
  withCredentials: true, // 允许携带cookie
})
// add a request interceptors
instance.interceptors.request.use(config=> {
  NProgress.start()
  return config
}, error=>{
  Message({
    showClose: true,
    message: error.message,
    type: 'error'
  })
  return Promise.reject(error)
})

// add a response interceptors
instance.interceptors.response.use(response=> {
  NProgress.done()
  return response;
}, error=> {
  Message({
    showClose: true,
    message: error.message,
    duration: 3000,
    type: 'error'
  })
  return Promise.reject(error)
})

function getHeaders() {
  return {
    Authorize: Api.getCookie("auth")
  }
}

export default {
  get (url, params = {}) {
    const headers = getHeaders()
    return instance
      .get(url, {params, headers})
      .catch(error => {
        console.log(error)
      })
  },
  post (url, params = {}) {
    const headers = getHeaders()
    return instance
      .post(url, {...params}, {headers,timeout:5000})
      .catch(error => {
        console.log(error)
      })
  }
}
