The development environment is created using Node JS and Express by installing all the dependencies for making the application run.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any errors in the console.

## Project Structure
1) The code for defining the routes and external npm modules is kept inside **index.js**.
2) The **css** file is kept inside **public/css** folder and the **js** file is kept inside **public/js**.
3) The **scss folder** contained all the stylesheet(.scss) files.
4) The **css classes** are named based on BEM Methodology.
5) The **views folder** contain the .ejs templates for displaying the content on the browser.

## Project Highlights

1) Installed following npm modules for making the application run:
    * xslx for reading the xslx files.
    * node-sass-middleware for compiling scss file into css.
    * All the templates are written in ejs using module express-ejs-layouts.
    * nodemon for monitoring changes in the application.
2) Implemented onClick functionality on the Homepage buttons.
3) Lazy loading for the images on Portfolio page is implemented inside script.js


## Gatsby Question and Answers
1) Can you explain what GatsbyJS is and what the benefits of using it are?
    * Gatsby is a React-based, GraphQL powered, static site generator for creating websites and apps.
    * Benefits of using Gatsby are:
        * Gatsby sites are 2-3 times faster than similar types of sites. The framework improves the performance issues which we face while developing website/web application by using `PRPL` architectural pattern.
        * We can PWA apps using Gatsby
        * Gatsby uses GraphQL querying language to get data from anywhere.
        * We can hook into common CMS’s like WordPress and other headless CMS, as well as even just a CSV file.
        * A rich plugin ecosystem.

2) Can you explain how you would get the data from WordPress to GatsbyJS?
    * Before making your project work with fetching data from Wordpress website, we have to first install Gatsby making sure that the project runs successfully.Commands used for setting up the project with Gatsby are:
        * `npm install -g gatsby-cli`
        * gatsby new my-app
        * cd my-app
        * gatsby develop - For running the application on development environment
        * gatsby serve - To start an HTML server locally to display this static form of the website, we need to use the serve command
    * For connecting the application to wordpress , do the following steps: 
        * install the plugin `npm install gatsby-source-wordpress`
        * Update the gatsby-config.js file
        * Add the GraphQL queries for fetching the data from Wordpress source
        * Creat a page for new post by adding lines of code in gatsby-node.js
        * Create a template for displaying post and add link if required for each post from the Index page.

3) Can you describe why GatsbyJS makes a site secure?
    By implementing application in Gatsby, lots of security concerns which a developer face while developing application are resolved. Below are the list of issues which gets resolved:
        * Cross-Site Scripting - which can be prevented by sanitizing the inner HTML string
        * Cross-Site Request Forgery (CSRF)
        * Third party scripts - Check the dependencies installed inside node_modules/ folder have security vulnerabilities. We can use `npm audit` or `yarn audit` to check the dependencies.
        * Key security - Data fetched from various API and the key to access them should be stored in the build environment.
        * Content Security Policy (CSP) - For adding it to the Gatsby website, add gatsby-plugin-csp to your gatsby-config.js.

4) What is a PRPL?
    * PRPL stands for:
        * Push
        * Render
        * Pre-cache
        * Lazy-load