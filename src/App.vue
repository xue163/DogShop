<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuild/>
  </div>
</template>

<script>
import FooterGuild from './components/FooterGuild/FooterGuild.vue'

export default {
components:{FooterGuild}
}
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
