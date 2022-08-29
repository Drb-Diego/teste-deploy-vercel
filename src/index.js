const app = require('express')()
const cors = require('cors');
require('dotenv').config();

app.use(cors());
const { PORT } = process.env;

app.get('/', (_req, res, _next) => res.status(200).json({ message: 'olá mundo pela vercel !' }));
app.get('/teste', (_req, res, _next) => res.status(200).json({ message: 'rota 2' }));

app.listen(PORT, () => console.log('Server Up'));

module.exports = app;