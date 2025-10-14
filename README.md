# Assignment 12 - Web Component Library

This project is a React and TypeScript component library built using Create React App and Storybook.  
It includes reusable UI components like buttons, labels, tables, and cards. The app runs inside a Docker container on port 8083.

---

## How to Run Locally with Docker

1. **Build the image**

   In the same folder as the Dockerfile, run:
   ```bash  docker build -t sanque_rovin_coding_assignment12 . ```
  

2.  **Run the container**
    docker run -d -p 8083:8083 --name sanque_rovin_coding_assignment12 sanque_rovin_coding_assignment12

3. **Open the app**
    http://localhost:8083


    **In case of errors!!**
    docker stop sanque_rovin_coding_assignment12
    docker rm sanque_rovin_coding_assignment12

    

Container name: sanque_rovin_coding_assignment12

Working directory: /sanque_rovin_ui_garden

Port: 8083




