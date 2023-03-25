# Use a Node.js base image with version 14
FROM node:19.7.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the container
COPY . .

# Expose the port used by the Nest.js app (default is 3000)
EXPOSE 4200

# Start the Nest.js app using the "yarn start" command
CMD ["yarn", "start:dev"]