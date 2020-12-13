import axios from 'axios';

const apiObj = {
  addSinger: (params: any = {}) => {
    return axios.post('/singer/addSinger', params)
  },

  getSinger: (params: any = {}) => {
    return axios.post('/singer/getSinger', params)
  }
}

export default apiObj