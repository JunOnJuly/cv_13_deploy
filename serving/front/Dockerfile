FROM node:16.20.0

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install -g npm@9.7.2
RUN npm install

CMD ["npm", "start"]