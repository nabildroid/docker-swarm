FROM node


WORKDIR /app

COPY . .

RUN npm i


ARG DATABASE_URL


ENV DATABASE_URL=$DATABASE_URL

run chmod +x ./init.sh

user node

ENTRYPOINT ["./init.sh"]
