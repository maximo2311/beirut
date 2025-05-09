//import { useState } from 'react';
import { Login, getAccessCode } from './tokenApiModule'
import Search from './Search';


function Body () {
    //control para hacer que el boton de iniciar secion funcione sin estar conetado
//const [ log, setLog ] = useState('');ESTE PEDAZO ERA DE PRUEBA
//const onLoginSettter = (ola) => setLog(ola); ESTE PEDAZO ERA DE PRUEBA
    //PARTE DEL OPERADOR TERNARIO
    const access_token = getAccessCode();


    return (

        <>
        <h2>Ingresa en tu cuenta de spotify para poder buscar y crear tu propia playList!</h2>

        {!access_token ? <Login /*onLogin={onLoginSettter}*/ /> :
        
        <Search />
        }
        </>
    )
}

export default Body;