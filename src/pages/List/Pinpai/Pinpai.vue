<template>
  <div class="recom">
    <div class="ff" v-for="(b,index) in brand" :key="index">
    <div class="recom-top">
      <span>—— {{b.title}} ——</span>
    </div>
    <!--下面的图片区域-->
      <ul class="fc">
        <li v-for="(pros,index) in b.list">
          <div class="cc">
          <img v-lazy="pros.logo">
          </div>
          <div  class="c1">{{pros.name}}</div>
          <span>{{pros.address}}</span>
        </li>
      </ul>
      <a href="javascript:;" class="all" @click="goto('/list/tab3')">全部</a>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState} from 'vuex'
  export default{
    computed:{
      ...mapState(['brand'])
    },
    mounted(){
      this.$store.dispatch('reqbrand')
    },
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.recom
  position absolute
  top 0
  left 0
  bottom 0
  right 0
  margin-top 40px
  margin-bottom 40px
  /*background #af3*/
  .ff
    position relative
    .recom-top
      margin-top 20px
      font-size 12px
      margin-bottom 20px
      text-align center
    .fc
      width 100%
      overflow hidden
      margin-bottom 37px
      >li
        width 30%
        float left
        text-align center
        font-size 10px
        margin 2px 6px
        .cc
          border 1px solid #e2e2e2
          padding 5px
          >img
             max-width 90%
             height 40px
        .c1
          white-space nowrap
          margin 5px 0


    .all
      position fixed
      bottom 60px
      right 0
      width 40px
      height 40px
      background rgba(0,0,0,0.05)
      text-align center
      line-height 40px
      border-radius 50%
      font-size 12px
      color #fff


      /*agfafa*/




</style>
