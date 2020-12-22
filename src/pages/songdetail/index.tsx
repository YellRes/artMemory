import React, { useState } from 'react'
import SongModal from './songModal/index'
import SongCard from './songCard/index' 

const SongDetail = () => {

    const [singerId, setSingerId] = useState('')
    const [singerName, setSingerNamw] = useState('')
    const [songId, setSongId] = useState('')
    const [songName, setSongName] = useState('')
    const [singerArr, setSingerArr] = useState([])

    function onSongComfirm () {}

    function onSongCancel () {}

    
    return (
        <>
            <SongModal
                singerId={singerId}
                singerName={singerName}
                singerArr={singerArr}
                songId={songId}
                songName={songName}
            />

        </>
    )
}

export default SongDetail

