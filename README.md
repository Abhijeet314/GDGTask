GDG Task - React Application

Table of Contents
About the Project
Features
Getting Started
Prerequisites
Installation
Running Locally
Docker Support
Deployment
Usage
Contributing
License
Contact
About the Project
This project is a Google Developer Group (GDG) website built using React. The website showcases the GDG RCOEM campus community, featuring events, stats, and key information about the group and its activities.

Features
Light/Dark mode toggle.
Hamburger menu for mobile responsiveness.
Display of event stats, community members, and attendees.
Footer with social media links and contact information.
Smooth integration with Docker for containerization.
Getting Started
Follow these steps to get a local copy of the project up and running.

Prerequisites
Make sure you have the following tools installed:

Node.js
npm
Docker
Installation
Clone the repo:

bash
Copy code
git clone https://github.com/yourusername/repository-name.git
cd repository-name
Install NPM packages:

bash
Copy code
npm install
Running Locally
Start the development server:

bash
Copy code
npm start
This will launch the app at http://localhost:3000.

Docker Support
This app is also containerized using Docker.

Build the Docker image:

bash
Copy code
docker build -t gdg-task-app .
Run the Docker container:

bash
Copy code
docker run -p 3000:3000 gdg-task-app
The application will be accessible at http://localhost:3000.

Deployment
The app is ready to be deployed to platforms like Vercel or DockerHub.

Vercel Deployment:
Create a Vercel account and link your GitHub repository.
Vercel will automatically detect the project and deploy it.
DockerHub:
Login to DockerHub:

bash
Copy code
docker login
Tag the image:

bash
Copy code
docker tag gdg-task-app your-dockerhub-username/gdg-task-app
Push the image to DockerHub:

bash
Copy code
docker push your-dockerhub-username/gdg-task-app
Usage
Toggle between light and dark mode using the switch in the header.
Navigate through the site using the navigation bar or the hamburger menu on smaller screens.
View key stats about GDG activities on the Stats section.
Check upcoming events and contact the team via social links in the footer.
Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project.
Create your Feature Branch (git checkout -b feature/YourFeature).
Commit your Changes (git commit -m 'Add some YourFeature').
Push to the Branch (git push origin feature/YourFeature).
Open a Pull Request.
License
Distributed under the MIT License. See LICENSE.txt for more information.

Contact
GDG RCOEM - dsc.rknec@gmail.com

Project Link: https://github.com/yourusername/repository-name
