# Use a lightweight Node 20 image
# This is ideal for building + serving React apps
FROM node:20-alpine

# Set working directory inside the container
# All subsequent commands run from here
# Requirement: lastName_firstName_ui_garden_build_checks
WORKDIR /sanque_rovin_ui_garden_build_checks

# Copy package.json + package-lock.json first
# This allows Docker to cache dependencies when source code changes
COPY package*.json ./

# Install NPM dependencies
RUN npm install

# Copy the rest of the source code into the container
COPY . .

# Build the Create React App production build
# This generates optimized static files in /build
RUN npm run build

# Install "serve", a lightweight static file server
# Used to serve the production build
RUN npm install -g serve

# Expose port 8018 so the app is accessible externally
EXPOSE 8018

# Start the server
# -s = serve static files
# -l 8018 = listen on port 8018
CMD ["serve", "-s", "build", "-l", "8018"]
