import React, {useState, useEffect} from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr' 
import "./index.css"

const MenuHamburger = () => {

    const [open, setOpen] = useState(false)
    const [buttonOne, setButtonOne] = useState('visible')
    const [buttonTwo, setButtonTwo] = useState('hidden')
    const [bodyMenu, setBodyMenu] = useState('body-menu-hamburger-hidden')

    const setValues = () => {
        if(open === false){
            setOpen(true)
            setButtonOne('hidden')
            setButtonTwo('visible')
            setBodyMenu('body-menu-hamburger-visible')
        }else if(open === true){
            setOpen(false)
            setButtonOne('visible')
            setButtonTwo('hidden')
            setBodyMenu('body-menu-hamburger-hidden')
        }
    }
    return(
        <React.Fragment>
            <div id='header-menu-hamburger'>
                <button onClick={() => setValues()} className={buttonOne} >
                    <FiMenu size={20} color="white"/>
                </button>
                <button onClick={() => setValues()} className={buttonTwo}>
                        <GrClose size={20} color="white"/>
                </button>
            </div>
            <div id={bodyMenu}>
                <li>
                    <ul>1</ul>
                    <ul>2</ul>
                    <ul>3</ul>
                    <ul>4</ul>
                    <ul>5</ul>
                </li>
            </div>

        </React.Fragment>
    )
}

export default MenuHamburger;