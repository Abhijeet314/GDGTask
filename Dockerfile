# Step 1: Use an official Node.js image as a base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application to the container
COPY . .

# Step 6: Build the app (in production mode)
RUN npm run build

# Step 7: Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Step 8: Set the environment to production
ENV NODE_ENV=production

# Step 9: Expose the port the app will run on
EXPOSE 3000

# Step 10: Start the app with the 'serve' command
CMD ["serve", "-s", "build", "-l", "3000"]
