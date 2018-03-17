/**
 * Created by HP on 2018/3/14.
 */
import {getURL} from '../api'
import {RECEIVE_CATES,RECEIVE_BRAND,RECEIV_HOME,RECEIVE_PINPAI} from './mutation-types'

export default {
  //获取分类-分类列表
 async reqcates ({commit},callback){
   const result = (await getURL('/cates')).data
   if(result.code===0){
     const cates = result.data
     commit(RECEIVE_CATES,{cates})
     callback&&callback()
  }
 },
  //获取分类-品牌列表
  async reqbrand({commit}){
   const result = (await getURL('/brand')).data
    if(result.code===0) {
     const brand = result.data
      commit(RECEIVE_BRAND,{brand})
    }
  },
//获取首页-导航区
  async reqmenus({commit},callback){
   const result = (await getURL('/home')).data
    if(result.code===0){
     const home = result.data
      commit(RECEIV_HOME,{home})
      callback&&callback()
    }else{
      console.log('首页请求失败')
    }
  },
  //获取所有品牌信心
 async reqAllpinpai({commit}){
    const result = (await getURL('/Allpinpai')).data
   if(result.code===0){
      const Allpinpai = result.data
      commit(RECEIVE_ALLPINPAI,{Allpinpai})
   }
  }
}
