
import React from 'react';

const carros = [
  { id: 1, marca: 'Toyota', modelo: 'Corolla', ano: 2022 },
  { id: 2, marca: 'Honda', modelo: 'Civic', ano: 2021 },
  { id: 3, marca: 'Ford', modelo: 'Focus', ano: 2020 },
  { id: 4, marca: 'Chevrolet', modelo: 'Onix', ano: 2023 },
];

const ListaDeCarros = () => {
  return (
    <div>
      <h2>Lista de Carros</h2>
      <ul>
        {carros.map(carro => (
          <li key={carro.id}>
            {carro.marca} {carro.modelo} - {carro.ano}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeCarros;