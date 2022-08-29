require('dotenv').config();
const express = require("express");

const app = express();

const { PORT } = process.env;

app.get("/", (_req, res) => res.send("Express on Vercel"));
app.get("/teste", (_req, res) => res.status(200).json({ message: 'rota 2 de teste' }));

app.listen(PORT, () => console.log("Running on port 5000."));

module.exports = app;