# Use an official Node.js image as the base
FROM node:20

# Install Java JDK
RUN apt-get update && apt-get install -y openjdk-17-jdk

# Set the working directory
WORKDIR /app

# Copy the application files
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 4500

# Start the application
CMD ["npm", "run", "server"]
