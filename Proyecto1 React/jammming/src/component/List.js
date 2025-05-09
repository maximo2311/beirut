import { useState } from "react"
export function List ({list, pictureList, onDeleteButton}) {

    const [ playListName, setPlayListName ] = useState('');

    return (
        <>
        <h3>Aqui guardamos tus canciones favoritas para tu PLAYLIST!</h3>
        <h3>Nombra tu playList Aquí</h3>
        <input 
            name='playListName'
            type='text'
            id='playListName'
            value={playListName}
            onChange={({target}) => setPlayListName(target.value)}
            />
        {list.map((iten, index) => (
            <div>
                <h4 key={index}>{iten}</h4>
                <img src={pictureList[index]} alt={index} />
                <button onClick={onDeleteButton} >Eliminar de lista</button>
            </div>
        ))}
        
        </>
    )
}