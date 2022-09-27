import { FiMenu, FiFigma } from 'react-icons/fi'
import { FaDiscord, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import ButtonIcon from '../ButtonIcon/index'
import './index.css'

const NavBar = () => {
    return(
        <nav id='nav-bar'>
            <div id='nav-container-primary'>
                <FiMenu size={20} color='white' />
                <div id='container-line-bar'/>
            </div>
            <div id='nav-container-secundary'>
                <div id='container-secundary-row-icons' >
                    <FaDiscord size={20} color='white'/>
                    <FaInstagram size={20} color='white'/>
                    <FaLinkedinIn size={20} color='white'/>
                    <FiFigma size={20} color='white'/>
                    <FaGithub size={20} color='white'/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar