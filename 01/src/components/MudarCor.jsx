import { useState } from "react";

export default function MudarCor() {
  const cores = ["blue", "green", "red"]; // Corrigi "gren" para "green"
  const [corAtual, setCorAtual] = useState("white");
  const [texto, setTexto] = useState("");

  function mudar(e) {
    const valor = e.target.value;
    setTexto(valor);

    // Usa o comprimento do texto para escolher a cor
    const indice = valor.length % cores.length;
    setCorAtual(cores[indice]);
  }

  return (
    <div style={{ backgroundColor: corAtual, padding: "20px" }}>
      <input type="text" value={texto} onChange={mudar} />
    </div>
  );
}