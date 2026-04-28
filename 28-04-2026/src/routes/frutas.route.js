import { Router } from 'express';

const frutasRouter = Router();

frutasRouter.get('/', async (req, res) => {
    const frutas = await frutasService.getAll();
    return res.json(frutas);
});