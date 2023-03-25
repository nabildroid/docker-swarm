FROM node

WORKDIR /app

COPY . .

ARG API


ENV API=$API


RUN npm i


run chmod +x ./init.sh

ENTRYPOINT ["./init.sh"]
