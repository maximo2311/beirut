import './FooterStyle.css';

const Footer = () => {
    return (
        <footer>
            <p> Redescubrir el mundo es un arte, y <strong className="strongFooter">BEIRUT</strong> lo domina a la perfección. </p>
            <div className="footerContainer">
                <div className="footerLogo center">
                    <a href='https://www.instagram.com/beirut.el.mago/?hl=es' target="_blank" >
                        <img src="/imagenes/logo-f.png" />
                    </a>
                </div>
                <div className="contacto center">
                    <h3>CONTACT</h3>
                    <div className="imgs center">
                        <div className="containerRedes">
                            <a href='https://www.instagram.com/beirut.el.mago/?hl=es' target="_blank">
                            <img src="/imagenes/ig.png" />
                            </a>
                        </div>
                        <div className="containerRedes">
                            <a href='https://wa.me/+584246632391' target="_blank" >
                            <img src="/imagenes/ws.png" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='tags center'>
                    <h3>TAGS</h3>
                    <div className='containerTags center'>
                        <h4>Mago en Caracas</h4>
                        <h4>Mago para fiestas infantiles en Caracas</h4>
                        <h4>Apariciones en Caracas</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;