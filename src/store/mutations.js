/**
 * Created by HP on 2018/3/14.
 */
import {RECEIVE_CATES,RECEIVE_BRAND,RECEIV_HOME,RECEIVE_ALLPINPAI} from './mutation-types'

export default {
  [RECEIVE_CATES](state,{cates}){
    state.cates = cates
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RECEIV_HOME](state,{home}){
    state.home = home
  },
  [RECEIVE_ALLPINPAI](state,{Allpinpai}){
    state.Allpinpai = Allpinpai
  }
}
