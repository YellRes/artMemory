import './index.less';
import React, {FC, useState, useEffect, MouseEvent} from 'react';
import apiObj from '../../api/config'
import SingerModal from './components/singerModal/index'
import SingerTable from './components/singerTable/index'
import { Button } from 'antd';

interface singer {
  singerName?: string,
  singerDescription?: string
  singerImg?: string
}


const SingerDetail: FC = () => {

  const [isShow = true, setIsShow ] = useState<boolean>(false)
  const [singerArr, setSingerArr] = useState<Array<singer>>([])

  // 获取singer数据
  function getSinger(singerName: string = '') {
    const params = {
      singerName
    }

    apiObj
      .getSinger(params)
      .then((res: any) => {
        setSingerArr(res.body.data)
      })
  }

  function onCancel(e: MouseEvent<HTMLElement>) {
    return setIsShow(false)
  }

  function onAdd(e: MouseEvent<HTMLElement>) {
    return setIsShow(true)
  }

  useEffect(() => {
    getSinger()
  }, [])


  return (
    <>
      <Button onClick={onAdd}>
        添加
      </Button>
      <SingerModal 
        isShow={isShow}
        onCancel={onCancel}/>
      <SingerTable 
        singerArr={singerArr}
        />
    </>
  )
} 

export default SingerDetail