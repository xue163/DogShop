<template>
  <div id="wrap">
    <Header/>
   <!--首页轮播-->
    <div class="swiper-container">
      <nav class="msite_nav border-1px">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" >
              <a href="javascript:" class="link_to_food" >
                <img class="img1" src="./images/baolu.jpg">
                <img class="img2" src="./images/dog.jpg" >
              </a>
            </div>
            <div class="swiper-slide" >
              <a href="javascript:" class="link_to_food" >
                <img class="img1" src="./images/fumo.jpg">
                <img class="img2" src="./images/dog.jpg" >
              </a>
            </div>
            <div class="swiper-slide" >
              <a href="javascript:" class="link_to_food" >
                <img class="img1" src="./images/haiwai.jpg">
                <img class="img2" src="./images/dog.jpg" >
              </a>
            </div>
            <div class="swiper-slide" >
              <a href="javascript:" class="link_to_food" >
                <img class="img1" src="./images/ouguan.jpg">
                <img class="img2" src="./images/dog.jpg" >
              </a>
            </div>
            <div class="swiper-slide" >
              <a href="javascript:" class="link_to_food" >
                <img class="img1" src="./images/zhuliang.jpg">
                <img class="img2" src="./images/dog.jpg" >
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
    </div>
   <!--首页列表区-->
    <div class="nav-list">
      <ul class="nav-top">
        <li class="f1">
          <a href="javascript:;">
            <img src="./nav/img1.jpg" >
          </a></li>
        <li class="f1">
          <a href="javascript:;">
            <img src="./nav/img2.jpg" >
          </a></li>
        <li class="f1">
          <a href="javascript:;">
            <img src="./nav/img3.jpg" >
          </a></li>
        <li class="f1">
          <a href="javascript:;">
            <img src="./nav/img4.jpg" >
          </a></li>
        <li class="f1">
          <a href="javascript:;">
            <img src="./nav/img5.jpg" >
          </a></li>
        <li class="f1">
          <a href="javascript:;">
            <img src="./nav/img6.jpg" >
          </a></li>
        <li class="f1">
          <a href="javascript:;">
            <img src="./nav/img7.jpg" >
          </a></li>
        <li class="f1">
          <a href="javascript:;">
            <img src="./nav/img8.jpg" >
          </a></li>
        <li class="f1">
          <a href="javascript:;">
            <img src="./nav/img9.jpg" >
          </a></li>
        <li class="f1">
          <a href="javascript:;">
            <img src="./nav/img10.jpg" >
          </a></li>
      </ul>
    </div>
    <!--正品秒杀大牌一折起-->
    <div class="banner_item">
     <img class="img-1" src="./nav/img11.jpg" >
     </div>
     <!--品牌力量-->
    <div class="powwer">
      <a href="javascript:;" >
      <img src="./nav/img14.jpg" class="pinpai">
      </a>
      <a href="javascript:;" >
      <img src="./nav/img15.gif" class="gif">
      </a>
    </div>
     <!--VIP尊享-->
    <div class="vip">
      <a href="javascript:;" >
        <img src="./nav/img16.jpg" class="vipp">
      </a>
    </div>
    <!--vip活动-->
    <div class="action">
      <div class="action-left">
        <a href="javascript:;">
          <img src="./nav/img17.jpg" alt="">
        </a>
        <a href="javascript:;">
          <img src="./nav/img18.jpg" alt="">
        </a>
      </div>
      <div class="action-right">
        <a href="javascript:;">
          <img src="./nav/img19.jpg" alt="">
        </a>
        <a href="javascript:;">
          <img src="./nav/img20.jpg" alt="">
        </a>
      </div>
    </div>
    <!--1折团-->
    <div class="yizhe">
      <img src="./nav/img21.jpg" class="pointer">
      <a href="javascript:;" class="pointer-bottom">
        <img src="./nav/img22.jpg">
      </a>
    </div>
    <!--大牌好货-->
    <div class="shops">
      <div class="divimg">
        <a href="javascript:;" v-for="(img,index) in divimg" :key="index" class="default_bg">
          <img :src="`../../../static/image/divimg-${img}`">
        </a>
      </div>
    </div>
    <!--最惨奖-->
    <div class="jiangli">
      <img src="./food-img/img1.jpg" class="jiang1" >
      <img src="./food-img/img2.jpg" class="jiang2">
      <div>
        <img src="./food-img/img3.jpg" style="height: 90px" >
      </div>
      <div class="jiang-food" >
          <img class="shafa" src="./food-img/img4.jpg" >
          <div class="jiang-right">
            <img src="./food-img/img5.jpg">
            <img src="./food-img/img6.jpg" >
        </div>
      </div>
    </div>
    <!--特色栏目-->
    <div class="tese">
        <a href="javascript:;" v-for="(img,index) in divimg" :key="index" class="default_bg">
          <img :src="`../../../static/image/divimg-${img}`">
        </a>
    </div>
    <!--底部栏-->
    <div class="footer">
        <div class="footer-top">
        <span>触屏版</span>
        <span>
          <a href="javascript:;"> 手机客户端</a>
        </span>
        <span>
          <a href="javascript:;"> 关于我们</a>
        </span>
        <span>
          <a href="javascript:;">联系我们</a>
        </span>
        </div>
      <div class="footer-bottom">
        © wap.epet.com 版权：重庆易宠科技有限公司
      </div>

    </div>
    <!--眨眼狗-->
    <span class="dog"></span>
    </div>
</template>
<script type="text/javascript">
  import Header from '../../components/Header/Header.vue'
  import BSroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default{
    data(){
      return{
        divimg:['img1.jpg','img2.jpg','img3.jpg','img4.jpg',
          'img5.jpg','img6.jpg','img7.jpg', 'img8.jpg']

      }
    },
    mounted(){

      this.$nextTick(() => {
        //轮播图
        const swiper = new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    },
    components:{Header}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap
    background #ddd
    width 100%
    position relative
    padding-bottom 50px
    .swiper-container
      margin-top 40px
      width 100%
      .swiper-slide
        width 100%
        height 431px
        .img1
          width 100%
          height 160px
          vertical-align middle
        .img2
          width 100%
          height 271px
          vertical-align middle
    .nav-list
      width 100%
      overflow hidden
      height 190px
      li
        width 20%
        float left
        font-size 0
        img
          font-size 0
          width 100%
          height 100%
    .banner_item
      width 100%
      height 98px
      img
        width 100%
        height 98px

    .powwer
      width 100%
      font-size 0
      .pinpai
        width 100%
        height 93px
      .gif
        width 100%
        height 183px

    .vip
      .vipp
        width 100%
        height 95px
    .action
      .action-left
        &>a
          width 50%
          height 99.5px
          float left
          &>img
            width 100%
            height 100%
      .action-right
        &>a
          width 50%
          height 99.5px
          float left
          &>img
            width 100%
            height 100%
    .yizhe
      font-size 0
      .pointer
        width 100%
        height 100px
      .pointer-bottom
        width 100%
        &>img
          width 100%


    .shops
      width 100%
      overflow hidden
      .default_bg
        width 50%
        height 225px
        float left
        &>img
          width 100%
          height 100%

    .jiangli
      font-size 0
      &>.jiang1
        height 90px
        width 100%
      &>.jiang2
        height 198px
        width 100%

      .jiang-food
        width 100%
        overflow hidden
        .shafa
          width 50%
          height 340px
          float left
        .jiang-right
          width 50%
          float left
          &>img
            display block
            width 100%

    .tese
      width 100%
      overflow hidden
      .default_bg
        width 50%
        height 128px
        float left
        &>img
          width 100%
          height 100%

    .footer
      background  #fff
      text-align center
      font-size 14px
      .footer-top
        padding 15px 0 5px
      .footer-bottom
        text-align: center;
        margin: 10px 10px 0 10px;
        padding-bottom: 25px;
        font-size: 12px;
    .dog
      position fixed
      right 0
      bottom 100px
      width 42.5px
      height 47px
      z-index 20
      background-image: url('./godog.png')
      background-size 85px 47px
      animation: godog 1s steps(1,end) infinite
    @keyframes godog
      0%
        background-position 0 0
      50%
        background-position: -42.5px 0
      100%
        background-position: 0 0




  /*nammag*/

</style>
