const express = require('express');
const app = express();
const pessoasRoutes = require('./routes/pessoas');

const PORT = 3000;

app.use(express.json());
app.use(pessoasRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
