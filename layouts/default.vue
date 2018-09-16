<template>
  <el-container>
    <el-header>
      <nav class="navbar navbar-light bg-none">
        <router-link class="navbar-brand mb-0 h1" to="/">Github Issues</router-link>
        <no-ssr>
          <a @click="doLogout" v-if="user">{{user.name}}</a>
        </no-ssr>
      </nav>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>

    <el-footer>
      <div class="h2 text-center">
        <a class="text-dark" href="https://github.com/lec-cafe/nuxt-gh-issues" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  computed: {
    ...mapState("user",["user","auth"]),
  },
  async mounted(){
    const guestRoute = [
      "login"
    ]
    if(guestRoute.includes(this.$route.name)){
      if(!this.user){
        console.log(this.user)
        this.$router.push("/login")
      }
    }
  },
  methods:{
    ...mapActions("user",["LOGIN","LOGOUT"]),
    async doLogout(){
      if(confirm("ログアウトしますか？")){
        await this.LOGOUT();
        this.$router.push("/login")
      }
    }
  }
}
</script>
<style scoped>
  .el-container{
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
