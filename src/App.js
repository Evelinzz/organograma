import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaborador)
  
  }

  return (
    <div className="App">
      <Banner/>  
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação"/>
      <Time nome="Frontend"/>
      <Time nome="DataScience"/>
      <Time nome="DevOps"/>
      <Time nome="UX e Design"/>
      <Time nome="Mobile"/>
      <Time nome="Inovação"/>
    </div>
  );
}

export default App;

//placeholder alterado com o props.placeholder