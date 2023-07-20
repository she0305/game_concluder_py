# syntax=docker/dockerfile:1
# Get the latest LTS version of Node.js
FROM node:18

# Set to non-root user
USER node

# Create app directory
WORKDIR /game_concluder/src/frontend

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn
# Copy app source code
COPY . .

# Port that other ends run
EXPOSE 3000

CMD ["yarn", "dev"]
