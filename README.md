<a href="" target="_blank">Potuguês **🇧🇷**</a> | <a href="./README_en.md" target="_blank">English **🇺🇸**</a>

# Gym Tracker Backend 🏋🏻‍♀️​🏋🏻‍♂️​

`CURSO: Sistemas para Internet | FIAP`

`ATIVIDADE: Full Staking - Fase 07`

## Descrição
GymTracker Backend é um servidor Node.js construído com Express que serve como a API para o aplicativo GymTracker. Ele permite a criação e autenticação de usuários, bem como o registro e acompanhamento de sessões de treino.

## Estrutura do Projeto
```
gym-tracker-backend/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── userController.ts
│   ├── middlewares/
│   │   ├── authMiddleware.ts
│   ├── models/
│   │   ├── User.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── userRoutes.ts
│   ├── services/
│   │   ├── authService.ts
│   ├── index.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```


## Instalação

1. Certifique-se de ter o Node.js e o npm instalados em seu sistema.
2. Clone este repositório para o seu ambiente local:
```
git clone https://github.com/flavialbraz/full-tracker-back.git
```
3. Navegue até o diretório do projeto:
```
cd full-tracker-back
```
4. Instale as dependências do projeto:
```
npm i
```
5. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
FRONTEND_URL_LOCAL=http://localhost:3000
```

## Uso
1. Compile o projeto TypeScript:
```
npm run build
```
2. Inicie o servidor:
```
npm start
```
3. A API estará disponível em http://localhost:5000.

## Endpoints da API

#### Autenticação
1. Registro de usuário
```
POST /api/auth/register
```
Corpo da requisição:
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
Resposta:
```
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "jwt_token"
}
```

2. Login de usuário
```
POST /api/auth/login
```
Corpo da requisição:
```
{
  "email": "john@example.com",
  "password": "password123"
}
```
Resposta:
```
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "jwt_token"
}
```

#### Usuários
1. Obter todos os usuários
```
GET /api/users
```
Resposta:
```
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "attendedDates": ["2023-01-01T00:00:00.000Z"]
  }
]
```

2. Obter um usuário pelo ID
```
GET /api/users/:id
```
Resposta:
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "attendedDates": ["2023-01-01T00:00:00.000Z"]
}
``` 
3. Atualizar participação na academia por data
```
PUT /api/users/:date
```
Corpo da requisição:
```
{
  "attended": true
}
```
Resposta:
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "attendedDates": ["2023-01-01T00:00:00.000Z", "2023-01-02T00:00:00.000Z"]
}
```
4. Deletar um usuário pelo ID
```
DELETE /api/users/:id
```
Resposta:

```
{
  "message": "Usuário deletado"
}
```
## Scripts Disponíveis
No diretório do projeto, você pode executar:

1. _**npm start**_ 
Inicia o servidor de produção.

2. _**npm run dev**_ 
Inicia o servidor de desenvolvimento com nodemon para recarregar automaticamente em mudanças.

3. _**npm run build**_
Compila o projeto TypeScript para JavaScript.

## Desenvolvedores
:octocat:
Esta aplicação foi desenvolvida por:

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/flavialbraz" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/78583429?v=4" width="100px;" alt="Foto de Flavia no GitHub"/><br>
        <sub>
          <b>Flavia </b>
        </sub>
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/luciana-pereira" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/37550557?v=4" width="100px;" alt="Foto de Fernanda no GitHub"/><br>
        <sub>
          <b>Luciana Pereira</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/matheus-poro" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/111644802?v=4" width="100px;" alt="Foto de Matheus Cavalcante no GitHub"/><br>
        <sub>
          <b>Matheus Cavalcante</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/TobiasGustavo" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/88210620?v=4" width="100px;" alt="Foto de Tobias Soares no GitHub"/><br>
        <sub>
          <b>Tobias Soares</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## Licença
Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
