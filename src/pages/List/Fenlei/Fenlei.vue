<template>
  <div id="tab1">
    <ul class="tab-ul">
      <li class="on">
        <span>为您推荐</span>
      </li>
      <li>
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
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  import BScroll from 'better-scroll'
  export default{
    mounted(){
      this.$nextTick(() =>{
//        new BScroll('#tab1',{
//          click:true
//        })
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 #tab1
  background #f3f4f5
  .tab-ul
    background #fff
    /*margin-right 3px*/
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

      /*fdag*/



</style>
