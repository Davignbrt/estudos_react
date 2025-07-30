import { useState } from "react";

export default function TelaLogin() {
  const [formData, setFormData] = useState({
    login: "",
    senha: ""
  });

  // Atualiza os dados do formulário
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  // Lida com o envio do formulário
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Login:", formData.login);
    console.log("Senha:", formData.senha);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "200px" }}>
      <label>
        Login:
        <input
          type="text"
          name="login"
          value={formData.login}
          onChange={handleChange}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
}