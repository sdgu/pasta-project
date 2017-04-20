// const express = require("express");
// const path = require("path");
// const http = require("http");
// const bodyParser = require("body-parser");
// const favicon = require("serve-favicon");

// const helmet = require("helmet");
// const cors = require("cors");
// const api = require("./server/routes/api");



// app.use(favicon(path.join(__dirname, "src/assets", "faviconglass.png")));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// app.use(express.static(path.join(__dirname, "/dist")));

// app.use("/api", api);





'use strict';

const express = require('express');
const app = express();
const path = require("path");
// Import the required dependencies
const jwt = require('express-jwt');
const cors = require('cors');

// function moduleAvailable(name) {
//     try {
//         require.resolve(name);
//         return true;
//     } catch(e){}
//     return false;
// }
require("./env");
// if (moduleAvailable("./env"))
// {
//   require("./env");
//   console.log("got env");
// }
// else
// {
//   console.log("no env");
// }

app.use(cors());
app.use(express.static(path.join(__dirname, "/dist")));


// We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid token sent in the Authorization header
const authCheck = jwt({
  secret: process.env.AUTH0_SECRET,
  // secret: new Buffer(process.env.AUTH0_SECRET, 'base64'),
  audience: process.env.AUTH0_CLIENT
});

var users = [
  { id: 1, name: 'Todd Motto' },
  { id: 2, name: 'Brad Green'},
  { id: 3, name: 'Igor Minar' }
];

app.get('/api/users', authCheck, function(req, res) {
  res.json(users);
});

app.get('/api/deals/public', (req, res)=>{
  let deals = [
    // Array of public deals
     {
    id: 1234,
    name: 'Name of Product',
    description: 'Description of Product',
    originalPrice: 19.99, // Original price of product
    salePrice: 9.99 // Sale price of product
}
  ];
  res.json(deals);
})

// For the private route, we'll add this authCheck middleware
app.get('/api/deals/private', authCheck, (req,res)=>{
  let deals = [
    // Array of private deals
     {
    id: 69,
    name: 'Apple Pasta',
    description: 'Descaoeuription of Product',
    originalPrice: 19.90, // Original price of product
    salePrice: 0.99 // Sale price of product
}
  ];
  res.json(deals);
})

app.get("*", (req, res) =>
{
	if (req.url.indexOf("/api/") > -1)
	{
		res.send(req.body);
	}
	else if (req.url.indexOf(".js") > -1)
	{
		res.send(req.body);
	}
	else if (req.url.indexOf(".png") > -1)
	{
		res.sendFile(__dirname + "/src/assets/faviconglass.png");
	}
	else
	{
		res.sendFile(path.join(__dirname, "dist/index.html"));
	}
});

const port = process.env.PORT || 6900;
app.listen(port);
console.log(`Listening on port ${port}`);