import { FiMenu } from 'react-icons/fi'
import ButtonsIcon from '../ButtonsIcon/index'
import './index.css'

const NavBar = () => {

    const Buttons = ButtonsIcon("white", 20)

    return(
        <nav id='nav-bar'>
            <div id='nav-container-primary'>
                <FiMenu size={20} color='white' />
                <div id='container-line-bar'/>
            </div>
            <div id='nav-container-secundary'>
                <div id='container-secundary-row-icons' >
                    <Buttons.Discord/>
                    <Buttons.Instagram/>
                    <Buttons.LinkedinIn/>
                    <Buttons.Figma/>
                    <Buttons.GitHub/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar