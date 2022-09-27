import React, { Component } from 'react';
import { FiFigma } from 'react-icons/fi'
import { FaDiscord, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './indes.css'

class ButtonIcon extends Component {
    constructor(cor,tamanho){
        this.cor = cor
        this.tamanho = tamanho
    }
    Discord = () =>{
        return(
            <button id='button-icon'><FaDiscord color={this.cor} size={this.tamanho} /></button>
        )
    }
    Instagram = () =>{
        return(
            <button id='button-icon'><FaInstagram color={this.cor} size={this.tamanho} /></button>
        )
    }
    LinkedinIn = () =>{
        return(
            <button id='button-icon'><FaLinkedinIn color={this.cor} size={this.tamanho} /></button>
        )
    }
    GitHub = () =>{
        return(
            <button id='button-icon'><FaLinkedinIn color={this.cor} size={this.tamanho} /></button>
        )
    }
    Figma = () =>{
        return(
            <button id='button-icon'><FiFigma color={this.cor} size={this.tamanho} /></button>
        )
    }
}

export default ButtonIcon;