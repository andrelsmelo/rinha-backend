const app = require('./src/server')

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
