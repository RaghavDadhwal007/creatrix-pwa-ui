FROM node:16.10.0

WORKDIR /app

COPY package.json /app

COPY package-lock.json /app

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
