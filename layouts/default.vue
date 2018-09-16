<template>
  <el-container>
    <el-header>
      <nav class="navbar navbar-light bg-none">
        <router-link class="navbar-brand mb-0 h1" to="/">Github Issues</router-link>
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

<style scoped>
  .el-container{
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

