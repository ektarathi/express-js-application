// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const XLSX = require('xlsx')
var sassMiddleware = require('node-sass-middleware');

const app = express()
const port = process.env.PORT || 3000

// SCSS styling
var path = require('path');
app.use(sassMiddleware({
    src: path.join(path.join(__dirname, 'scss'), 'stylesheets'),
    dest: path.join(path.join(__dirname, 'public'), 'css'),
    debug: true,
    force: true,
    outputStyle: "compress",
    prefix:  '/css'
}),
express.static(path.join(__dirname, 'public'))
);

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// Reading data from xslx file
var workbook = XLSX.readFile('data.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlDataHomePage = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {defval:""});
var xlDataPortfolio = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]], {defval:""});
var xlDataAboutPage = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]], {defval:""});
  
// Routes
app.get('', (req, res) => {
    res.render('index', { title: 'Home Page', data: xlDataHomePage})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', data: xlDataAboutPage })
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { title: 'Portfolio Page', data: xlDataPortfolio })
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))