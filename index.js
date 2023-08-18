const app = require('./src/server');
require('dotenv').config();

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));