/**
 * Created by HP on 2018/3/15.
 */
import Mock from 'mockjs'
import data from './data.json'
import newdata from './newHomePage.json'
import Allpinpai from './pinpai.json'//全部品牌

//第一页用不上
Mock.mock('/homepage',{code:0,data:data.homepage})//默认为true

//新的第一页
Mock.mock('/home',{code:0,data:newdata})

//第二页分类已经用完
Mock.mock('/cates',{code:0,data:data.cates})
//第二页品牌已经用完
Mock.mock('/brand',{code:0,data:data.brand})
//第二页全部品牌
Mock.mock('/Allpinpai',{code:0,data:Allpinpai})

