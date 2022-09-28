import React from 'react';
import { FiFigma } from 'react-icons/fi'
import { FaDiscord, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './indes.css'

function ButtonsIcon(color, size) {
    const Discord = () =>{
        return (
            <button onClick={() => window.window.location.href = '#'} id='button-icon'>
                <FaDiscord color={color} size={size} />
            </button>
        )
    }
    const Instagram = () =>{
        return (
            <button onClick={() => window.window.location.href = 'https://www.instagram.com/nicorsj/'} id='button-icon'>
                <FaInstagram color={color} size={size} />
            </button>
        )
    }
    const LinkedinIn = () =>{
        return (
            <button onClick={() => window.window.location.href = 'https://www.linkedin.com/in/nicolasrsj-94199a209/'} id='button-icon'>
                <FaLinkedinIn color={color} size={size} />
            </button>
        )
    }
    const GitHub = () =>{
        return (
            <button onClick={() => window.window.location.href = 'https://github.com/NicolasRSJ'} id='button-icon'>
                <FaGithub color={color} size={size} />
            </button>
        )
    }
    const Figma = () =>{
        return (
            <button onClick={() => window.window.location.href = 'https://www.figma.com/files/user/995798700992624391'} id='button-icon'>
                <FiFigma color={color} size={size} />
            </button>
        )
    }

    return{ Discord, Instagram, LinkedinIn, GitHub, Figma }
}

export default ButtonsIcon;