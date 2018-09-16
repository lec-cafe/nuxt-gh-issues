<template>
  <section>
    <h2>Repositories</h2>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="repos/title">
          <template slot-scope="scope">
            <router-link :to="`/repos/${scope.row.name}`" class="text-dark">
              {{scope.row.name}}
            </router-link>
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
import {mapState, mapActions} from "vuex"

export default {
  data(){
    return {}
  },
  computed: {
    ...mapState("repos",["repos"]),
    tableData(){
      return this.repos.map((issue) => {
        if(issue.open_issues_count){
          return {
            name: issue.full_name,
            url: issue.html_url
          }
        }
        return false
      }).filter((val)=>val);
    }
  },
  async mounted(){
    this.FETCH_REPOS()
  },
  methods:{
    ...mapActions("repos",["FETCH_REPOS"])
  }
}
</script>

<style>

</style>

