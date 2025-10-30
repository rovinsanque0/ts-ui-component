# Use a lightweight Node.js 18 LTS image as the base
# This version is stable and works well for React + TypeScript projects
FROM node:20-alpine

# Set the working directory inside the container
# All files and commands will run from here
WORKDIR /sanque_rovin_ui_garden

# Copy package files and install dependencies first
# Doing this early helps Docker cache the dependencies,
# so it doesn’t reinstall everything every time you rebuild
COPY package*.json ./
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the optimized production version of the React app
# This turns the source code into static files (HTML, CSS, JS)
RUN npm run build

# Install a lightweight web server to serve the built files
# “serve” is used for hosting static sites instead of running the dev server
RUN npm install -g serve

# Expose port 8083 so the site is available on localhost:8083
EXPOSE 8083

# Run the app using the static build folder
# “-s” means serve static files, “-l 8083” sets the port number
CMD ["serve", "-s", "build", "-l", "8083"]
