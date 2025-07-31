FROM node:22

WORKDIR /api

COPY . /api/

RUN npm install

RUN npx prisma generate
RUN npm run build

RUN npm run build

EXPOSE 5000

CMD [ "npm","run","start:prod" ]