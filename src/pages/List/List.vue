<template>
  <div id="list">
    <div class="header">
    <div class="list-item list-left" @click="goto('/list/tab1')">
      <span :class="{on:this.$route.path==='/list/tab1'}">分类</span>
    </div>
    <div class="list-item list-right" @click="goto('/list/tab2')" >
     <span  :class="{on:this.$route.path==='/list/tab2'}">品牌</span>
      <a href="javascript:;">
        <img src="./image/search-ico.png"  class="search">
      </a>
    </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
  import BScroll from 'better-scroll'
  export default{
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    },
    component:{}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
#list
   padding-top 40px
   padding-bottom 50px
  .header
    bottom-border-1px(#ddd)
    width 100%
    position fixed
    top 0
    left 0
    right 0
    z-index 200
    background  #fff
    height 40px
    font-size 13px
    display flex
    .list-item
      flex 1
      line-height 50px
      &>span.on
        color red
        font-size 13px
        border-bottom 2px solid red
        padding-bottom 4px
    .list-left
      text-align right
      margin-right 20px

    .list-right
      .search
        position absolute
        top 13px
        right 15px
        width 14px
        height 14px


</style>
