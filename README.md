# Markdown Blog

A blog where you can use markdown to create your posts!

One of the main focuses of this project was to use and get familiar with [Tailwind CSS](https://tailwindcss.com/) and to style the website with the [glassmorphism](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9) UI trend.

Visit the deployed app here: https://markdown-app-ypatel2022.herokuapp.com/

<br/>

# Setup: How to get Markdown Blog up and running

*Note: These instructions assume that you already have [node.js](https://nodejs.org/en/), npm (comes with node.js), [git](https://git-scm.com/downloads), and [mongodb](https://www.mongodb.com/try/download/community) setup on your computer.*

<br/>

Clone the repository on your terminal:
```sh
git clone https://github.com/ypatel2022/markdown-blog.git
```

Change terminal directory to project directory:
```sh
cd markdown-blog
```

Install relevant project dependancies in terminal:
```sh
npm i
```

Create a file called `.env` in the project directory and copy the following code:
```sh
MONGODB_URL=mongodb://localhost:27017
```

Start up the server by typing:
```sh
node app.js
```

Open up a web browser and visit:
```
http://localhost:3000/
```