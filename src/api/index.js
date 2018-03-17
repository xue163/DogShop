/**
 * Created by HP on 2018/3/15.
 */
//第二页分类名称
import axios from 'axios'

export const getURL = (url) => axios.get(url)
//短信验证码获取
export const reqmsgcode = (phone) =>axios.get('/api/sendcode',{phone})
//一次性验证码获取
export const reqcodelogin = (phone,code) =>axios.post('/api/login_sms',{phone,code})





