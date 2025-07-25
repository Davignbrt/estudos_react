import { useState } from "react";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [mensagem, setMensagem] = useState("");

  function buscarUsuarios() {
    fetch("http://localhost:8000/api/usuarios")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        if (data.length === 0) {
          setMensagem("Nenhum usuário encontrado.");
        } else {
          setMensagem("");
        }
      })
      .catch((erro) => {
        console.error("Erro:", erro);
        setMensagem("Erro ao buscar usuários.");
      });
  }

  return (
    <div>
      <button onClick={buscarUsuarios}>Listar Usuários</button>
      {mensagem && <p>{mensagem}</p>}
      <ul>
        {usuarios.map((u, i) => (
          <li key={i}>{u.nome} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}
