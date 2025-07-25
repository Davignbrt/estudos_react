import { useState } from "react";

export default function Evento() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1); 
  }

  function diminuir() {
    setContador(contador - 1); 
  }

  return (
    <div>
      <h1>O contador está em {contador}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
    </div>
  );
}
