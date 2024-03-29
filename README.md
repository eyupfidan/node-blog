﻿<h1>Node.js Blog Application</h1>
<p>This application is a blog app developed using Node.js, Express, Handlebars, and MongoDB. The app allows users to add new blog posts, view and update existing posts, and also includes login and session functionality.</p>
<h2>Installation</h2>
<ol>
  <li>Download or clone the project to your computer.</li>
  <li>If Node.js is not already installed, download and install it from <a href="https://nodejs.org/en/download/" target="_new">here</a>. </li>
  <li>Navigate to the project's root directory in your terminal or command prompt.</li>
  <li>Run the command <code>npm install</code> in your terminal or command prompt. </li>
  <li>Create a MongoDB account or log in to an existing one.</li>
  <li>Create a <code>.env</code> file and set the variables containing your MongoDB connection string and session secret key: </li>
</ol>

```bash
MONGOOSE_CONNECT_URL=
```
<ol start="7">
  <li>Run the command <code>npm start</code> in your terminal or command prompt. </li>
</ol>
<h2>Usage</h2>
<p>The app runs at <code>http://localhost:3000</code>. </p>
<ul>
  <li>
    <code>/</code>: Home page where you can view the blog posts.
  </li>
  <li>
    <code>/posts</code>: List of blog posts, form to add a new post, and page to edit an existing post.
  </li>
  <li>
    <code>/users</code>: Login page and registration page for users.
  </li>
  <li>
    <code>/users/logout</code>: Logs out the user.
  </li>
</ul>
<h2>Development</h2>
<p>The app is developed using Node.js, Express, Handlebars, and MongoDB. The main files are:</p>
<ul>
  <li>
    <code>app.js</code>: The main application file.
  </li>
  <li>
    <code>routes/main.js</code>: The routers for the home page route.
  </li>
  <li>
    <code>routes/posts.js</code>: The routers for the blog post routes.
  </li>
  <li>
    <code>routes/users.js</code>: The routers for the user routes.
  </li>
  <li>
    <code>views/</code>: Handlebars templates.
  </li>
  <li>
    <code>public/</code>: Static files used to serve content.
  </li>
</ul>
<h2>Contributing</h2>
<p>Before contributing, please check the <code>issues</code> tab and discuss any suggestions or issues related to the development of the project. </p>
<ol>
  <li>Fork the repository.</li>
  <li>Create a branch: <code>git checkout -b feature/xyz</code>. </li>
  <li>Commit your changes: <code>git commit -am 'Add some feature'</code>. </li>
  <li>Push to the branch: <code>git push origin feature/xyz</code>. </li>
  <li>Submit a pull request.</li>
</ol>
