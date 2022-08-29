const app = require('express')()
const cors = require('cors');

app.use(cors());

app.get('/', (_req, res, _next) => res.status(200).json({ message: 'olá mundo pela vercel !' }));

app.listen(3000, () => console.log('Server Up'));