# Assignment 14 – Portfolio Website (Dockerized React App)

This project is my personal portfolio website, built with Create React App and packaged inside a Docker container. The goal of the assignment was to create a production build of the site and run it through Docker at **localhost:5575**.

The site includes sections about me, the work I’ve done so far in the program, the tools and languages I use, helpful resources, and my preferred developer setup.

---

## How to Run the Project

Here are the steps to get the portfolio running on your machine:

### 1. Build the Docker Image

Make sure you’re inside the project folder (where the Dockerfile is), then run:

```bash
docker build -t sanque_rovin_coding_assignment14 .

### 2. Build the Docker Image
docker run --name sanque_rovin_coding_assignment14 -p 5575:5575 sanque_rovin_coding_assignment14


### 3. open website
http://localhost:5575



### stopping and removing
docker stop sanque_rovin_coding_assignment14
docker rm sanque_rovin_coding_assignment14


## Running a commit

git add .
git commit -m "your message"
```
