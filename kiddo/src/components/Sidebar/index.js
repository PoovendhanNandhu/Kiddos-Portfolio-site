import { Link,NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/assets/images/P1.png'
import LogoSubtitle from '../../assets/assets/images/P_sub1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome,faUser,} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar=()=>(
    
    <div className='nav-bar'>
        
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="Poovendhan"/>           
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul className='ul12'>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/poovendhan-kiddo-580971227/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://twitter.com/PoovendhanN'>
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/PoovendhanNandhu'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/poovendhan_nandhu/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                </a>
            </li>

        </ul>
    </div>
)

export default Sidebar
