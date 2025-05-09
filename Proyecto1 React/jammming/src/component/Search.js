import { useState } from 'react'
import { List } from './List';

const Search = () => {

        //PARTE DEL INPUT
        const [ song, setSong ] = useState('');
        const [ songs, setSongs ] = useState([]);
    
        const handleSearch = (e) => {
            e.preventDefault();
            if(song.trim() === '') {
                alert('agregar cancion para buscar')
                return
            }
            setSong('');
            getSong(song)
        }

         //FIN DE LA PARTE DE INPUT

        //FUNCION PARA LOGRAR OBTENER CANCIONES MIENTRAS NO SE LOGRA LO DE LA AUTENTIFICACION
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ed696503f7mshc90709e28a4c63cp13f335jsn8242d81d5343',
                'x-rapidapi-host': 'spotify23.p.rapidapi.com'
            }
        };
        async function getSong(song) {
            try {
                let url = `https://spotify23.p.rapidapi.com/search/?q=${song}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
                const data = await fetch(url,options)
                const res = await data.json()
                setSongs(res.tracks.items);
            } catch (error) {
                console.log(error);
            }
        }

        //FIN DE LA FUNCION

        //FUNCION PARA AGREGAR A PLAYLIST
            //NOMBRE
        const [ list, setList ] = useState([]);

            //IMAGEN
        const [ pictureList, setPictureList ] = useState([]);

        const onAddHandle = ({currentTarget}) => {
            const contenedor = currentTarget.parentElement;
            const nameSong = contenedor.querySelector('h3').textContent;
            const pictureSong = contenedor.querySelector('img').src;
            setList((prev) => [nameSong, ...prev]);
            setPictureList ((prev) => [pictureSong, ...prev]);
        }

        //FIN DE AGREGADO DE PLAYLIST

        //FUNCION PARA ELIMINAR ELEMENTOS DE LA PLAYLIST

        const onDeleteHandle = ({currentTarget}) => {
            const contenedor = currentTarget.parentElement;
            const nameSong = contenedor.querySelector('h4').textContent;
            const pictureSong = contenedor.querySelector('img').src;
            setList((prev) => prev.filter(t => t !== nameSong))
            setPictureList((prev) => prev.filter(t => t !== pictureSong))
        }

        //FIN DE ELIMINAR ELEMENTOS DE PLAYLIST

    return (
        <>
        <h3>Secion iniciada</h3>
        <form onSubmit={handleSearch} >
            <label htmlFor='song'>Aquí debajo busca tu musica fav</label>
            <input 
            name='song'
            type='text'
            id='song'
            value={song}
            onChange={({target}) => setSong(target.value)}
            />
            <button type='submit' onSubmit={handleSearch} >Buscar</button>
        </form>

        <List list={list} pictureList={pictureList} onDeleteButton={onDeleteHandle} />
        
        {songs.map((song, index) => (
            <>
                <div key={index}>
                    <img src={song.data.albumOfTrack.coverArt.sources[0].url} alt='' />
                    <h3>{song.data.name}</h3>
                    <button onClick={onAddHandle} >Agregar</button>
                </div>
            </>
        ))}
        </>

    )
};

export default Search