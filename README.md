# Assignment 12 - Web Component Library

This project is a React and TypeScript component library built using Create React App and Storybook.  
It includes reusable UI components like buttons, labels, tables, and cards. The app runs inside a Docker container on port 8083.

---

## How to Run Locally with Docker

1. **Build the image**

   In the same folder as the Dockerfile, run:
   `bash  docker build -t sanque_rovin_assignment13 . `

2. **Run the container**
   docker run --name sanque_rovin_coding_assignment13 -p 8018:8018 sanque_rovin_assignment13


3. **Open the app**
   http://localhost:8083

   **In case of errors!!**
   docker stop sanque_rovin_coding_assignment13
   docker rm sanque_rovin_coding_assignment13


Container name: sanque_rovin_coding_assignment13

Working directory: /sanque_rovin_ui_garden_build_checks


Port: 8018

## Running storybook
1. **Build the image**
   docker build -t sanque_rovin_storybook -f Dockerfile.storybook .
2. **Run the container**
   docker run --name sanque_rovin_storybook_container -p 8018:8018 sanque_rovin_storybook

   **In case of errors!!**
   dkocer stop sanque_rovin_storybook_container
   docker rm sanque_rovin_storybook_container


   Working directory: /sanque_rovin_ui_garden_build_checks
