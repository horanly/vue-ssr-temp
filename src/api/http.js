import axios from 'axios'
import qs from 'qs'

// const BASE_URL = 'http://123.160.223.36:3080'
const BASE_URL = 'http://59.207.62.3:8001/'

axios.defaults.baseURL = BASE_URL

axios.defaults.timeout = 120000 // 设置接口超时时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8' // 设置编码

/*
 *请求前拦截
 *用于处理需要请求前的操作
 */
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/*
 *请求响应拦截
 *用于处理数据返回后的操作
 */
axios.interceptors.response.use(
  response => {
    return new Promise((resolve) => {
      const res = response.data
      resolve(res)
    })
  },
  error => {
    return Promise.reject(error)
  }
)

/*
 *get方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/*
 *以query String格式, 发送post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function postQS (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url,
      qs.stringify(params), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/*
 *发送delete请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function del (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/*
 *发送 put 请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function put (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
