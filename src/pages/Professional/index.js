import React from 'react';
import infos from '../../assets/data/professional.json'

function Professional() {
  return (
    <section id="professional">
      <h3>Informações profissionais</h3>
        <ul id="courses">
          <h4>Mini-cursos</h4>
          {infos.courses.map((item) => {
          return <li>({item.year}) <br/> {item.name} {item.place}</li>
          })}
        </ul>
        <h4>Habilidades</h4>
        <ul id="skills">
            {infos.skills.map((item) => (<li>{item}</li>))}
        </ul>
    </section>
  );
}

export default Professional;