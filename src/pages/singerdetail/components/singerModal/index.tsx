import React, {useState} from 'react';
import { Modal } from 'antd'


// 1-1. 姓名  singerName
// 1-2. 描述  singerDescription
// 1-3. 图片  singerImg
// 1-4. 是否显示 isShow

// 事件
// 2-1 确认保存 onConfirm
// 2-2 取消 onCancel 

interface singerModal {
  isShow: boolean,
  onConfirm: Function,
  onCancel: Function
}

const singerModal = (props: singerModal) => {
  let [singerName, setName] = useState(0)
  let [singerDescription, setDescription] = useState(1)
  let [singerImg, setImg] = useState(2)

  const { 
    isShow = false, 
    onCancel = () => {}, 
    onConfirm = () => {},
  } = props

  return (
    <>
      <Modal
        title="添加歌手"
        visible={isShow}
        onOk={() => onConfirm()}
        onCancel={() => onCancel()}
      >
        
      </Modal>
    </>
  )
}