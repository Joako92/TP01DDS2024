import React from "react";
import logo from '../img/logo.png';

const Home = () => {
    return (
        <div className="Home" align='center' >
            <h1 className="title">PAGINA PRINCIPAL</h1>
            <br></br>
            <p>
            <img className="App-logo" src={logo} alt="logo" height="200" width="150"/>
            </p>
            <h1>
            Trabajo Practico N° 1 <br/>
            Desarrollo De Software 2024<br/><br/>
            </h1>
            <a
            className="App-link"
            href="https://labsys.frc.utn.edu.ar/gitlab/desarrollo-de-software1/proyectos2024/3k6/dds-tp01-94663-brondo-74472-demarchi-89650-montenegro-63526-bergero.git/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Ir al repositorio
            </a>
        </div>
    )
}

export default Home