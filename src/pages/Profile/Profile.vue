<template>
  <div id="login-wrap">
  <header>
    <!--头部区-->
    <div class="login-bg">
      <div class="head-top">
        <span  class="aback" @click="$router.back()"></span>
        <a href="javascript:;" class="aback2">注册</a>
      </div>
    <div class="head-bottom">
      <a href="javascript:;" @click="login">普通登录
      <i class="jiao1" v-show="putong"></i>
      </a>
      <a href="javascript:;" @click="login">手机动态密码登录
      <i class="jiao2" v-show="phone"></i>
      </a>
    </div>
    </div>
    <!--登录区-->
    <div class="login">
      <form class="login-form" @submit.prevent="loginto">
        <!--普通登录-->
         <div class="putong"  v-show="putong">
           <div class="putong-tops">
           <div class="putong-top">
             <span class="icon1"></span>
             <input type="text" class="text" placeholder="手机号/邮箱/用户" v-model="putongname">
           </div>
           </div>
           <div class="putong-bottoms">
           <div class="putong-top">
             <span class="icon1"></span>
             <input type="text" placeholder="输入密码" v-model="putongpwd">
           </div>
           </div>
         </div>
        <!--手机动态密码登录-->
          <div class="phone" v-show="phone" >
             <!---->
            <div class="phone-tops">
              <div class="putong-top">
                <span class="icon1"></span>
                <input type="text" maxlength="11" class="text" placeholder="已注册的手机号" v-model="phonename">
              </div>
            </div>
            <!--获取一次性验证码-->
            <div class="phone-middle">
                <span class="icon1"></span>
                <input type="text" class="text" placeholder="请输入图片内容" v-model="captcha">
                <img :src="url" @click="changeURL"    style="width: 100px;float: right" >
            </div>
            <!--获取动态密码-->
            <div class="phone-bottom">
              <span class="icon2"></span>
              <input type="text" placeholder="动态密码" v-model="code">
              <a href="javascript:;" v-show="!computeTime" @click="getCode">获取动态密码</a>
              <span v-show="computeTime">{{computeTime}} s</span>
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
    <AlertTip v-if="alertShow" :alertText="alertText" @closeTip="closeTip"/>
  </div>
</template>
<script type="text/javascript">
  import {reqmsgcode,pwdLogin,reqcodelogin} from '../../api/index'
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  export default{
    data(){
      return {
        putong:true,//显示普通登录
        phone:false,//显示手机动态码登录
        url:'https://wap.epet.com/share/seccode.html?hash=5157',//获取一次性验证码
        alertShow:false,//提示信息
        alertText:'',//提示文本信息
        putongname:'',//普通登录的用户名和邮箱
        putongpwd:'',//普通登录的密码
        phonename:'',//手机登录
        captcha:'',//一次性验证码输入
        code:'',//动态密码
        computeTime:0//倒计时
      }
    },
    methods:{
      closeTip(){
        this.alertShow = false
      },
      goto(){   //回退按钮
        this.$router.back()
      },
      login(){//手机短信登录切换
        this.putong = !this.putong
        this.phone = !this.phone
      },

      changeURL(){//点击一次性验证码进行切换
        this.url = 'http://localhost:3000/captcha?t='+Math.random()
      },
      //点击获取动态码
   async getCode(){
        this.computeTime = 60
        let t = setInterval(()=>{
          this.computeTime--
          if(this.computeTime<=0){
            clearInterval(t)
          }
        },1000)
          const {phonename} =  this//发送手机号收取短信验证码
         const result = await reqmsgcode(phonename)
//     const result = await reqmsgcode()
       if(result.code===1){
          this.alertShow = true
         this.alertText = result.msg
       }
     console.log(111)
      },


      //提交按钮
     async loginto(){
           let result
        if(this.putong){//如果是普通登录
          const {rightPhone,putongpwd,putongname} = this
         if(!rightPhone) {//用户手机号邮箱验证
            this.alertShow = true
           this.alertText = '普通登录的请输入正确的手机号邮箱'
           return
         }else if(!putongpwd){//普通登录验证邮箱号
           this.alertShow = true
           this.alertText = '普通登录的请输入密码'
           return
         }else{
             result = await pwdLogin(putongname,putongpwd,'123')
         }
        }else  if(this.phone){//如果是手机动态验证码登录
          const {phonename,captcha,code} = this //获取用户名，一次性验证码，动态密码
            if(!phonename){
              this.alertShow = true
              this.alertText = '请输入正确的用户名'
              return
            }else if(!captcha){
              this.alertShow = true
              this.alertText = '请输入正确的验证码'
              return
            }else{
               result = await reqcodelogin(phonename,code)
            }

            if(result.code===0){
              console.log('短信发送成功')
            }
          if(result.code===1){
            this.alertShow = true
            this.alertText = result.msg//如果输入的一次性验证码不正确，交给后台去验证，返回后台的验证信心
          }
        }
      }
    },
    computed:{
      rightPhone(){
        return /^1\d{10}$/.test(this.putongname)&&/[a-zA-Z0-9_-]/.test(this.putongname)
      }
    },
    components:{AlertTip}
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
