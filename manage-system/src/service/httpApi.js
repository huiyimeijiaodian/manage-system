//第一种写法，只有路径默认post
//第二种写法，type不配置也默认post
//第三种写法，可配置type:post/get
export default{
  getUserAuth: "/api/admin/auth.json",// 获取用户登录信息
  getUserInfoDefault:{url:"/api/admin/check.json"},
  getUserAuthInfo:{url:"/api/admin/allot.json",type:'post'},// 分配用户权限
  getUserRouterInfo:"/api/admin/route.json",
  getUserAuthBatch:"/api/admin/batch.json",
  getUserList:"/server/userlist.json",// 获取提问用户数据
  receptUser:"/server/receptuser.json",// 提交接待/关闭用户
  getUserHistory:"/server/history.json",// 获取用户聊天记录
  getUserInfo:"/server/userinfo.json",// 获取用户信息
  getWorkerList:"/service/worker/list.json",// 获取真实客服账号列表
  getRoleList:"/service/role/list.json.json",// 获取虚拟客服列表
  onlineRoleId:"/service/role/online.json",// 登录绑定虚拟客服
  offlineRoleId:"/service/role/offline.json",// 退出虚拟客服
  questionClassify:"/service/question/classify.json",// 问题项目分类
  getHelpQuestion:"/server/shortcut.json",// 快捷回复问题
  getQiniuToken:"/source/qiniu/token.json",// 获取七牛云token
  getSearchQuestionList:"/service/question/search.json",// 获取会话问题列表
  getQuestionStat:"/service/question/stat.json",//获取会话统计数据
  getConfig:"/service/config/detail.json",//获取系统配置信息
  updateConfig:"/service/config/update.json",//提交系统配置信息
}