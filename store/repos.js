import GithubAPI from '~/service/http'

export const state = () => ({
  repos: []
})

export const mutations = {
  SET_REPOS (state, repos) {
    state.repos = repos
  }
}

export const actions = {
  async FETCH_REPOS ({commit,rootState}) {
    const api = new GithubAPI(rootState.user.auth)
    const repos = await api.getMyRepos();
    commit("SET_REPOS",repos);
  }
}
