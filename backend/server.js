const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let dados = [];

app.post('/salvar', (req, res) => {
  const { cnpj, mes, ano } = req.body;
  dados.push({ cnpj, mes, ano });
  res.json({ ok: true });
});

app.get('/historico', (req, res) => {
  res.json(dados);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
