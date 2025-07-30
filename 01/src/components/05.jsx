import { useEffect, useState } from "react";

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React", concluida: false },
    { id: 2, texto: "Criar componente", concluida: false }
  ]);

  const [estilos, setEstilos] = useState({});

  // Altera o layout de tarefas concluídas
  useEffect(() => {
    const novosEstilos = {};
    tarefas.forEach(tarefa => {
      novosEstilos[tarefa.id] = tarefa.concluida
        ? { textDecoration: "line-through", color: "gray" }
        : {};
    });
    setEstilos(novosEstilos);
  }, [tarefas]);

  function marcarConcluida(id) {
    setTarefas(prev =>
      prev.map(tarefa =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  return (
    <ul>
      {tarefas.map(tarefa => (
        <li
          key={tarefa.id}
          style={estilos[tarefa.id]}
          onClick={() => marcarConcluida(tarefa.id)}
        >
          {tarefa.texto}
        </li>
      ))}
    </ul>
  );
}