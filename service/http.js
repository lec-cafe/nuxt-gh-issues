import axios from "axios"

/**
 * see https://developer.github.com/v3/
 */
export default class GithubAPI{

  constructor() {
    let username = process.env.GITHUB_USERNAME
    let password = process.env.GITHUB_TOKEN
    if(!username){
      username = prompt("GITHUB のユーザ名を入力してください")
      password = prompt("GITHUB のパスワードを入力してください")
    }
    this.client = axios.create({
      baseURL: "https://api.github.com/",
      auth: { username, password }
    });
  }

  async getMyRepos(params={}){
    const {data} = await this.client.get(`/user/repos`, { params })
    return data
  }

  async getIssues(owner, repo, params={}){
    const {data} = await this.client.get(
      `/repos/${owner}/${repo}/issues`, { params })
    return data
  }

  async createIssue(owner, repo, payload={}){
    const {data} = await this.client.post(`/repos/${owner}/${repo}/issues`, payload)
    return data
  }

  async updateIssue(owner, repo,issueNo,payload={}){
    const {data} = await this.client.patch(`/repos/${owner}/${repo}/issues/${issueNo}`, payload)
    return data
  }
}
