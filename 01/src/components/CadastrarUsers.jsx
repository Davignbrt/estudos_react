import { useState } from "react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resposta, setResposta] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const dados = { nome, email, senha };

    try {
      const res = await fetch("http://localhost:8000/api/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      const json = await res.json();
      setResposta(json.mensagem);
    } catch (error) {
      setResposta("Erro ao cadastrar.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
      <p>{resposta}</p>
    </form>
  );
}
