from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Permitir acesso do React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo do usuário
class Usuario(BaseModel):
    nome: str
    email: str
    senha: str

# Simulando banco de dados
usuarios = []

@app.post("/api/cadastrar")
def cadastrar(usuario: Usuario):
    usuarios.append(usuario)
    return {"mensagem": "Usuário cadastrado com sucesso!"}

@app.get("/api/usuarios")
def listar_usuarios():
    return usuarios
