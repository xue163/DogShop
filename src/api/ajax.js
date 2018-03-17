import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {

    let promise

    //判断类型是否是get的类型
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      //如果是的话那就遍历data中的数据的名字
      Object.keys(data).forEach(key => {
        //得到中的每一个数据的名字
        dataStr += key + '=' + data[key] + '&'
        //最后返回的是我们端口号后面的值
        //dataStr =''+key+data[key]+longitude=116.36867
        //http://localhost:3000/shops?latitude=40.10038&longitude=116.36867
      })
      //如果我们后面不是空串的情况下
      if (dataStr !== '') {
        //那就从第一位开始截取，截取到最后&符号后面的值
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        //最后返回url路径+后面的名字
        url = url + '?' + dataStr
      //http://localhost:3000/index_category
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
