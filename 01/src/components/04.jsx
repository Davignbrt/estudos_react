import { useEffect, useState } from "react";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState("");

  // Requisição GET para a API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposta) => resposta.json())
      .then((dados) => setUsuarios(dados))
      .catch((erro) => console.error("Erro ao buscar usuários:", erro));
  }, []);

  // Função de filtragem pelo nome
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Usuários</h2>
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {usuariosFiltrados.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.name}</strong> – {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}