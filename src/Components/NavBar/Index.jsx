import { FiMenu, FiFigma } from 'react-icons/fi'
import { FaDiscord, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './index.css'

const NavBar = () => {
    <nav id='nav-bar'>
        <div id='nav-container-primary'>
            <FiMenu/>
            <div id='container-line-bar' />
        </div>
        <div id='nav-container-secundary'>
            <div id='container-secundary-row-icons' >
                <FaDiscord/>
                <FaInstagram/>
                <FaLinkedinIn/>
                <FiFigma/>
                <FaGithub/>
            </div>
        </div>
    </nav>
}

export default NavBar