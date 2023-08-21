FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN chmod +x startup.sh
RUN npm i -g sequelize-cli

ENTRYPOINT [ "./startup.sh" ]