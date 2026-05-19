import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { filmesRoute } from './routes/filmes.route.js';
import { filmesService } from './services/filmes.service.js';

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    const filmes = await filmesService.getALL();
    return res.json(filmes);
});

app.use('/filmes', filmesRoute);

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});