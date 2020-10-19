<template>
  <div id="app">
    <router-view />
    <div class="link-box">
      <router-link to="/inner" class="link" v-show="$route.path.indexOf('home') != -1">去inner页</router-link>
      <router-link to="/home" class="link" v-show="$route.path.indexOf('inner') != -1">去首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="less">
.link-box {
  text-align: center;
  margin-top: 60px;
}
.link {
  padding: 10px 20px;
  margin: 0 auto;
  border: 1px solid #000000;
  border-radius: 5px;
}
@import url('~css/reset.css');
</style>
