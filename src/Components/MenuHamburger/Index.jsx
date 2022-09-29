import React from 'react'
import {AiFillHome, AiFillFilePpt} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {BsFillFileEarmarkPersonFill} from 'react-icons/bs'
import {CgMoreR} from 'react-icons/cg' 
import "./index.css"

const MenuHamburger = () => {
    return(
        <React.Fragment>
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
                <span></span>
            </label>
        
            <ul className="menu__box">
                <li>
                    <a className="menu__item" href="#">
                        <AiFillHome color='white' size={20}/>
                        <p>Home</p>
                    </a>
                </li>
                <li>
                    <a className="menu__item" href="#">
                        <AiFillFilePpt color='white' size={20}/>
                        <p>Projetos</p>
                    </a>
                </li>
                <li>
                    <a className="menu__item" href="#">
                        <FaUserTie color='white' size={20}/>
                        <p>Perfil</p>
                    </a>
                </li>
                <li>
                    <a className="menu__item" href="#">
                        <BsFillFileEarmarkPersonFill color='white' size={20} />
                        <p>Currículo</p>
                    </a>
                </li>
                <li>
                    <a className="menu__item" href="#">
                        <CgMoreR color='white' size={20}/>
                        <p>Sobre</p>
                    </a>
                </li>
            </ul> 
        </React.Fragment>
    )
}

export default MenuHamburger;