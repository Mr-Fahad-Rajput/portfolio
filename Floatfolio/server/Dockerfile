FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD ["npm", "run", "dev"]
