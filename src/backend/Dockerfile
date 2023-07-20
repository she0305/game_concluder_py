# syntax=docker/dockerfile:1
# Get the latest LTS version of Node.js
FROM node:18

# Create app directory
WORKDIR /game_concluder/src/backend

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn
# Copy app source code
COPY . ./

# Generate Prisma client and TypeGraphQL schema and resolvers
# Since binary target server is different when ran in container, generating prisma first
RUN yarn prisma generate

# Port that other ends run
EXPOSE 3000

# Apply migrations and start server
CMD ["sh", "-c", "yarn migrate:dev && yarn dev"]
