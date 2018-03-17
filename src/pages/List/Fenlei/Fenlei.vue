<template>
  <div id="tab1" >
    <div class="tab-left" ref="ul1">
    <ul class="tab-ul" >
      <li @click="addClass(index)" :class="{on:index===currentIndex}"  v-for="(cate,index) in cates" :key="index">
        <span>{{cate.name}}</span>
      </li>
    </ul>
    </div>
    <!--右侧产品展示区-->
    <div class="tab-right" ref="tabRight" v-if="cates[currentIndex]">
      <!--全部商品区-->
      <div>
      <div  v-for="(item,index) in cates[currentIndex].cate_list" :key="index">
        <!--上面的为您推荐，全部商品-->
        <div class="right-top" v-if="item.type===0">
          <div class="title">
            <span>{{item.title}}</span>
            <img v-lazy="item.rigth_img.image" v-if="item.rigth_img.image">
          </div>
          <ul class="pros">
            <li v-for="(item2,index) in item.list" :key="index">
              <img v-lazy="item2.photo" >
              <span>{{item2.name}}</span>
            </li>
          </ul>
        </div>
         <!--热门品牌-->
        <div class="right-bottom" v-if="item.type===2">
          <p class="p1">{{item.title}}</p>
          <ul class="props">
            <li v-for="(item2,index) in item.list" :key="index">
              <img v-lazy="item2.logo">
              <div>{{item2.name}}</div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    data(){
      return{
        currentIndex:0
      }
    },
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
       new BScroll(this.$refs.tabRight,{
          click:true
        })
      },
      addClass(index){
        this.currentIndex = index
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
   height 577px
   .tab-left
     float left
     width 85px
     height 577px
     .tab-ul
      background #fff
      >li
        /*width 70px*/
        height 50px
        border-bottom 1px solid #f3f4f5
        font-size 13px
        text-align center
        line-height 50px
        &.on
          background: #f3f4f5;
          color: #ed4044;
  .tab-right
    width calc(100% - 100px)
    float right
    height 577px
    overflow hidden
    .right-top
      bottom-border-1px(#ddd)
      background #fff
      padding-bottom 10px
      overflow hidden
      display block
      .title
        margin-top 10px
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
      background #fff
      display block
      .p1
        bottom-border-1px(#ddd)
        height 42px
        line-height 42px
      .props
        text-align center
        overflow hidden
        font-size 12px
        >li
          float left
          width 50%
          text-align center
          margin-top 20px
          white-space nowrap
          img
            width 50%




 /*width 10px*/

      /*fdag*/
   //background fdaf

</style>
