<template>
  <div id="tab1">
    <div ref="ul1">
    <ul class="tab-ul" >
      <li @click="addClass(index)" v-for="(cate,index) in cates" :key="index">
        <span>{{cate.name}}</span>
      </li>
      <!--<li>
        <span>狗狗主粮</span>
      </li>
     <li>
        <span>狗狗零食</span>
      </li>
      <li>
        <span>狗狗服饰</span>
      </li>
      <li>
        <span>狗狗窝垫</span>
      </li>
      <li>
        <span>狗狗生活</span>
      </li>
      <li>
        <span>狗狗玩具</span>
      </li>
      <li>
        <span>狗狗保健</span>
      </li>
      <li>
        <span>狗狗医疗</span>
      </li>
      <li>
        <span>狗狗牵引</span>
      </li>
      <li>
        <span>狗狗美容</span>
      </li>
      <li>
        <span>狗狗周边</span>
      </li>
      <li>
        <span>狗狗清洁</span>
      </li>-->
    </ul>
    </div>
    <!--右侧产品展示区-->
    <!--<div ref="tab">-->
    <div class="tab-right">
      <!--全部商品区-->
      <div class="right-top">
         <div class="title">
           <span>狗狗主粮</span>
           <img src="./icon2.png">
         </div>
         <ul class="pros">
             <li>
               <img src="./icon1.jpg" >
               <span>进口狗粮</span>
             </li>
             <li>
               <img src="./icon1.jpg" >
               <span>进口狗粮</span>
             </li>
             <li>
               <img src="./icon1.jpg" >
               <span>进口狗粮</span>
             </li>
             <li>
               <img src="./icon1.jpg" >
               <span>进口狗粮</span>
             </li>
           <li>
             <img src="./icon1.jpg" >
             <span>进口狗粮</span>
           </li>
           <li>
             <img src="./icon1.jpg" >
             <span>进口狗粮</span>
           </li>
         </ul>
      </div>
      <div class="right-bottom">
          <p class="p1">热门品牌</p>
          <ul class="props">
            <li>
              <img src="./icon3.jpg">
              <span>sddfsdf</span>
            </li>
            <li>
              <img src="./icon4.jpg">
              <span>sddfsdf</span>
            </li>
            <li>
              <img src="./icon3.jpg">
              <span>sddfsdf</span>
            </li>
            <li>
              <img src="./icon4.jpg">
              <span>sddfsdf</span>
            </li>
            <li>
              <img src="./icon3.jpg">
              <span>sddfsdf</span>
            </li>
            <li>
              <img src="./icon4.jpg">
              <span>sddfsdf</span>
            </li>
          </ul>
      </div>
    </div>
    <!--</div>-->
  </div>
</template>
<script type="text/javascript">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    mounted(){
      this.$store.dispatch('reqcates', () => {
          this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    methods:{
      _initScroll(){
        let scrollY =  new BScroll(this.$refs.ul1,{
          scrollY: true,
          click: true
        })
       new BScroll('',{
          click:true
        })
      }
    },
    computed:{
      ...mapState(['cates'])
    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixin.styl"
 #tab1
  background #f3f4f5
  overflow hidden
  .tab-ul
    background #fff
    float left
    margin-right 10px

    >li
      width 70px
      height 50px
      border-bottom 1px solid #f3f4f5
      font-size 13px
      text-align center
      line-height 50px
      &.on
        background: #f3f4f5;
        color: #ed4044;
  .tab-right
    width calc(100%-80px)
    background #fff
    padding-top 10px
    overflow hidden
    .right-top
      bottom-border-1px(#ddd)
      padding-bottom 10px
      overflow hidden
      display block
      .title
        span
          margin-left 10px
          font-size 12px
          color #999
          display inline-block
        >img
          float right
          width 46px
          height 10px
          margin-right 10px
          vertical-align middle
      .pros
        >li
          float left
          text-align center
          margin-top 20px
          width 33.333%
          img
            width 100%
    .right-bottom
      display block
      margin-top 20px
      .p1
        bottom-border-1px(#ddd)
        overflow hidden
        padding-bottom 13px
      .props
        text-align center
        overflow hidden
        >li
          float left
          width 50%
          text-align center
          margin-top 20px
          img
            width 80%




 /*width 10px*/

      /*fdag*/
   //background fdaf

</style>
