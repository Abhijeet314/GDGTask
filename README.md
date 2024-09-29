# GDG Task - React Application

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Docker Support](#docker-support)
- [Using Docker Image](#using-docker-image)
- [Deployment](#deployment)
  - [Vercel Deployment](#vercel-deployment)
  - [DockerHub](#dockerhub)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project
This project is a Google Developer Group (GDG) website built using React. The website showcases the GDG RCOEM campus community, featuring events, stats, and key information about the group and its activities.

## Features
- Light/Dark mode toggle.
- Hamburger menu for mobile responsiveness.
- Display of event stats, community members, and attendees.
- Footer with social media links and contact information.
- Smooth integration with Docker for containerization.

## Getting Started
Follow these steps to get a local copy of the project up and running.

### Prerequisites
Make sure you have the following tools installed:
- Node.js
- npm
- Docker

### Installation
Clone the repo:
```bash
git clone https://github.com/yourusername/repository-name.git
cd repository-name

```
Install NPM packages:
```bash
npm install

```
### Running Locally
Start the development server:
```bash
npm start
```
### This will launch the app at http://localhost:3000.

### Docker Support

This app is also containerized using Docker.

Build the Docker image:
```bash
docker build -t gdg-task-app. 
```

Run the Docker container:
```bash
docker run -p 3000:3000 gdg-task-app
```
### Using Docker Image
You can also use the pre-built Docker image available on Docker Hub. To get started, follow these steps:

1.Ensure you have Docker Desktop installed and running.<br>

2.Pull the Docker image:<br>
```bash
docker pull abhijeet172005/react-app
```
3.Run the Docker container:
```bash
docker run -p 3000:3000 abhijeet172005/react-app
```
The application will be accessible at http://localhost:3000.

### Deployment
The app is ready to be deployed to platforms like Vercel or DockerHub.

### Vercel Deployment
1.Create a Vercel account and link your GitHub repository.<br>

2.Vercel will automatically detect the project and deploy it.<br>

### DockerHub
Login to DockerHub:
```bash
docker login
```
Tag the image:
```bash
docker tag gdg-task-app your-dockerhub-username/gdg-task-app
```

Push the image to DockerHub:
```bash
docker push your-dockerhub-username/gdg-task-app
```

### Usage
1.Toggle between light and dark mode using the switch in the header.<br>

2.Navigate through the site using the navigation bar or the hamburger menu on smaller screens.<br>

3.View key stats about GDG activities in the Stats section.<br>

4.Check upcoming events and contact the team via social links in the footer.<br>

### Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1.Fork the Project.<br>

2.Create your Feature Branch (git checkout -b feature/YourFeature).<br>

3.Commit your Changes (git commit -m 'Add some YourFeature').<br>

4.Push to the Branch (git push origin feature/YourFeature).<br>

5.Open a Pull Request.<br>

### License
Distributed under the MIT License. See LICENSE.txt for more information.

### Contact
GDG RCOEM - dsc.rknec@gmail.com

Project Link: https://github.com/Abhijeet314/GDGTask
