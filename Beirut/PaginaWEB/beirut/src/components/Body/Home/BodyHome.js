import './HomeStyle.css';
import { Link } from "react-router-dom"
const BodyHome = () => {

    return (
        <main className="center">
            <div className="hero center">
                <div className="imgPresentacion">
                    <img src="/imagenes/1mago.png" />
                </div>
                <div className="pContainerHero">
                    <p>	Cuando lo imposible se vuelve realidad ante tus ojos, cuando la magia no es solo un truco, sino una invitación a soñar, sabes que estás en presencia de <strong className="beirutLink">BEIRUT</strong>, el mago que transforma lo cotidiano en asombro. No importa quién seas ni de dónde vengas, su misión es simple: sorprenderte, desafiar tu imaginación y hacer que veas lo nunca antes visto.</p>
                </div>
            </div>
            <p className='serviciosP'> echale un vistazo a los <strong className='servicioLink' ><Link to='/services' className="servicioLink"> Servicios </Link> </strong> que ofrece <strong className="beirutLink">BEIRUT</strong> </p>
            <div className="EncuentraBeirut">
                <p className="pEncuentraBeirut">encuentra a <strong className="beirutLink">BEIRUT</strong></p>
                <div className="containerImgPBerut">
                    <div className="containerImgEnc">
                        <img src="/imagenes/6.jfif" />
                    </div>
                    <p className="PcontainerEnc">
                        Si deseas encontrar magia <br/>
                        ¡¡Puedes buscarla!!<br/>
                        <strong className="beirutLink">BEIRUT</strong> siempre practica su magia en el Teleférico cada fin de semana, ¿que esperas?
                    </p>
                </div>
            </div>
        </main>
    )

}

export default BodyHome;