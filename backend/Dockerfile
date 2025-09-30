# Use Node.js LTS version
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy source code
COPY src/ ./src

# Expose port
EXPOSE 5000

# Start the app
CMD ["node", "src/app.js"]
