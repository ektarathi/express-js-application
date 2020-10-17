The development environment is created using Node JS and Express by installing all the dependencies for making the application run.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any errors in the console.

## Project Highlights

1) Installed following npm modules for making the application run:
    i) xslx for reading the xslx files.
    ii) node-sass-middleware for compiling scss file into css.
    iii) All the templates are written in ejs using module express-ejs-layouts.
    iv) nodemon for monitoring changes in the application.
2) Implemented onClick functionality on the Homepage buttons.
3) Lazy loading for the images on Portfolio page is implemented inside script.js

## Gatsby Question and Answers
1) Can you explain what GatsbyJS is and what the benefits of using it are?

2) Can you explain how you would get the data from WordPress to GatsbyJS?
    a) Before making your project work with fetching data from Wordpress website, we have to first install Gatsby making sure that the project runs successfully.Commands used for setting up the project with Gatsby are:
        i) ### `npm install -g gatsby-cli`
        ii) gatsby new my-app
        iii) cd my-app
        iv) gatsby develop - For running the application on development environment
        v) gatsby serve - To start an HTML server locally to display this static form of the website, we need to use the serve command
    b) For connecting the application to wordpress , do the following steps: 
        i) install the plugin ### `npm install gatsby-source-wordpress`
        ii) Update the gatsby-config.js file
        iii) Add the GraphQL queries for fetching the data from Wordpress source
        iv) Creat a page for new post by adding lines of code in gatsby-node.js
        v) Create a template for displaying post and add link if required for each post from the Index page.

3) Can you describe why GatsbyJS makes a site secure?

4) What is a PRPL?
    PRPL stands for:
        Push
        Render
        Pre-cache
        Lazy-load