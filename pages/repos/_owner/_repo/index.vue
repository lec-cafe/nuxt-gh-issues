<template>
  <section>
    <h2>Issues <small class="text-muted">on {{owner}}/{{repo}}</small></h2>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          width="50"
          label="#">
          <template slot-scope="scope">
            #{{scope.row.number}}
          </template>
        </el-table-column>
        <el-table-column
          label="repos/title">
          <template slot-scope="scope">
            {{scope.row.title}}
          </template>
        </el-table-column>
        <el-table-column
          width="50"
          label="">
          <a :href="scope.row.url" class="text-dark" slot-scope="scope" target="_blank">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

import GithubAPI from '~/service/http'

export default {
  components: {
    AppLogo
  },
  data(){
    return {
      issues: []
    }
  },
  computed: {
    owner(){
      return this.$route.params.owner
    },
    repo(){
      return this.$route.params.repo
    },
    tableData(){
      return this.issues.map((issue) => {
        return {
          title: issue.title,
          number: issue.number,
          url: issue.html_url
        }
      })
    }
  },
  async mounted(){
    const api = new GithubAPI()
    const result = await api.getIssues(this.owner,this.repo)
    this.issues = result;
  }
}
</script>

<style>

</style>

