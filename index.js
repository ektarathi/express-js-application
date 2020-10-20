// Imports
const express = require("express");
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require("./client_secret.json");
const expressLayouts = require("express-ejs-layouts");
var sassMiddleware = require("node-sass-middleware");

const app = express();
const port = process.env.PORT || 3000;

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1oNWqFRZdMmrXgW16s6tdTQhft9sl8YA158UmANLyJAo');

async function accessSpreadsheet() {
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });

  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  const sheet1 = doc.sheetsByIndex[1]; // or use doc.sheetsById[id]
  const sheet2 = doc.sheetsByIndex[2]; // or use doc.sheetsById[id]
  
  const rows = await sheet.getRows();
  const portfolioPage = await sheet1.getRows();
  const aboutPage = await sheet2.getRows();

  // Routes
  app.get("", (req, res) => {
	res.render("index", { title: "Home Page", data: rows });
  });

  app.get("/portfolio", (req, res) => {
	res.render("portfolio", { title: "Portfolio Page", data: portfolioPage });
  });

  app.get("/about", (req, res) => {
	res.render("about", { title: "About Page", data: aboutPage });
  });
}

accessSpreadsheet();

// SCSS styling
var path = require("path");
app.use(
	sassMiddleware({
		src: path.join(path.join(__dirname, "scss"), "stylesheets"),
		dest: path.join(path.join(__dirname, "public"), "css"),
		debug: true,
		force: true,
		outputStyle: "compress",
		prefix: "/css",
	}),
	express.static(path.join(__dirname, "public"))
);

// Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");
app.set("view engine", "ejs");

// Listen on Port 3000
app.listen(port, () => console.info(`App listening on port ${port}`));
