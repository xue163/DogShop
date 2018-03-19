<template>
  <div class="address-wrap">
    <Aima :title="title"/>
    <div class="wrap">
      <!--动物驿站-->
     <div class="cat-dog">
       <a href="javascript:;" class="f1 on">猫猫站</a>
       <a href="javascript:;" class="f1 ">狗狗站</a>
       <a href="javascript:;" class="f1 ">水族站</a>
     </div>
      <div class="address-box">
        <div class="page-top">
         <span>当前默认地址：</span>
          <v-distpicker type="mobile" province="北京市" city="广州市" area="海珠区"></v-distpicker>
          <ul class="page-bottom">
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Aima from  '../../../components/Aima/Aima.vue'
  import Dpicker from 'v-distpicker'
  export default{
    data(){
      return{
        title:'选择收货地区'
      }
    },
    components:{Aima}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixin.styl"
.address-wrap
  .wrap
    .cat-dog
      width 100%
      background #e7e7e7
      display flex
      justify-content space-around
      padding  10px 0
      >.f1
        width 33.333%
        display block
        color #666
        background #b9b9b9
        font-size 15px
        border-radius 5px
        height 30px
        text-align center
        margin-left 10px
        margin-right 10px
        line-height 30px
        &.on
          color #fff
          background red


    .address-box
      width 100%
      height 40px
      line-height 40px
      background #ffe6d9
      .page-top
        margin-left 10px
        bottom-border-1px(#e7e7e7)
      .page-bottom
         height 40px
         line-height 40px
         >li
           bottom-border-1px(#e7e7e7)
           padding-left 10px

    /*dfa*/
</style>
