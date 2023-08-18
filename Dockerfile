# Use a imagem Node.js como base
FROM node:18

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Instale as migrações do Sequelize
RUN npx sequelize-cli db:migrate

# Exponha a porta em que o seu aplicativo está ouvindo (a mesma configurada no código)
EXPOSE 80

# Comando para iniciar o servidor quando o contêiner for executado
CMD ["node", "index.js"]
