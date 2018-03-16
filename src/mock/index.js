/**
 * Created by HP on 2018/3/15.
 */
import Mock from 'mockjs'
import data from './data.json'

//第一页
Mock.mock('/homepage',{code:0,data:data.homepage})//默认为true

//第二页分类
Mock.mock('/cates',{code:0,data:data.cates})
//第二页品牌
Mock.mock('/brand',{code:0,data:data.brand})

