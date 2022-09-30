import React from 'react'
import NavBar from "../../Components/NavBar/Index";
import background from '../../Images/backgroundHome.jpg'
import './index.css'

const Home = () => {
    return(
        <React.Fragment>
            <div className='background' />
            <NavBar/>
            <section>
                <div className='row'><h1 className='typing-demo'>Hello World;</h1></div>
                <div className='row-two'><p>Bem-Vindo(a) a o meu portifólio, me chamo Nicolas, para saber mais clique no botão.</p></div>
                <div className='row'><button className='button'>Ver Mais</button></div>
            </section>
        </React.Fragment>
    )
}

export default Home