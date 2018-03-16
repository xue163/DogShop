<template>
  <div id="cart">
  <header>
    <a href="javascript:;" class="aback" @click="goback">
    </a>
    <span class="topbar-title">购物车</span>
    <span class="erweima" @click="show"></span>
  </header>
    <!--点击显示隐藏区域-->
    <div class="header-quick" v-show="isShow" >
      <a href="javascript:;">
        <span class="icon1"> </span>
        <p>首页</p>
       </a>
      <a href="javascript:;">
        <span class="icon2"> </span>
        <p>商品分类</p>
      </a>
      <a href="javascript:;">
        <span class="icon3">
        <em>0</em></span>
        <p>购物车</p>
      </a>
      <a href="javascript:;">
        <span class="icon4"> </span>
        <p>我的e宠</p>
      </a>
    </div>
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
  export default{
     data(){
       return{
         isShow:false
       }
     },
    methods:{
      show(){
        this.isShow = !this.isShow
      },
      goback(){
        this.$router.back()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
#cart
  header
    bottom-border-1px(#ddd)
    position fixed
    top 0
    left 0
    right 0
    height 50px
    line-height 50px
    .aback
       display inline-block
       background-image url("./image/icon1.png")
       background-repeat no-repeat
       background-size 9px 17px
       width 22px
       height 20px
       margin-top 16px
       margin-left 10px
    .topbar-title
       display inline-block
       width 80%
       text-align center
       font-size  19px
    .erweima
       width 30px
       height 30px
       display inline-block
       background-image url("./image/erweima.png")
       background-repeat no-repeat
       background-size 20px 20px
       position absolute
       top 17px
       right 0
  .header-quick
    margin-top 55px
    width 100%
    display flex
    justify-content center
    align-items center
    padding-bottom 10px
    border-bottom 1px solid #ddd
    background #fff
    >a
      flex 1
      text-align center
      display flex
      flex-direction column
      .icon1
        background-image url("./image/head_icon1.png")
        background-repeat no-repeat
        background-size auto 100%
        height 25px
        margin 0 35px
      .icon2
        background-image url("./image/head_icon2.png")
        background-repeat no-repeat
        background-size auto 100%
        margin 0 35px
        height 25px
      .icon3
        background-image url("./image/head_icon4.png")
        background-repeat no-repeat
        background-size auto 100%
        height 25px
        margin 0 35px
        &>em
          display: inline-block;
          height: 16px;
          width: 14px;
          color: #fff;
          text-align: center;
          line-height: 18px;
          font-size: 12px;
          background: #FF0000;
          border-radius: 1em;
          border: #fff solid 2px;
          position: relative;
          top: -0.6em;
          left: 1em
      .icon4
        background-image url("./image/head_icon5.png")
        background-repeat no-repeat
        background-size auto 100%
        height 25px
        margin 0 35px
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
