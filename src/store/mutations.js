/**
 * Created by HP on 2018/3/14.
 */
import {RECEIVE_CATES} from './mutation-types'

export default {
  [RECEIVE_CATES](state,{cates}){
    state.cates = cates
  }
}
