import React, { useState } from 'react';

export default function Search () {

    const [ song, setSong ] = useState('');

    const handleNameSong = ({target}) => {

        setSong(target.value);
    }

    const hadleSubmitSong = (e) => {
        e.preventDefault();
        if(song.trimEnd() === '') {
            alert('No hay nada escrito')
            return
        }
        console.log(song);
        setSong('');
    }

    return (
        <form onSubmit={hadleSubmitSong} >
        <label for= 'songName'>Excribe tu cancion favorita</label>
        <input type='text' value={song} name='songName' id='songName' onChange={handleNameSong} />
        <button type='submit' onSubmit={hadleSubmitSong}  >Submit</button>
        </form>
    )
}