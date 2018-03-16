/**
 * Created by HP on 2018/3/14.
 */
import {getURL} from '../api'
import {RECEIVE_CATES} from './mutation-types'

export default {
 async reqcates ({commit},callback){
   const result = (await getURL('/cates')).data
   if(result.code===0){
     const cates = result.data
     commit(RECEIVE_CATES,{cates})
     callback&&callback()
  }
 },
  // reqcates({commit}) {
  //   getURL('/cates')
  //     .then((response) => {
  //       const result = response.data
  //       if (result.code === 0) {
  //         const cates = result.data
  //         commit(RECEIVE_CATES, {cates})
  //       }else {
  //         console.log('qingnnn')
  //       }
  //     })
  // },

}
