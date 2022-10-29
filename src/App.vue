<script setup>

</script>

<template>
  <div class="app">
    <div id="nav">
      <router-link to="/home" active-class="hanwu-active">Home</router-link> |
      <router-link to="/about" active-class="hanwu-active">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less" scoped>

</style>
