import './AboutStyle.css';
const About = () => {

    return(
        <section>
            <h2 className="tituloServices">About</h2>
            <div className="containerSectionText center">
                <div className="BloquedeTexto">
                <h3 className="tituloAboutSection">Trayectoria</h3>
                <p className="textoAboutSection">
                    El Mago <strong className="beirutLink">BEIRUT</strong> es un ilusionista profesional con más de cinco años de experiencia en el mundo de la magia. Originario de Caracas, ha perfeccionado su arte a través de incontables presentaciones, llevando asombro y entretenimiento a públicos de todas las edades. Su pasión por la magia lo ha llevado a certificar sus habilidades en una prestigiosa escuela de magia internacional, consolidando su técnica y conocimiento en el arte del ilusionismo.
                </p>
                </div>
                <div className="BloquedeTexto MisionReverse">
                <h3 className="tituloAboutSection">Mision</h3>
                <p className="textoAboutSection">
                    Inspirar y asombrar a través del arte de la magia, creando experiencias inolvidables que despierten la imaginación y la emoción en cada espectador.
                </p>
                </div>
                <div className="BloquedeTexto">
                <h3 className="tituloAboutSection VisionBlack">Vision</h3>
                <p className="textoAboutSection">
                    Ser un referente en el mundo del ilusionismo, llevando la magia a todos los rincones y transformando cada presentación en una experiencia única e inolvidable. A través de la creatividad y la innovación, buscar romper límites y despertar la fascinación en quienes creen en lo imposible.
                </p>
                </div>
            </div>
        </section>
    )

}
export default About;