import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { frutasRoute } from './routes/frutas.route.js';
import { frutasService } from './services/frutas.service.js';

const app = express();
const PORT = process.env.API_PORT || 3000;

app.use(express.json());

app.get('/', async (req, res) => {
    const frutas = await frutasService.getALL();
    return res.json(frutas);
});

app.use('/frutas', frutasRoute);

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});