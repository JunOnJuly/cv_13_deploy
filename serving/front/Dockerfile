FROM node:16.20.0

COPY . /app
WORKDIR /app

RUN npm i
RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]