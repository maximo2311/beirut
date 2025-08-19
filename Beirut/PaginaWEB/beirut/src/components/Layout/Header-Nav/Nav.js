import { NavLink } from "react-router-dom"
import './nav-style.css';

export const Nav = ({boton}) => {
    return (
        <nav className={`center ${boton ? 'cerradoMenu' : 'abiertoMenu'}`}  >
            <ul>
                <li><NavLink to='/' className='a'>HOME</NavLink></li>
                <li><NavLink to='/services' className='a'>SERVICES</NavLink></li>
                <li><NavLink to='/about' className='a'>ABOUT</NavLink></li>
            </ul>
        </nav>
    )
}
/*style={{ transform: boton ? 'translateX(20rem)' : 'translateX(0rem)' }} */