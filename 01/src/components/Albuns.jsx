import { useState, useEffect, useRef } from "react";

export default function AlbunsUserID() {
  const [userId, setUserId] = useState(1); // usado no fetch
  const [albuns, setAlbuns] = useState([]);
  const inputRef = useRef(); // referência ao input

  // faz a requisição sempre que userId mudar
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        const filtrados = data.filter((album) => album.userId === Number(userId));
        setAlbuns(filtrados);
      })
      .catch((err) => console.error("Erro ao buscar álbuns:", err));
  }, [userId]);

  // só atualiza o userId quando clicar no botão
  const buscarAlbuns = () => {
    const valor = Number(inputRef.current.value);
    if (valor >= 1 && valor <= 10) {
      setUserId(valor);
    } else {
      alert("Digite um número entre 1 e 10.");
    }
  };

  return (
    <div>
      <h2>Álbuns por User ID</h2>
      <input
        type="number"
        ref={inputRef}
        placeholder="Digite um userId (1 a 10)"
        min="1"
        max="10"
      />
      <button onClick={buscarAlbuns}>Buscar Álbuns</button>

      <ul>
        {albuns.map((album) => (
          <li key={album.id}>
            <strong>{album.title}</strong> (ID: {album.id})
          </li>
        ))}
      </ul>
    </div>
  );
}
