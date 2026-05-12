import { Router } from 'express';
import { frutasService } from '../services/frutas.service.js';

export const frutasRoute = Router();

frutasRoute.get('/', async (req, res) => {
    const frutas = await frutasService.getALL();
    res.json(frutas);
});



frutasRoute.get('/:id', async (req, res) => {
    const fruta = await frutasService.getById(req.params.id);
    res.json(fruta);
});

frutasRoute.get('/vendas/:id_cliente', async (req, res) => {
    const fruta = await frutasService.getVendaByIdCliente(req.params.id_cliente);
    res.json(fruta);
});


frutasRoute.post('/', async (req, res) => {
    const novaFruta = await frutasService.create(req.body);
    res.status(201).json(novaFruta);
});

frutasRoute.put('/:id', async (req, res) => {
    const { id } = req.params;
    const atualizada = await frutasService.update(id, req.body);
    
    if (!atualizada) {
        return res.status(404).json({ message: "Fruta não encontrada para atualizar" });
    }
    res.json(atualizada);
});

frutasRoute.patch('/:id', async (req, res) => {
    const atualizada = await frutasService.partialUpdate(req.params.id, req.body);
    res.json(atualizada);
});

frutasRoute.delete('/:id', async (req, res) => {
    const resultado = await frutasService.delete(req.params.id);
    res.json(resultado);
});