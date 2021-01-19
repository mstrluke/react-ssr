# Build stage
FROM node:12.18.4-alpine3.9 as builder
WORKDIR app
COPY package*.json ./
COPY . .
RUN yarn

# Deploy stage
FROM node:12.18.4-alpine3.9
WORKDIR app
COPY --from=builder app .
EXPOSE 3000

CMD yarn prod