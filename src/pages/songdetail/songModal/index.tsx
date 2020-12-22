import React, {ChangeEvent} from 'react'
import {Song} from '../type'
import { MyModal, OptionType, Singer } from '../../type'
import { Modal, Form, Select, Input } from 'antd'

interface SongModal extends Song, MyModal {
    singerArr: Array<Singer>,
    onSingerChange: (e: OptionType | OptionType[] ) => void,
    onSongNameChange: (e: ChangeEvent<HTMLTextAreaElement>, type: string) => void
}

const SongModal = (props: SongModal) => {
    const {
        isShow = false,
        singerName = '',
        singerId = '',
        songId = '',
        songName = '',
        onCancel = () => {},
        onConfirm = () => {},
        onSingerChange = () => {},
        onSongNameChange = () => {}
    } = props

    return (
        <>
            <Modal
                title="添加歌曲"
                visible={isShow}
                maskClosable={false}
                onOk={onConfirm}
                onCancel={onCancel}>

        <Form>
          <Form.Item
            label="人"
            name="singName"
            rules={[{ required: true, message: '请选择人名' }]}>
            <Select onChange={(e: OptionType | OptionType[]) => onSingerChange(e)}>

            </Select>
          </Form.Item>



          <Form.Item
            label="歌曲名"
            name="sentenceConent"
            rules={[{ required: true, message: '请输入内容' }]}>
            <Input value={songName} onChange={e => onSongNameChange(e, 'content')}/>
          </Form.Item>

        </Form>

            </Modal>
        </>
    )
}

export default SongModal