import React from 'react';
import './styles.css';
import foto from '../../assets/images/aluno.jpg';
import fbImage from '../../assets/images/facebook.png';
import gitImage from '../../assets/images/github.png';
import instaImage from '../../assets/images/instagram.png';
import cellImage from '../../assets/images/phone-call.png';
import localizationImage from '../../assets/images/localization.png';
import emailImage from '../../assets/images/gmail.png'
import { github, facebook, instagram, telephone, email, localization } from '../../assets/data/about.json';

function About() {
  return (
    <section id="about">
      <img src={foto} alt="Foto do dono do portifolio" id="foto"/>
      <h1>João Lima</h1>
      <h2>Estudante de Engenharia de Computação</h2>

      <address>
        <h3>Redes Sociais</h3>
        <a href={facebook} target="_blank" rel="noopener noreferrer"><img src={fbImage} alt="Ícone do facebook" className="icon"/></a>
        <p className="description">Facebook</p>

        <a href={github} target="_blank" rel="noopener noreferrer"><img src={gitImage} alt="Ícone do github" className="icon"/></a>
        <p className="description">Github</p>

        <a href={instagram} target="_blank" rel="noopener noreferrer"><img src={instaImage} alt="Ícone do instagram" className="icon"/></a>
        <p className="description">Instagram</p>

        <h3>Contatos</h3>
        <img src={cellImage} alt="Figura de um celular" className="icon"/>
        <p className="description">{telephone}</p>

        <img src={emailImage} alt="Simbolo do gmail" className="icon"/>
        <p className="description">{email}</p>

        <img src={localizationImage} alt="Simbolo de localização" className="icon"/>
        <p className="description">{localization}</p>
      </address>
    </section>
  );
}

export default About;