import MenuHamburger from '../MenuHamburger/Index'
import ButtonsIcon from '../ButtonsIcon/index'
import './index.css'

const NavBar = () => {

    const Buttons = ButtonsIcon("white", 25)

    return(
        <nav id='nav-bar'>
            <div id='nav-container-primary'>
                <MenuHamburger/>
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