import axios from 'axios';
import { message } from 'antd'

axios.defaults.baseURL = 'http://localhost:3002'

message.config({
  top: 150
})



let hide: any
// 记录请求数量 
let loadingCount: number = 0

const onRequestSuccess = (config: any) => {
  if (!hide) {
    hide = message.loading('加载中')
  } 
  loadingCount++
  if (config.params) config.params._t = Date.now()
  return config
}

const onRequestFail = (err: any) => {
  hide()
  return Promise.reject(err)
}

// TODO: 添加http请求错误处理
const onResponseSuccess = (res: any) => {
  loadingCountDown()
  return res.data
} 

const onResponseFail = (res: any) => {
  loadingCountDown()
  return Promise.reject(res)
}

// 最后的请求结束后 关闭loading
const loadingCountDown = () => {
  if (loadingCount <= 0) return
  --loadingCount === 0 && hide && hide()
}

const AxiosConfig = () => {
  axios.interceptors.request.use(onRequestSuccess, onRequestFail)
  axios.interceptors.response.use(onResponseSuccess, onResponseFail)
}


export default AxiosConfig