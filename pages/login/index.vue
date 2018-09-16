<template>
  <section>
    <h2>Login</h2>
    <div class="row justify-content-center">
      <div class="col-sm-8">
        <p>Github のユーザ名、パスワードを入力してください。</p>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="form.username" placeholder="Enter github username">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="form.password" placeholder="password or 2FA token">
          <small class="form-text text-muted">2FA を利用している場合、<a href="https://github.com/settings/tokens" target="_blank">Personal access token</a> を利用してください。</small>
        </div>
        <button type="submit" class="btn btn-primary" @click="sendLogin">Submit</button>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  data(){
    return {
      form:{
        username: null,
        password: null
      }
    }
  },
  computed: {
    ...mapState("user",["auth"]),
    ...mapState("repos",["repos"]),
  },
  async mounted(){
  },
  methods:{
    ...mapActions("user",["LOGIN"]),
    async sendLogin(){
      await this.LOGIN(this.form)
      this.$router.push("/")
    }
  }
}
</script>

<style>

</style>

