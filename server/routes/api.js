const express = require("express");
const router = express.Router();
const app = express();
const jwt = require("express-jwt");

const mongoose = require("mongoose");
const characterInfoSchema = require("../schema/characterInfoSchema");

require("../../env");

const authCheck = jwt(
{
	secret: process.env.AUTH0_SECRET,
	audience: process.env.AUTH0_CLIENT
});


const dbURI = process.env.DBURI;
mongoose.connect(dbURI);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => 
{
  console.log("connected to db");
})

const CharacterInfo = mongoose.model("CharacterInfo", characterInfoSchema);


router.get("/characterInfo", authCheck, (req, res) =>
{
  // let test = new CharacterInfo(
  // {
  //   name: "Chameleon",
  //   info: "Is cool.",
  //   cards: ["Invis"]
  // });
  // test.save((err) => 
  // {
  //   if (err) return handleError(err);
  // })

  CharacterInfo.find({}, (err, docs) =>
  {
    if (err) return handleError(err);

    res.json(docs);
  })

  // console.log("getting");
  // console.log(test);
  // res.json(test);

})




module.exports = router;












// router.get('/deals/public', (req, res)=>{
//   let deals = [
//     // Array of public deals
//      {
//     id: 1234,
//     name: 'Name of Product',
//     description: 'Description of Product',
//     originalPrice: 19.99, // Original price of product
//     salePrice: 9.99 // Sale price of product
// }
//   ];
//   res.json(deals);
// })

// // For the private route, we'll add this authCheck middleware
// router.get('/deals/private', authCheck, (req,res)=>{
//   let deals = [
//     // Array of private deals
//      {
//     id: 69,
//     name: 'Apple Pasta',
//     description: 'Descaoeuription of Product',
//     originalPrice: 19.90, // Original price of product
//     salePrice: 0.99 // Sale price of product
// }
//   ];
//   res.json(deals);
// })