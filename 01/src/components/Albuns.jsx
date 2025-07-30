import { useEffect, useState } from "react";

export default function AlbunsPorUsuario() {
  const [userId, setUserId] = useState(1);
  const [albuns, setAlbuns] = useState([]);
  const [recarregar, setRecarregar] = useState(false); // usado para forçar reload

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        const filtrados = data.filter((album) => album.userId === Number(userId));
        setAlbuns(filtrados);
      })
      .catch((err) => console.error("Erro ao buscar álbuns:", err));
  }, [userId, recarregar]);

  function handleInputChange(e) {
    const valor = Number(e.target.value);
    if (valor >= 1 && valor <= 10) {
      setUserId(valor);
    }
  }

  function atualizar() {
    setRecarregar(!recarregar); // troca o valor para forçar o useEffect
  }

  return (
    <div>
      <h2>Álbuns do Usuário</h2>
      <input
        type="number"
        min="1"
        max="10"
        value={userId}
        onChange={handleInputChange}
        placeholder="Digite um userId (1 a 10)"
      />
      <button onClick={atualizar}>Atualizar</button>

      <ul>
        {albuns.map((album) => (
          <li key={album.id}>
            <strong>ID:</strong> {album.id} - <strong>Título:</strong> {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
