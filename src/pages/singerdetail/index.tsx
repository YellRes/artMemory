import './index.less';
import React, {FC} from 'react';
import apiObj from '../../api/config'

interface singer {
  singerName?: string,
  singerDescription?: string
}

const test: FC = () => {
  let params: singer = {
    singerName: 'macklemore',
    singerDescription: '关注社会现实'
  }
  apiObj.addSinger(params)
  console.count('test is on')
  return (
    <div>test it</div>
  )
}

export default test