import './index.less';
import React, {FC, useState, MouseEvent} from 'react';
import apiObj from '../../api/config'
import SingerModal from './components/singerModal/index'

interface singer {
  singerName?: string,
  singerDescription?: string
  singerImg?: string
}

const SingerDetail: FC = () => {

  const [isShow = true, setIsShow ] = useState<boolean>(true)

  function onCancel(e: MouseEvent<HTMLElement>) {
    return setIsShow(false)
  }

  return (
    <>
      <SingerModal 
        isShow={isShow}
        onCancel={onCancel}/>
    </>
  )
} 

export default SingerDetail