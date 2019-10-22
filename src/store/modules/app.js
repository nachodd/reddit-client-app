const state = {
  sidebarOpen: localStorage.getItem("sidebarStatus")
    ? !!+localStorage.getItem("sidebarStatus")
    : true,
  loadingLevel: 0,
}

// getters
const getters = {
  sidebarOpen: state => state.sidebarOpen,
  isPageLoading: state => state.loadingLevel !== 0,
}

const mutations = {
  SET_SIDEBAR: (state, status) => {
    localStorage.setItem("sidebarStatus", +status)
    state.sidebarOpen = status
  },
  LOADING_INC: state => {
    state.loadingLevel += 1
  },
  LOADING_DEC: state => {
    state.loadingLevel -= 1
    if (state.loadingLevel < 0) {
      state.loadingLevel = 0
    }
  },
  LOADING_RESET: state => {
    state.loadingLevel = 0
  },
}

const actions = {
  setSideBar({ commit }, sidebarStatus) {
    commit("SET_SIDEBAR", sidebarStatus)
  },
  toggleDevice({ commit }, device) {
    commit("TOGGLE_DEVICE", device)
  },
  loadingInc({ commit }) {
    return new Promise(async resolve => {
      commit("LOADING_INC")
      resolve()
    })
  },
  loadingDec({ commit }) {
    return new Promise(async resolve => {
      commit("LOADING_DEC")
      resolve()
    })
  },
  loadingReset({ commit }) {
    commit("LOADING_RESET")
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
