import './index.less';
import React, {
  FC, 
  useState, useEffect, 
  MouseEvent, ChangeEvent
} from 'react';
import apiObj from '../../api/config'
import SingerModal from './components/singerModal/index'
import SingerTable from './components/singerTable/index'
import { Button, Modal } from 'antd';

interface singer {
  _id?: string,
  singerName?: string,
  singerDescription?: string
  singerImg?: string
}


const SingerDetail: FC = () => {

  const [isShow = true, setIsShow ] = useState<boolean>(false)
  const [singerArr, setSingerArr] = useState<Array<singer>>([])

  const [singerName = '', setName = () => {}] = useState('')
  const [singerDescription = '', setDescription = () => {}] = useState('')
  const [singerImg = '', setImg = () => {}] = useState('')

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

  // input 输入框事件
  function onInputChange(e: ChangeEvent<HTMLInputElement>, type: string) {
    if (type === 'singerName') {
      setName(e.target.value)
    } else if (type === 'singerDescription') {
      setDescription(e.target.value)
    }
  }

  async function onConfirm () {
    const params = {
      singerName,
      singerDescription
    }
    let res = await apiObj.addSinger(params)
    let data: any = await apiObj.getSinger()    
    setSingerArr(data.body.data)
    
    setIsShow(false)
  }

  function onCancel(e: MouseEvent<HTMLElement>) {
    return setIsShow(false)
  }

  function onAdd(e: MouseEvent<HTMLElement>) {
    return setIsShow(true)
  }

  async function onDelete(e: MouseEvent<HTMLElement>, colObj: singer) {
    const modal = Modal.confirm({
      content: '是否删除?',
      okText: '确定',
      cancelText: '取消',
      onOk: async () => {
        console.log(colObj, 'idididid');
        const params = {
          _id: colObj._id
        }
        let res = await apiObj.deleteSinger(params)
        let data: any = await apiObj.getSinger()    
        setSingerArr(data.body.data)
      }
    })
  
  }

  async function onModify(e: MouseEvent<HTMLElement>, colObj: singer) {
    const { _id } = colObj
    let result: any = await apiObj.getSinger({singerId: _id}) 
    
    const {singerName, singerDescription} = result.body.data[0]
    setName(singerName)
    setDescription(singerDescription)
    setIsShow(true)
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
        singerName={singerName}
        singerDescription={singerDescription}
        singerImg={singerImg}
        onConfirm={onConfirm}
        onInputChange={onInputChange}
        onCancel={onCancel}/>
      <SingerTable
        singerArr={singerArr}
        onModify={onModify}
        onDelete={onDelete} 
        />
    </>
  )
} 

export default SingerDetail