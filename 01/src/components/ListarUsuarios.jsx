import { useState } from "react";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [letra, setLetra] = useState("");
  const [filtrados, setFiltrados] = useState([]);

  function buscarUsuarios() {
    fetch("http://localhost:8000/api/usuarios")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setFiltrados([]); // limpa filtro anterior
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

  function filtro(e) {
    e.preventDefault(); // evita recarregar a página

    const resultado = usuarios.filter((u) =>
      u.nome.toLowerCase().startsWith(letra.toLowerCase())
    );

    setFiltrados(resultado);
  }

  return (
    <div>
      <button onClick={buscarUsuarios}>Listar Usuários</button>
      {mensagem && <p>{mensagem}</p>}

      <h2>Todos os usuários</h2>
      <ul>
        {usuarios.map((u, i) => (
          <li key={i}>{u.nome} - {u.email}</li>
        ))}
      </ul>

      <h2>Filtrar usuários</h2>
      <form onSubmit={filtro}>
        <input
          type="text"
          placeholder="Letra"
          value={letra}
          onChange={(e) => setLetra(e.target.value)}
        />
        <button type="submit">Filtrar</button>
      </form>

      {filtrados.length > 0 && (
        <>
          <h3>Resultado do filtro:</h3>
          <ul>
            {filtrados.map((u, i) => (
              <li key={i}>{u.nome} - {u.email}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
