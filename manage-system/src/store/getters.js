const getters = {
  sidebar: state => state.app.sidebar,
  tagsStatus: state => state.app.tagsStatus,
  device: state => state.app.device,
  Cookie: state => state.userAuth.workerCookie,
  workerName: state => state.userAuth.workerName,
  workerImg: state => state.userAuth.workerImg,
  roleid: state => state.userAuth.roleid,
  rolename: state => state.userAuth.rolename,
  roleimg: state => state.userAuth.roleimg,
}
export default getters