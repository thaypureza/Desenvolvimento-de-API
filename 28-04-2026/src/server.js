import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT;

app.use(express.json());

app.get('/', (req, res) => {
    return res.json('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Api rodando em: http://localhost:${PORT}`);
});