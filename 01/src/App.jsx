import { useState } from 'react';
import './App.css';
import Evento from './components/Evento';
import Cadastro from './components/CadastrarUsers';
import ListaUsuarios from './components/ListarUsuarios';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Evento />
      <Cadastro />
      <ListaUsuarios/>
    </>
  );
}

export default App;
