import { pool } from '../config/db.js'

class FrutasService {
 async getAll() {
    try {
        const query = "SELECT * FROM frutas"
        const res = await pool.query(query)
        return res.rows
    } catch (error) {
            console.error(error)
    }
    }
}


export const frutasService = new FrutasService();