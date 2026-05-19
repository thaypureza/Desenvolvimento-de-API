import express from 'express';
import { filmesService } from '../service/filmes.service.js';

export const filmesRouter = express.Router();

filmesRouter.get('/', async (req, res) => {
    const filmes = await filmesService.getALL();
    res.json(filmes);
});

filmesRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const filme = await filmesService.getById(id);
    res.json(filme);
});

filmesRouter.post('/', async (req, res) => {
    const dados = req.body;
    const novoFilme = await filmesService.create(dados);
    res.json(novoFilme);
});

filmesRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    const filmeAtualizado = await filmesService.update(id, dados);
    res.json(filmeAtualizado);
});

filmesRouter.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    const filmeAtualizado = await filmesService.partialUpdate(id, dados);
    res.json(filmeAtualizado);
});

filmesRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await filmesService.delete(id);
    res.json({ message: "Filme removido!" });
});
