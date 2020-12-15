import React, {useState, ChangeEvent, KeyboardEvent, MouseEvent} from 'react';
// import InfoForm from '../infoForm/index'
import { Form, Input, Button, Upload, Modal } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import apiObj from '../../../../api/config' 

// 1-1. 姓名  singerName
// 1-2. 描述  singerDescription
// 1-3. 图片  singerImg
// 1-4. 是否显示 isShow

// 事件
// 2-1 确认保存 onConfirm
// 2-2 取消 onCancel 

interface singerModal {
  isShow: boolean,
  singerName: string,
  singerDescription: string,
  singerImg: string,
  onInputChange: (e: ChangeEvent<HTMLInputElement>, type: string) => void,
  onConfirm: () => void,
  onCancel: (e: MouseEvent<HTMLElement>) => void
}

const SingerModal = (props: singerModal) => {

  const { 
    isShow = false, 
    singerName = '', 
    singerDescription = '',
    singerImg = '',
    onInputChange = () => {},
    onConfirm = () => {},
    onCancel = () => {}
  } = props

 
  return (
    <>
      <Modal
        title="添加歌手"
        visible={isShow}
        maskClosable={false}
        onOk={onConfirm}
        onCancel={onCancel}
      >
        {singerName}
        {singerDescription}
        {singerImg}
        <Form>
          <Form.Item
              label="singerName"
              name="singerName"
              rules={[{required: true, message: '请输入姓名'}]}>
              <Input  
              placeholder="Basic usage"
              	value={singerDescription}
                onChange={(e) => onInputChange(e, 'singerName')}
                allowClear={true}/>
          </Form.Item>

          <Form.Item
              label="singerDescription"
              name="singerDescription">
              <Input
                value={singerName}
                onChange={(e) => onInputChange(e, 'singerDescription')}
                allowClear={true}
              />
          </Form.Item>

          <Form.Item>
              <Upload name="logo" action="/upload.do" listType="picture">
                  <Button icon={<UploadOutlined />}>点击上传</Button>
              </Upload>
          </Form.Item>
        

      </Form>


      </Modal>
    </>
  )
}

export default SingerModal