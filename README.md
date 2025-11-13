# Assignment 13 - UC Component Library

This project showcases automated code-quality enforcement using Husky pre-commit hooks and GitHub Actions CI. While also running on port 8018.

---

## How to Run Locally with Docker

1. **Build the image**

   In the same folder as the Dockerfile, run:
   `bash  docker build -t sanque_rovin_assignment13 . `

2. **Run the container**
   docker run --name sanque_rovin_coding_assignment13 -p 8018:8018 sanque_rovin_assignment13

3. **Open the app**
   http://localhost:8018

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
   docker stop sanque_rovin_storybook_container
   docker rm sanque_rovin_storybook_container

   Working directory: /sanque_rovin_ui_garden_build_checks

## Running a commit

git add .
git commit -m "your message"
