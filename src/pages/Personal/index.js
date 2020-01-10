import React from 'react';
import {name, age, localization} from '../../assets/data/personal.json'

function Personal() {
  return (
    <section id="personal">
      <h3>Informações pessoais</h3>
      <p>
        {name} <br/> {age} anos <br/>{localization}</p>
    </section>
  );
}

export default Personal;