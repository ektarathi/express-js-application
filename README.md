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
