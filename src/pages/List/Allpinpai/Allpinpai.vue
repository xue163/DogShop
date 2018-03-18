<template>
  <div id="all-wrap">
    <div class="pinpai">
      <Aima :title="title"/>

      <div class="content-wrap" >
        <!--右侧字母栏-->
      <div class="letter" v-if="allpinpai">
        <div class="menu-letter" :class="{on:index===currentIndex}" v-for="(b,index) in allpinpai" :key="index" @click="goto(index)">
          <span >{{b.order}}</span>
        </div>
      </div>
        <!--左侧内容区-->
       <div class="brand" ref="brand" >
       <div v-if="allpinpai">
          <div class="content"   v-for="(a,index1) in allpinpai" :key="index1">
            <div class="name" >{{a.order}}</div>
            <a class="brand-wrap" v-for="(b,index2) in a.list">
              <div class="brand-img">
                <img :src="b.logo" >
              </div>
              <div class="brand-name">
                <p class="ft1">{{b.name}}</p>
                <p class="ft2">{{b.address}}</p>
              </div>
            </a>
          </div>
       </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Aima from '../../../components/Aima/Aima.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    data(){
      return {
        title: '全部品牌',
//        currentIndex:0,
        scrollY:'',//左侧
        tops:[]
      }
    },
    computed: {
      ...mapState(['allpinpai']),
      currentIndex(){
        const {scrollY,tops} =this
        return tops.findIndex((top,index) =>scrollY>=top&&scrollY<tops[index+1])
      }
    },
    mounted(){
        this.$store.dispatch('reqAllpinpai',(()=>{
        this.$nextTick(() =>{
        this._initScroll()
          this._initTop()
        })
      }))
    },
    methods:{
      _initScroll(){
        this.scroll = new BScroll(this.$refs.brand,{
          probeType:3,
          click:true
        })
        this.scroll.on('scroll',(pos) =>{
          this.scrollY = Math.abs(pos.y)//得到滑动的所有距离
        })
      },
      //初始化所有的tops每一个的高度
      _initTop(){
        //初始化tops:[A的高度,A+B高度,A+B+C高度]
        const tops =[]
        let top = 0
        tops.push(top)
        //得到每一个ABCD
        const lis = document.getElementsByClassName('content')
        //获取每一个左侧A,B,C的高度
        Array.prototype.slice.call(lis).forEach((li,index) =>{
          top += li.clientHeight
          tops.push(top)//得到所有tops的高度
          this.tops = tops
        })
      },

      //点击右侧对应出现左侧相对应的列表
      go(index){
        this.currentIndex=index
        const tops = this.tops[index]

        this.scrollY = tops
        this.scroll.scrollTo(0,-tops,300)
      }
    },

    components: {Aima}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixin.styl"
  #all-wrap
    .pinpai
      .content-wrap
        bottom-border-1px(#ddd)
        position relative
        margin-top 50px
        .letter
          position fixed
          right 0
          top 130px
          z-index 100
          bottom 0
          height 100%
          .menu-letter
            line-height 100%
            &.on
              color red
            >span
              display block
              font-size 12px
              margin-top 4px
              height 12px
        .brand
          height 600px
          .content
            .name
              line-height 24px
              width 100%
              background  #f3f4f5
              height 24px
              font-size 12px
              /*padding-left 10px*/
            .brand-wrap
              display block
              background #fff
              color #000
              height 64px
              padding-top 10px
              .brand-img
                border 1px solid #f3f4f5
                width 30%
                height 50px
                float left
                margin-left 10px
                >img
                  width 100%
              .brand-name
                float left
                color #999
                font-size 12px
                margin 5px 0 5px 20px
                line-height 25px
                .ft1
                  font-size 14px
                .ft2
                  font-size 12px
                  color #999

    /*sdfa*/

</style>
