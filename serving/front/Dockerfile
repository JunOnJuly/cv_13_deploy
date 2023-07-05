FROM node:16.20.0

RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm i --loglevel=error

CMD ["npm", "run", "build"]