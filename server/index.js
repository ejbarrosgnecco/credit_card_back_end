const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")

//----------------

// ** IMPORTS ** //
//-- Add credit card -- //
const add_credit_card_to_db = require("./routes/add_credit_card/add_credit_card_to_db")

//-- Get credit cards -- //
const get_credit_cards = require("./routes/get_credit_cards/get_credit_cards")

// ** PREPARE SERVER ** //
const app = express();
app.use(bodyParser.json())
app.use(cors())

// ** ROUTES ** //
//-- Add credit card -- //
app.use("/v1/creditCards/add", add_credit_card_to_db)

//-- Get credit cards -- //
app.use("/v1/creditCards/getAll", get_credit_cards)


app.listen(3001, () => {
   console.log("Node server is listening on port 3001")
});