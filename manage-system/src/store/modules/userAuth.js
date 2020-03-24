// import axios from '../../api'
// import {Message} from 'element-ui'
// import {getCookie, setCookie, removeCookie} from '@/utils/auth'

const userAuth = {
  state: {
    userStatus: '',
    authStatus: '',
    routerList: [],
    workerCookie: '',
    workerName: '',
    workerImg: '',
    roleid: '',
    rolename: '',
    roleimg: '',
  },
  mutations: {
    'SAVE_COOKIE': (state, res) => {
      state.workerCookie = res
    },
    'saveUser': (state,res) => {
      if(res.name){
        state.workerName = res.name;
      }
      if(res.headimg){
        state.workerImg = res.headimg;
      }
      state.roleid = res.roleid;
      state.rolename = res.rolename;
      state.roleimg = res.roleimg;
    }
  },
  actions: {
    // 获取用户权限信息 
    getUserAuthInfoData({commit}, userAuth) {
      const code = userAuth.code
      const as = userAuth.as
      axios.getUserAuth({code: code, as: as})
        .then(res => {
          if (res.rc === 0 && res.authorize) {
            commit('SAVE_COOKIE', res.authorize)
            setCookie(res.authorize)
          } else {
            Message({
              showClose: true,
              message: '获取用户权限失败',
              type: 'error'
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

export default userAuth

