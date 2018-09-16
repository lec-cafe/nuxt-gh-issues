import GithubAPI from '~/service/http'

export const state = () => ({
  issues: []
})

export const mutations = {
  SET_ISSUES (state, issues) {
    state.issues = issues
  }
}

export const actions = {
  async FETCH_ISSUES ({commit,rootState},{owner,repo}) {
    const api = new GithubAPI(rootState.user.auth)
    const issues = await api.getIssues(owner,repo);
    commit("SET_ISSUES",issues);
  }
}
