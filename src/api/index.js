/**
 * Created by HP on 2018/3/15.
 */
//第二页分类名称
import axios from 'axios'

export const getURL = (url) => axios.get(url)
//短信验证码获取
export const reqmsgcode = (phone) =>axios.get('/api/sendcode',{phone})
// export const reqmsgcode = () =>axios.get('/api/sendcode',)
//普通登录
export const pwdLogin =({name,pwd,captcha}) =>axios.post('/api/login_pwd',{name,pwd,captcha})
//手机登录
export const reqcodelogin = ({phone,code}) =>axios.post('/api/login_sms',{phone,code})


