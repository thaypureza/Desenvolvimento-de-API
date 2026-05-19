import { pool } from '../config/db.js';

class FilmesService {
    async getALL() {
        try {
            const res = await pool.query("SELECT * FROM filmes");
            return res.rows;
        } catch (error) {
            console.error("Erro ao buscar os filmes:", error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const res = await pool.query("SELECT * FROM filmes WHERE id = $1", [id]);
            return res.rows[0];
        } catch (error) {
            console.error("Erro ao buscar o filme por id:", error);
            throw error;
        }
    }
    async create(dados) {
        const { nome, categoria } = dados;
        try {
            const query = "INSERT INTO filmes (nome, categoria) VALUES ($1, $2) RETURNING *";
            const res = await pool.query(query, [nome, categoria]);
            return res.rows[0];
        } catch (error) {
            console.error("Erro ao criar o filme:", error);
            throw error;
        }
    }

    async update(id, dados) {
        const { nome, categoria } = dados;
        try {
            const query = "UPDATE filmes SET nome = $1, categoria = $2 WHERE id = $3 RETURNING *";
            const res = await pool.query(query, [nome, categoria, id]);
            return res.rows[0];
        } catch (error) {
            console.error("Erro ao atualizar o filme:", error);
            throw error;
        }
    }
    async partialUpdate(id, dados) {
        const { nome, categoria } = dados;
        try {
            const query = "UPDATE filmes SET nome = COALESCE($1, nome), categoria = COALESCE($2, categoria) WHERE id = $3 RETURNING *";
            const res = await pool.query(query, [nome, categoria, id]);
            return res.rows[0];
        } catch (error) {
            console.error("Erro na atualização parcial do filme:", error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const query = "DELETE FROM filmes WHERE id = $1";
            await pool.query(query, [id]);
            return { message: "Filme removido com sucesso!" };
        } catch (error) {
            console.error("Erro ao deletar o filme:", error);
            throw error;
        }
    }
}

export const filmesService = new FilmesService();