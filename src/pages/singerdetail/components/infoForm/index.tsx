import React, { useState } from 'react';
import { Form, Input, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons';


// singerName
// singerDescription
// singerImg

interface singerForm {
    singerName: String,
    singerDescription: String,
    singerImg: string,
    onConfirm?: Function,
    onCancel?: Function
}

const InfoForm = (props: singerForm) => {

    const {
        singerName = '', 
        singerDescription = '',
        singerImg = '',
        onConfirm = () => {},
        onCancel = () => {},
    } = props




    return (
        <>
   
        </>
    )
    
}

export default InfoForm