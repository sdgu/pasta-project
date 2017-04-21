const express = require("express");
const router = express.Router();
const app = express();
const jwt = require("express-jwt");

require("../../env");

const authCheck = jwt(
{
	secret: process.env.AUTH0_SECRET,
	audience: process.env.AUTH0_CLIENT
});


router.get('/deals/public', (req, res)=>{
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
router.get('/deals/private', authCheck, (req,res)=>{
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

module.exports = router;