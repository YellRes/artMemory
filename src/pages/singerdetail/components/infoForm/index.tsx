import React, { useState } from 'react';
import { Form, Input, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';


// singerName
// singerDescription
// singerImg

interface singerForm {
    onConfirm?: Function,
    onCancel?: Function
}

const InfoForm = (porps: singerForm) => {
    let [singerName = '', setName = () => {}] = useState(0)
    let [singerDescription = '', setDescription = () => {}] = useState(1)
    let [singerImg = '', setImg = () => {}] = useState(2)

    const {
        onConfirm = () => {},
        onCancel = () => {}
    } = porps

    return (
        <>
            <Form>
                <Form.Item
                    label="singerName"
                    name="singerName"
                    rules={[{required: true, message: '请输入姓名'}]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="singerDescription"
                    name="singerDescription">
                    <Input/>
                </Form.Item>

                <Form.Item>
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>点击上传</Button>
                    </Upload>
                </Form.Item>
            </Form>
        </>
    )
    
}

export default InfoForm