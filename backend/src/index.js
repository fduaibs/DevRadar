// Métodos http: GET (Não aceita body, ), POST, PUT, DELETE << Semânticas, padrões de API RESTful

// Tipos de parâmetros:
// Query Params: 90% utilizados em GET, são visíveis na url; request.query (Filtros, ordenação, paginação, ...)
// Route Params: Usado em POST e DELETE; request.params (identificar um recurso na alteração ou remoção)
// Body: Usado em POST e PUT; request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://duaibs:<password>@cluster0-jr7op.mongodb.net/omni10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); //Setando o body como json
app.use(routes);

server.listen(3333);
