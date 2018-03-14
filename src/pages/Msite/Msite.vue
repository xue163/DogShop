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
     <!--淘抢购-->

    </div>
</template>
<script type="text/javascript">
  import Header from '../../components/Header/Header.vue'
  import BSroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default{
    mounted(){

      this.$nextTick(() => {
        //轮播图
        const swiper = new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
        //最外层橡皮筋效果
//        new BSroll('#wrap',{
//          scrollY:true,
//          click:true
//        })

      })
    },
    components:{Header}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap
    background #ddd
    width 100%
    height 100%
    position relative
    .swiper-container
      margin-top 50px
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
      height 40px
      img
        width 100%
        height 98px
      .title
        position relative
        margin-top 10px
        width 100%
        overflow hidden













    /*nammag*/

</style>
