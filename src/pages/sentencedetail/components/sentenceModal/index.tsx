import React, {FC, ChangeEvent} from 'react';
import {Form, Input, Modal, Select} from 'antd'
import {Sentence, Singer} from '../type'
import './index.less'

type OptionType = {
  value: string;
  label: string;
}

interface SentenceModal extends Sentence {
  onSingerChange: (e: OptionType | OptionType[] ) => void, 
  onSongerChange: (e: OptionType | OptionType[] ) => void, 
  onContentChange: (e: ChangeEvent<HTMLTextAreaElement>, type: string) => void
}

const {TextArea} = Input

const SentenceModal  = (props: SentenceModal) => {

  const {
    sentenceId = '',
    sentenceConent = '',
    sentenceToChinese = '',
    songId = '',
    singerId = '',
    songName = '',
    singerName = '',
    onSingerChange = () => {},
    onSongerChange = () => {},
    onContentChange = () => {},
  } = props
  
  return (
    <>
      <Modal>
        <Form>
          <Form.Item
            label="人"
            name="singName"
            rules={[{ required: true, message: '请选择人名' }]}>
            <Select onChange={(e: OptionType | OptionType[]) => onSingerChange(e)}>

            </Select>
          </Form.Item>

          <Form.Item
            label="歌曲"
            name="songName"
            rules={[{ required: true, message: '请选择歌曲名' }]}>
            <Select onChange={(e: OptionType | OptionType[]) => onSongerChange(e)}>

            </Select>
          </Form.Item>

          <Form.Item
            label="内容"
            name="sentenceConent"
            rules={[{ required: true, message: '请输入内容' }]}>
            <TextArea value={sentenceConent} onChange={e => onContentChange(e, 'content')}/>
          </Form.Item>

          <Form.Item
            label="对应中文"
            name="sentenceToChinese">
            <TextArea value={sentenceToChinese} onChange={e => onContentChange(e, 'chinese')}/>
          </Form.Item>
        </Form>
    </Modal>
    </>
  )
}

export default  SentenceModal