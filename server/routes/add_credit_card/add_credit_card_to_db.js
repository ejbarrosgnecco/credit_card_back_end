// Imports
const express = require('express');
const addCreditCardToDB = require('../../models/add_credit_card/add_credit_card_to_db');

// Declarations
const router = express.Router();

router.post('', async (req, res) => {
   const add_card = await addCreditCardToDB(req.body)
   res.json(add_card)
})

module.exports = router