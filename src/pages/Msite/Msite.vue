<template>
  <div id="wrap">
    <Header :home="home.menus"/>
   <!--首页轮播-->
    <div class="swiper-container">
      <nav class="msite_nav border-1px">
        <div class="swiper-container ul2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(dogs,index) in home.dog_banner" :key="index">
              <a href="javascript:" class="link_to_food"  >
                <img class="img1" :src="dogs">
                <img class="img2" :src="home.dog_img" >
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
        <li class="f1" v-for="(list,index) in home.menu_list" :key="index">
          <a href="javascript:;">
            <img v-lazy="list" >
          </a></li>
        </ul>
      </div>
      <!--正品秒杀大牌一折起-->
    <div class="banner_item">
     <img class="img-1" v-lazy="home.miaosha" >
     </div>
    <!--秒杀轮播图-->
    <div class="surprise_day ">
     <div class="surprise">
       <img src="./new.png">
       <div class="titimg">
           <span>本场结束</span>
           <span class="time1-1">20</span>
           <span>:</span>
           <span class="time1-1">00</span>
           <img src="./more.png" >
       </div>
     </div>
      <div class="ul1 " >
      <div class="goods-wrap swiper-wrapper ">
      <div class="cred swiper-slide">
        <div class="goodsimg"><img src="./goods.jpg" ></div>
        <p class="p1">￥1.90</p>
        <p class="p2">省17.10</p>
      </div>
      <div class="cred swiper-slide">
        <div class="goodsimg"><img src="./goods.jpg" ></div>
        <p  class="p1">￥1.90</p>
        <p class="p2">省17.10</p>
      </div>
      <div class="cred swiper-slide">
        <div class="goodsimg"><img src="./goods.jpg" ></div>
        <p  class="p1">￥1.90</p>
        <p class="p2">省17.10</p>
      </div>
      <div class="cred swiper-slide">
        <div class="goodsimg"><img src="./goods.jpg" ></div>
        <p  class="p1">￥1.90</p>
        <p class="p2">省17.10</p>
      </div>
      <div class="cred swiper-slide">
        <div class="goodsimg"><img src="./goods.jpg" ></div>
        <p  class="p1">￥1.90</p>
        <p class="p2">省17.10</p>
      </div>
      <div class="cred swiper-slide">
        <div class="goodsimg"><img src="./goods.jpg" ></div>
        <p  class="p1">￥1.90</p>
        <p class="p2">省17.10</p>
      </div>
      <div class="cred swiper-slide">
        <div class="goodsimg"><img src="./goods.jpg" ></div>
        <p  class="p1">￥1.90</p>
        <p class="p2">省17.10</p>
      </div>
      <div class="cred swiper-slide">
        <div class="goodsimg"><img src="./goods.jpg" ></div>
        <p  class="p1">￥1.90</p>
        <p class="p2">省17.10</p>
      </div>
      </div>
      </div>
    </div>
     <!--品牌力量-->
    <div class="powwer">
      <a href="javascript:;" >
      <img v-lazy="home.brand_power" class="pinpai">
      </a>
      <a href="javascript:;" >
      <img v-lazy="home.gif" class="gif">
      </a>
    </div>
     <!--VIP尊享-->
    <div class="vip">
      <a href="javascript:;" >
        <img v-lazy="home.vip" class="vipp">
      </a>
    </div>
    <!--vip活动-->
    <div class="action">
      <div class="action-left" v-for="(vip,index) in home.vip_services" :key="index">
        <a href="javascript:;">
          <img v-lazy="vip" >
        </a>
       </div>
     </div>
     <!--1折团-->
    <div class="yizhe">
      <img v-lazy="home.dapaituan" class="pointer">
      <a href="javascript:;" class="pointer-bottom">
        <img v-lazy="home.haohuo">
      </a>
    </div>
    <!--大牌好货-->
    <div class="shops">
      <div class="divimg" v-for="(dapai,index) in home.haohuo_list">
        <ul class="dapai-left">
          <li v-for="(img,index) in dapai.left" :key="index" class="default_bg">
            <a href="javascript:;">
            <!--<img v-lazy="`../../../static/image/divimg-${img}`">-->
              <img v-lazy="img">
          </a>
          </li>
        </ul>
        <ul class="dapai-left">
          <li v-for="(img,index) in dapai.right" :key="index" class="default_bg">
            <a href="javascript:;">
              <img v-lazy="img">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--最惨奖-->
    <div class="jiangli">
      <img v-lazy="home.zuican" class="jiang1" >
      <img v-lazy="home.zuican_content" class="jiang2">
      <div>
        <img v-lazy="home.special" style="height: 90px" >
      </div>
      <div class="jiang-food" v-if="home.special_list" >
          <img class="shafa" v-lazy="home.special_list[0]" >
          <div class="jiang-right">
            <img v-lazy="home.special_list[1]">
            <img v-lazy="home.special_list[2]" >
        </div>
      </div>
    </div>
    <!--特色栏目-->
    <div class="tese">
      <img v-lazy="home.lanmu" style="width: 100%;vertical-align: middle" >
        <a href="javascript:;" v-for="(img,index) in home.lanmu_list" :key="index" class="default_bg">
          <!--<img :src="`../../../static/image/divimg-${img}`">-->
          <img v-lazy="img" >
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
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        divimg:['img1.jpg','img2.jpg','img3.jpg','img4.jpg',
          'img5.jpg','img6.jpg','img7.jpg', 'img8.jpg']

      }
    },
    mounted(){
      this.$store.dispatch('reqmenus',()=>{
      this.$nextTick(() => {
        //轮播图
        const swiper = new Swiper('.ul2', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })

        this._initScroll()
      })
      })
    },
    methods:{
     _initScroll(){
       new Swiper('.ul1',{
         freeMode:true,
         slidesPerView:4,
       })
     }
    },
    computed:{
      ...mapState(['home'])
    },
    components:{Header}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap
    background #000
    width 100%
    position relative
    padding-bottom 50px
    .swiper-container
      margin-top 40px
      width 100%
      .swiper-wrapper
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
            vertical-algn middle
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

    .surprise_day
      background #fff
      position relative
      /*height 200px*/
      .surprise
        overflow hidden
        padding 6px
        >img
          width 85px
        .titimg
           float right
           font-size 13px
           >img
             width 67.5px
             vertical-align middle
           .time1-1
              border 1px solid #ddd


      .ul1
        .goods-wrap
           display flex
          .cred
            display flex
            flex-wrap wrap
            justify-content center
            .goodsimg
              >img
                width 80px
            .p1
              color red
              font-size 14px
              margin  5px 0
            .p2
              font-size 12px
              color #999

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
      .dapai-left
        float left
        &>.default_bg
          width 50%
          height 225px
          float left
          img
            width 100%


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
        height 120px
        float left
        &>img
          width 100%
          /*height 100%*/
          vertical-align middle

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
