import axios from 'axios';
import { message } from 'antd'

axios.defaults.baseURL = 'http://localhost:3002'

message.config({
  top: 150
})



let hide: any

const onRequestSuccess = (config: any) => {
  if (!hide) {
    hide = message.loading('加载中')
  } 
  if (config.params) config.params._t = Date.now()
  return config
}

const onRequestFail = (err: any) => {
  hide()
  return Promise.reject(err)
}

// TODO: 添加http请求错误处理
const onResponseSuccess = (res: any) => {
  hide()
  return res.data
} 

const onResponseFail = (res: any) => {
  hide()
  return Promise.reject(res)
}

const AxiosConfig = () => {
  axios.interceptors.request.use(onRequestSuccess, onRequestFail)
  axios.interceptors.response.use(onResponseSuccess, onResponseFail)
}


export default AxiosConfig