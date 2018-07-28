# Uses the official Node image, and is set to a specific version for compatibility.
FROM node:9.11.2

LABEL maintainer="ikbenpinda"
LABEL description="NgUitstelgedrag. Angular frontend."

# Set a directory within the image for the application code.
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+).
COPY package*.json ./

# Shell commands that install the app.
# Multiple commands can be chained using '\ &&'.
RUN npm install

# COPY <source> <destination>, copies the local files into the containers current working directory(as set by WORKDIR).
# Because the dockerfile is at the root of the project folder, and the WORKDIR is set,
# this resolves to 'current folder' for both.
COPY . .

# Make the default port of 3000 available for port forwarding(docker -p <port>:<port>).
# EXPOSE is mostly for incoming connections, so no worries about the mongoDB or Angular ports.
EXPOSE 4200

# The shell command that start the Express server.
# npm start executes the alias for starting the backend.
# this means the actual starting command is defined in the package.json.
# This way the actual starting command can be changed independently of this docker file.
# Additional defaults can be set using RUN or ENTRYPOINT>
CMD ["npm", "start"]
