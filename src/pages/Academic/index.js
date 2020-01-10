import React from 'react';
import infos from '../../assets/data/academic.json';


function Academic() {
  return (
    <section id="academic">
      <h3>Informações acadêmicas</h3>
      <h4>Formação</h4>
      <ul id="formation">
  {infos.formations.map((item) => (<li>({item.entry}-{item.depeature}) <br/> {item.course} {item.place} </li>))}
      </ul>

      <h4>Projetos</h4>
      <ul id="projects">
  {infos.projects.map((item) => (<li>({item.year}) <br/> {item.name} - {item.type}</li>))}
      </ul>
    </section>
  );
}

export default Academic;