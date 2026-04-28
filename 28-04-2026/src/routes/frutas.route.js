import { Router } from 'express';
import { frutasService } from '../services/frutas.service.js';

export const frutasRouter = Router();

frutasRouter.get('/', async (req, res) => {
    const frutas = await frutasService.getAll();
    res.json(frutas);
});