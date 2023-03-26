#!/bin/bash

sleep 2
npx prisma migrate dev --name init
npx prisma generate
sleep 2

npm run start