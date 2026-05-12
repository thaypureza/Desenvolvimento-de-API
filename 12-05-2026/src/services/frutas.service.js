import { pool } from '../config/db.js';

export const frutasService = {
    async getALL() {
        const res = await pool.query("SELECT * FROM frutas");
        return res.rows;
    },

    async getById(id) {
        const res = await pool.query("SELECT * FROM frutas WHERE id = $1", [id]);
        return res.rows[0];
    },

//SELECT fr.id, fr.nome
//	FROM public.frutas as fr INNER JOIN
//	public.vendas as vend
//	ON fr.id = vend.id_frutas
//	WHERE vend.id_cliente = '8501fb89-2fc0-443e-84f9-2c04d13db5be'

        async getVendaByIdCliente(id) {
        const res = await pool.query("SELECT fr.id, fr.nome FROM public.frutas as fr INNER JOIN public.vendas as vend ON fr.id = vend.id_frutas WHERE vend.id_cliente = $1", [id]);
        return res.rows[0];
    },

    async create(dados) {
        const { nome, cor } = dados;
        const query = "INSERT INTO frutas (nome, cor) VALUES ($1, $2) RETURNING *";
        const res = await pool.query(query, [nome, cor]);
        return res.rows[0];
    },

    async update(id, dados) {
    const { nome, cor } = dados;
    const query = "UPDATE frutas SET nome = $1, cor = $2 WHERE id = $3 RETURNING *";
    const res = await pool.query(query, [nome, cor, id]);
    return res.rows[0];
},

    async partialUpdate(id, dados) {
        const { nome, cor } = dados;
        const query = "UPDATE frutas SET nome = COALESCE($1, nome), cor = COALESCE($2, cor) WHERE id = $3 RETURNING *";
        const res = await pool.query(query, [nome, cor, id]);
        return res.rows[0];
    },

    async delete(id) {
        const query = "DELETE FROM frutas WHERE id = $1";
        await pool.query(query, [id]);
        return { message: "Fruta removida!" };
    }
};