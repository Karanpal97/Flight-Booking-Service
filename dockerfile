FROM node 

WORKDIR /developer/nodejs/booking

COPY . .

RUN npm ci

ENV PORT=4000

CMD ["npm","run","dev"]