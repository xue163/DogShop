<template>
  <div id="footer-waper">
      <span class="index-a guide_item " :class="{on:$route.path==='/miste'}" @click="goto('/miste')">
       <span class="item_icon" >
        <i class="iconfont icon-fangwuxinxi"></i>
         </span>
        <span>首页</span>
      </span>

      <span class="type-a guide_item" :class="{on:$route.path==='/list/tab1'}" @click="goto('/list/tab1')">
          <span class="item_icon">
          <i class="iconfont icon-fenlei"></i>
        </span>
        <span>分类</span>
      </span>
      <span class="cart-a guide_item" :class="{on:$route.path==='/shopcart'}" @click="goto('/shopcart')">
        <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
        <span>购物车</span>
      </span>

      <span class="myepet-a guide_item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
        <span class="item_icon">
        <i class="iconfont icon-xiaolian"></i>
        </span>
        <span>我的E宠</span>
      </span>
    </div>
</template>
<script type="text/javascript">
  export default{
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  #footer-waper
    top-border-1px(pink)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color lightgreen

</style>
