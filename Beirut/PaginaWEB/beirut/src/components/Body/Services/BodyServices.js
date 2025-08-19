import { useState } from 'react';
import {datos} from './datosModule'
import './ServicesStyle.css';



const BodyServices = () => {

    return(
        <section >
            <div className="tituloServices">
                <h2>Services</h2>
                <p>Descubre presionando los botones</p>
            </div>
            <div className="ContainerdeBotones">
                {
                    datos.map((cada, index )=> (
                        <BotonesService key={index} data={cada} />
                    ))
                }
            </div>
        </section>
    )
}

/* Botones con variable auxiliar */

const BotonesService = ({data}) => {
    
    const [ texto, setTexto ] = useState(false);

    function handleButtonServices () {
        console.log('Si recibe')
        setTexto (prev => !prev);
        console.log(texto)
    }

    return(

        <button onClick={handleButtonServices} className={`BotonServices ${ texto ? 'textomuestra' : 'textoNOmuestra' }`}>
            <div className="ContenedordeImg">
                <img src={data.img}/>
            </div>
            <div className='ContenedordeTexto'>
                <h3>{data.name}</h3>
                <p >{data.sms}</p>
            </div>
        </button>

    )

}



export default BodyServices

/*


            <div className="ContainerdeBotones">
                <div className="BotonServices">
                    <div className="ContenedordeImg">
                        <img />
                    </div>
                    <div className="ContenedordeTexto">
                        <h3></h3>
                    </div>
                </div>
            </div>

*/