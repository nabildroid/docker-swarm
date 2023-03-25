FROM node


WORKDIR /app

COPY . .

RUN npm i

EXPOSE  3000

ARG DATABASE_URL


ENV DATABASE_URL=$DATABASE_URL

run chmod +x ./init.sh

ENTRYPOINT ["./init.sh"]
