# Use an official Node runtime as a parent image
FROM node:6

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in package.json
RUN npm install

# Make port 7711 available to the world outside this container
EXPOSE 7711

# Define environment variable
ENV PORT 7711
ENV HOST 127.0.0.1

# Run node when the container launches
CMD ["node", "index.js"]
