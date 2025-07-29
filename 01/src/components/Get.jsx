import { useState, useEffect } from "react";

export default function Get() {
    const [ usuarios, setUsuarios] = useState([])
    function buscarUsuarios(){
        fetch("http://localhost:8000/api/usuarios")
        .then((res) => res.json())
        .then((data) => {
            setUsuarios(data);
            if (data.length == 0){
                console.log("nada")
            } else {
                console.log("")
            }
        })
    }
}
return(
    <div>
        <h1>
            usuarios
        </h1>
        <ul>
            {usuarios.map((u,i) => (
                <li key={i}>{u.nome} -- {u.email}</li>
            ))}
        </ul>
    </div>
)