FROM node:18

RUN npm install -g nodemon ts-node

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "build"]
