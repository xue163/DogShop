<template>
  <div id="cart">
    <Aima :title="title"/>
    <!--下面大的购物车的图片-->
    <div class="shopCart">
      <div class="u-emtcoupon"></div>
      <div class="cc">购物车是空的</div>
      <div class="mr">
        <span class="mr1">去逛逛</span>
        <span class="mr2">我的收藏</span>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Aima from '../../components/Aima/Aima.vue'
  export default{
     data(){
       return{
         title:'购物车'
       }
     },
    components:{Aima}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  #cart
    .shopCart
      width 100%
      text-align center
      .u-emtcoupon
        background-image url("./image/cart-ico.png")
        background-position 0 -160px
        background-size 105px auto
        width 100px
        height 100px
        margin 100px auto 20px
      .cc
        color #dbdbdb
      .mr
        &>span
          display inline-block
          border-radius 5px
          border 1px solid #999
          height 35px
          line-height 35px
          width 87px
          color #dbdbdb
          margin-top 10px
          &.mr1
            margin-right 10px
  /*fdafa*/
</style>
