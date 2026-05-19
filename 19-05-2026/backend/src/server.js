import express from 'express';
import 'dotenv/config';

import { filmesRoute } from './routes/filmes.route.js';

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    res.json("Bem-vindo á API de Filmes!");
});

app.use('/filmes', filmesRoute);

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});

