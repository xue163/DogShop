<template>
  <div id="wrap">
   <div class="headerTop">
     <div class="address">
     <a href="javascript:;">狗狗|重庆
       <i class="iconfont icon-sanjiao"></i>
     </a>
     </div>
     <!--搜索框-->
     <p class="icon">
     <input type="text" placeholder="搜索商品和品牌">
     <span><i class="iconfont icon-sousuo"></i></span>
     </p>
     <!--留言信息栏-->
     <span class="liuyan">
       <i class="iconfont icon-xinxi"></i>
     </span>
   </div>

    <div class="list-wrap" id="pp">
      <ul class="headerBottom" ref="scrollUI">
        <li>
          <a href="javascript:;">
            <span>首页</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span> 狗狗主粮</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span> 服饰城</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
          <span> 医疗保健</span>
        </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>  零食玩具</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>日用外出</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <span>美容美液</span>
          </a>
          </li>
      </ul>
    </div>
  </div>
</template>
<!--划不动的原因：ul没有设置宽度由子元素撑开-->
<script type="text/javascript">
  import BSroll from 'better-scroll'
  export default{
    mounted(){
      this.$nextTick(() => {
        new BSroll('#pp',{
          scrollX:true,
          click:true
        })

      })
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 #wrap
  width 100%
  position fixed
  top 0
  left 0
  right 0
  z-index 200
  background #fff
  padding-bottom 10px
  .headerTop
    width 100%
    height 25px
    margin 10px
    text-align center
    color #898989
    .address
      float left
      line-height 25px
      padding 0
      &>.icon-sanjiao
        font-size 5px
    .icon
      float left
      position relative
      line-height 25px
      &>input
        height 25px
        outline 0
        font-size 13px
        color #bcbcbc
        background #e9e9e9
        width 234px
        border-radius 3px
      .icon-sousuo
         width 11px
         height 11px
         position absolute
         right 5px
         top 0
         bottom 0
         font-size 10px
    .liuyan
        line-height 25px
        width 25px
        margin-right 5px
        font-size 25px
        &>.icon-xinxi
         font-size 20px
  .list-wrap
     width 100%
    .headerBottom
      margin-top 25px
      overflow hidden
      width 525px
      li
        float left
        width 75px
        text-align center
        &>a
          width  100%
          height 100%
          font-size  14px
          text-align  center
          color: #666;

    /*dfa*/
</style>
