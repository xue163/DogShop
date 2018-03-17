<template>
  <div id="all-wrap">
    <div class="pinpai">
      <Aima :title="title"/>

      <div class="content-wrap">
        <!--右侧字母栏-->
      <div class="letter">
        <div class="menu-letter">
          <span class="on">A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>G</span>
          <span>H</span>
          <span>I</span>
        </div>
      </div>
        <!--左侧内容区-->
      <div class="content">
        <div class="name">A</div>
        <a class="air">
          <div class="brand-img">
            <img src="./icon1.jpg" >
          </div>
          <div>
            <span>艾尔</span>
            <span>中国</span>
          </div>
        </a>
      </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Aima from '../../../components/Aima/Aima.vue'
  import {mapState} from 'vuex'
  export default{
    data(){
      return {
        title: '全部品牌'
      }
    },
    mounted(){
      this.$store.dispatch('reqAllpinpai')
    },
    computed: {
      ...mapState(['Allpinpai'])
    },
    components: {Aima}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #all-wrap
    .pinpai
      .content-wrap
        margin-top 50px
        .letter
          position fixed
          right 0
          display table
          height 100%
          .menu-letter
            display table-cell
            vertical-align middle
            >span
              display block
              font-size 12px
              margin-top 4px
              height 12px
        .content
          .name
            line-height 24px
            width 100%
            background  #f3f4f5
            height 24px
          .air
            display block
            background #fff
            color #000
            height 73px
            .brand-img
              border 1px solid #f3f4f5
              width 30%
              height 50px
              >img
                width 100%


  /*sdfa*/

</style>
