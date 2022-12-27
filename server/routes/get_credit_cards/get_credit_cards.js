// Imports
const express = require('express');
const getCreditCards = require('../../models/get_credit_cards/get_credit_cards');

// Declarations
const router = express.Router();

router.get('', async (req, res) => {
   const get_card_details = await getCreditCards()
   res.json(get_card_details)
})

module.exports = router