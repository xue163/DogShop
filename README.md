# day01
## 1.使用
 头部设置静态页面，引入至Msite
 轮播图使用swiper
 橡皮筋效果使用better-scroll
# day02
## 1.使用 
 结果：到第四个静态页面<br/>
 中间遇到的问题：头部设置固定定位，下面元素覆盖头部
 解决：给头部固定定位以后，设置一个背景色同时设置z-index提高层级
 # day03
 ## 1.使用 
 关于橡皮筋的问题
 关于better-scroll原理，
 1.给父容器定高，子容器高度超过父容器才能进行滑动，<br>
 2.给better-scroll的第一个子项目不能设置padding，但是可以设置margin,<br/>
 3.可以采用定位的方式将父容器定高，子容器再分贝设置高度<br/>
 ##2.列表点击变色
 初始值currentindex为0，<br>
 当点击li时保存index<br>
 只有当index===currentindex颜色才会改变<br>
##3.遍历元素超过三层
 当遍历元素超过三层，在其父元素加上v-if判断是否存在<br>
##4.点击左侧商品对应出现右侧产品
保存左侧点击时出现的index，右侧再次遍历时只需遍历对应左侧index的元素就可以<br>
##5.样式重复
在stylus样式里面加上scoped<br>
##6.点击回退按钮不能用
在切换路由的时候写的是replace，改成push<br>
##7.底部的显示与隐藏
在路由组件中添加meta标签，做一个标记<br>
    meta:{
        showFoot:true
      }<br>
foot标签设置在哪里显示与隐藏 <br>
<FooterGuild v-show<="$route.meta.showFoot"/><br>
##8.点击footer导航无法改变样式
footer样式里面使用class="{on:$route.path==='/sort'}"中$route.path
应该是/sort/tab1或/sort/tab2。 全等判断为false,无法绑定on <br>
##9.跨域请求代理问题
proxyTable: {
  '/api': { // 匹配所有以 '/api'开头的请求路径 <br>
    target: 'http://localhost:3000', // 代理目标的基础路径<br>
    changeOrigin: true, // 支持跨域<br>
    pathRewrite: {// 重写路径: 去掉路径中开头的'/api'<br>
      '^/api': ''
    }
  }
}
##10.登录注册
1.普通方法登录<br>
 计算：获取input里面输入的值,此时用计算属性判断当前在输入框中所输入<br>
 值用正则判断输入的是否正确，返回值为布尔类型<br>
 方法：<br>
 当我们点击提交按钮时，首先看看是否是是正确计算属性<br>
 不是：显示提示框，以及显示提示的文本<br>
 提示框：<br>
 单独定义的组件,通过标签传入输入提示文本，v-if输入错误则显示，点击<br>
 确定按钮则关闭<br>
 ##11.全部产品页面
 全部产品点击右侧字母，出现对应品牌的字母<br>
 
