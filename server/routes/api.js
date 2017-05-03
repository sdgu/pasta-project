const express = require("express");
const router = express.Router();
const app = express();
const jwt = require("express-jwt");

const mongoose = require("mongoose");
const characterInfoSchema = require("../schema/characterInfoSchema");
const itemSchema = require("../schema/itemSchema");

const CharacterInfo = mongoose.model("CharacterInfo", characterInfoSchema);
const Item = mongoose.model("Item", itemSchema);


// require("../../env");

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

router.get("/armory", (req, res) => 
{
  // let test = 
  // [{
  //   name: "Wood sword",
  //   desc: "Just a wooden sword.",
  //   lore: "Someone made this out of some wood.",
  //   img: "none"
  // }]
  // res.json(test);

  Item.find((err, docs) =>
  {
    if (err) return console.error(err);
    res.json(docs);
  });

});

router.post("/armory", (req, res) =>
{
  Item.findOne({"name": req.body.name}, (err, docs) =>
  {
    if (err) return console.error(err);
    console.log(docs);
    if (docs === null)
    {
      let submission = new Item(
      {
        name: req.body.name,
        desc: req.body.desc,
        lore: req.body.lore,
        img: req.body.img
      });
      submission.save((err2, docs2) =>
      {
        if (err2) return console.error(err2);
        console.log("submitted this: " + docs2);
        res.send(docs2)
      })
    }
    else
    {
      console.log("name already exists");
      res.send({});
    }
  })
})


router.put("/armory/:id", (req, res) =>
{
  let _id = req.params.id;
  Item.update({_id: _id},
  {
    $set:
    {
      name: req.body.name,
      desc: req.body.desc,
      lore: req.body.lore,
      img: req.body.img
    }
  }, (err, docs) =>
  {
    if (err) console.error(err);
    console.log(docs);
    res.send("updated item");
  })
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