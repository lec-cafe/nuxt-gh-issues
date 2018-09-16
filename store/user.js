import GithubAPI from '~/service/http'

export const state = () => ({
  user: null,
  auth: {
    username: null,
    password: null
  },
})

export const mutations = {
  SET_AUTH (state, {username, password}) {
    state.auth = {username, password}
  },
  SET_USER (state, user) {
    state.user = user
  },
  INIT (state){
    state.auth = {username:"", password:""}
    state.user = null
  }
}

export const actions = {
  async LOGIN ({commit},{username, password}) {
    const api = new GithubAPI({username, password})
    const user = await api.aboutMe()
    commit("SET_AUTH", {username, password});
    commit("SET_USER", user);
  },
  async RELOGIN ({state,dispatch}) {
    await dispatch("LOGIN",state.auth)
  },
  async LOGOUT ({commit}) {
    commit("INIT");
  }
}
