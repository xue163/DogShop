<template>
  <div id="login-wrap">
  <header>
    <!--头部区-->
    <div class="login-bg">
      <div class="head-top">
        <a href="javascript:;" class="aback" @click="goto"></a>
        <a href="javascript:;" class="aback2">注册</a>
      </div>
    <div class="head-bottom">
      <a href="javascript:;" >普通登录
      <i class="jiao1" style="display:none"></i>
      </a>
      <a href="javascript:;" >手机动态密码登录
      <i class="jiao2"></i>
      </a>
    </div>
    </div>
    <!--登录区-->
    <div class="login">
      <form class="login-form">
        <!--普通登录-->
         <div class="putong" style="display: none">
           <div class="putong-tops">
           <div class="putong-top">
             <span class="icon1"></span>
             <input type="text" class="text" placeholder="手机号/邮箱/用户">
           </div>
           </div>
           <div class="putong-bottoms">
           <div class="putong-top">
             <span class="icon1"></span>
             <input type="text" placeholder="输入密码">
           </div>
           </div>
         </div>
        <!--手机动态密码登录-->
          <div class="phone">
             <!---->
            <div class="phone-tops">
              <div class="putong-top">
                <span class="icon1"></span>
                <input type="text" class="text" placeholder="已注册的手机号">
              </div>
            </div>
            <!--获取一次性验证码-->
            <div class="phone-middle">
                <span class="icon1"></span>
                <input type="text" class="text" placeholder="请输入图片内容">
                <img src="./image/seccode.jpg" >
            </div>
            <!--获取动态密码-->
            <div class="phone-bottom">
              <span class="icon2"></span>
              <input type="text" placeholder="动态密码">
              <a href="javascript:;">获取动态密码</a>
            </div>
          </div>
         <!--完成-->
        <p class="p1">忘记密码？</p>
        <input type="submit" value="登录" class="sub">
        <!--支付宝微信登录-->
        <div class="three">
          <p>合作网站登录</p>
          <a href="javascript:;">
            <img src="./image/zhifu-icon.png" >
          </a>
          <a href="javascript:;">
            <img src="./image/qq-icon.png" >
          </a>
        </div>
      </form>
    </div>
  </header>
  </div>
</template>
<script type="text/javascript">
  export default{
    methods:{
      goto(){
        this.$router.back()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
#login-wrap
   width 100%
   header
     overflow hidden
     padding-bottom 60px
     .login-bg
       position relative
       background-image url("./image/img1.png")
       background-size 100%
       width 100%
       height 174px
       .head-top
         width 100%
         height 50px
         position relative
         left 16px
         color white
         .aback
           position absolute
           display block
           background-image url("./image/img2.png")
           background-repeat no-repeat
           background-size 12px 17px
           width 22px
           height 20px
           margin-top 16px
         .aback2
           position absolute
           color #fff
           right 29px
           top 16px
       .head-bottom
         height 45px
         background rgba(255,255,255,0.3)
         position absolute
         bottom 0
         left 0
         right 0
         display flex
         padding-bottom 10px
         box-sizing  border-box
         >a
           flex 1
           color #fff
           font-size 15px
           line-height 45px
           text-align center
           .jiao1
             border-left 10px solid transparent
             border-right 10px solid transparent
             border-bottom 10px solid #fff
             position absolute
             bottom 0
             left 80px
           .jiao2
             border-left 10px solid transparent
             border-right 10px solid transparent
             border-bottom 10px solid #fff
             position absolute
             bottom 0
             right  80px

     .login  //登录区
       .putong
         text-align center
         .putong-tops
           input-text(ico2)
         .putong-bottoms
           input-text(ico1)


       .phone
         input-text(phone)
         overflow hidden
         &>.phone-middle
           border-bottom 1px solid #e2e2e2
           width 90%
           height 36px
           padding-left 20px
           margin-left 10px
           &>.icon1
             background-image url("./image/ico1.png")
             background-size 100%
             background-repeat no-repeat
             display inline-block
             width 17px
             height 21px
             margin-left -8px
             margin-right 5px
         &>.phone-bottom
           border-bottom 1px solid #e2e2e2
           width 90%
           padding-top 15px
           padding-left 20px
           margin-left 10px
           &>.icon2
            background-image url("./image/ico1.png")
            background-size 100%
            background-repeat no-repeat
            display inline-block
            width 17px
            height 21px
            margin-left -8px
            margin-right 5px
           >a
             width 100px
             height 23px
             text-align center
             line-height 23px
             display inline-block
             border 1px solid orange
             border-radius 3px
             font-size 12px
             color red



     .p1
       color #898989
       float right
       margin 5px 28px 0px
     .sub
       background #2ec975
       width 80%
       display inline-block
       height 40px
       text-align center
       line-height 30px
       margin  12px 10%
       font-size 15px
       border-radius 5px
       color #fff

     .three
       margin-top 50px
       text-align center
       color #ddd
       &>a
         width 60px
         height 60px
         &>img
           width 60px
           height 60px
           margin-right 30px


  /*fafa*/
</style>
