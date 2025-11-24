# ----------------------------
# Stage 1: Build the React app
# ----------------------------
FROM node:20-alpine AS build

# work dir
WORKDIR /sanque_rovin_final_site

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build production version of the app
RUN npm run build


# ----------------------------
# Stage 2: Serve the build
# ----------------------------
FROM node:20-alpine

# Keep same required working directory
WORKDIR /sanque_rovin_final_site

# Install a lightweight static server
RUN npm install -g serve

# Copy the production build from stage 1
COPY --from=build /sanque_rovin_final_site/build ./build

# Requirement: site runs at localhost:5575
EXPOSE 5575

# Serve build on port 5575
CMD ["serve", "-s", "build", "-l", "5575"]


# Summary of Multi-Stage Dockerfile for React App
# Stage 1 — Build Stage (FROM node:20-alpine AS build)
# Installs all dependencies
# Compiles the React app using npm run build
# Produces the optimized static files in the build/ folder
# Includes dev dependencies and source code (only needed temporarily)


# Stage 2 — Runtime Stage (FROM node:20-alpine)
# Starts with a clean, lightweight image
# Only includes the final build/ folder (copied from Stage 1)
# Does not include source code or dev tools
# Uses serve to host the static production build 