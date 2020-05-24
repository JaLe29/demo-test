FROM node:10-alpine

COPY package.json package.json

RUN npm install

COPY src src

# COPY .env .env

EXPOSE 4444

CMD ["npm", "run", "start"]
