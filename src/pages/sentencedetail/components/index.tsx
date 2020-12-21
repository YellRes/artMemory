import React, {
    FC, useState,
    ChangeEvent
} from 'react'
import SentenceModal from './sentenceModal/index'
import { OptionType } from './type' 
import './index.less'

const sentenceDetail = () => {

    const [sentenceId, setSentenceId] = useState('')
    const [sentenceContent, setSentenceContent] = useState('')
    const [sentenceToChinese, setSentenceToChinese] = useState('')
    const [singId, setSingId] = useState('')
    const [songId, setSongId] = useState('')
    const [singerName, setSingerName] = useState('')
    const [songName, setSongerName] = useState('')

    const onSongerChange = (e: OptionType | OptionType[]) => {

    }

    const onSingerChange = (e: OptionType | OptionType[]) => {

    }

    const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>, type: string) => {

    }

    return (
        <>
            <SentenceModal
                sentenceId = {}
                sentenceConent = {}
                sentenceToChinese = {}
                songId = {}
                singerId = {}
                songName = {}
                singerName = {}
                onSingerChange={onSingerChange}
                onSongerChange={onSongerChange}
                onContentChange={onContentChange}/>
        </>
    )
}

export default sentenceDetail
