import React from 'react'
import SongDetail from '..'
import {Song} from '../type'
import 'index.less'


const SongCard = (props: Song) => {
    const {
        songName = '',
        singerName = ''
    } = props

    return (
        <>
            <div className="songcard_container">
                <img src="" alt="" width="100%"/>
                <div>
                    <p>{songName}</p>
                    <p>{singerName}</p>
                </div>
            </div>
        </>
    )
}

export default SongCard