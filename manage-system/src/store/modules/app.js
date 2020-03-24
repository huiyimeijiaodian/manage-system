import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    tagsStatus: {
      ParentingHomeStatus: "HomeBanner",
      XblDdguStatus: "EntranceInfo",
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    TOGGLE_TAGSSTATUS: (state, obj) => {
      state.tagsStatus = JSON.parse(JSON.stringify(obj));
    }
  },
  actions: {
    toggleSidebar ({commit}) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSidebar ({commit}, {withoutAnimation}) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice ({commit}, device) {
      commit('TOGGLE_DEVICE', device)
    },
    toggleTagsstatus({commit}, key, value){
      commit('TOGGLE_TAGSSTATUS',key,value)
    }
  }
}

export default app
