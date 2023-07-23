ARG IMAGE=node:16.13-alpine

#COMMON
FROM $IMAGE as builder

RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY ./package.json ./
RUN npm install

RUN npm install -S faiss-node

COPY ./ ./

#DEVELOPMENT
FROM builder as dev
CMD ["npm", "run", "dev"]
