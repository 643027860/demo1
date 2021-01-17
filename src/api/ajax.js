import axios from 'axios'
import qs from 'qs'

export default function ajax (url, data={}, type='GET',headers={},json=false) {
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      //准备url query参数数据
      if(data!=={}){
        let dataStr = '' //数据拼接字符串
        Object.keys(data).forEach(key => {
          dataStr += key + '=' + data[key] + '&'
        })
        if (dataStr !== '') {
          dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
          url = url + '?' + dataStr
        }
      }
      // 发送get请求
      promise = axios.get(url,{
        headers
      })
    } else if(type === 'POST'){
      // 发送post请求
      if(json)
        promise = axios.post(url, qs.stringify(data))
      else{
        promise = axios.post(url, data,{
          headers
        })
      }
    }else if(type === 'PUT'){
      // 发送put请求
      if(json)
        promise = axios.put(url, qs.stringify(data))
      else
        promise = axios.put(url, data)
    }else if(type === 'DELETE'){
      // delete,如果服务端将参数当做 java对象来封装接收则 参数格式为：{data: param}
      //如果服务端将参数当做url 参数 接收，则格式为：{params: param}，这样发送的url将变为http:www.XXX.com?a=..&b=..
      promise = axios.delete(url, {data})
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      //reject(error)
      resolve(error)
    })
  })
}
