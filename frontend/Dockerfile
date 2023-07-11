# syntax=docker/dockerfile:1
# Get the latest LTS version of Node.js
FROM node:18-alpine

# Create app directory
WORKDIR /game_concluder/frontend

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn

# Copy app source code
COPY . .

CMD ["yarn", "dev"]
