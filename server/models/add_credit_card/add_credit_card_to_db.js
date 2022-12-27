const { db, databasePrepare } = require("../../configuration/sqlite_config/prepare_sqlite")
const { sql } = require('@databases/sqlite');
const performLuhn10Check = require("./perform_luhn_10_check");
const duplicateCheckCreditCard = require("./duplicate_check");

const addCreditCardToDB = async (credit_card_details) => {
   // Perform Luhn 10 check
   const luhn_10_check = performLuhn10Check(credit_card_details.card_number)

   if(luhn_10_check.success === true) {
      // Check if the card is a duplicate
      const duplicate_check = await duplicateCheckCreditCard(credit_card_details.card_number)

      if(duplicate_check.duplicate === true) {
         return {
            success: false,
            reason: "This card has already been added to the database"
         }
      }

      // Proceed if successful
      const add_to_database = new Promise( async (resolve) => {
         try {
            await databasePrepare;
            await db.query(sql`
               INSERT INTO credit_card_data
                  VALUES(${credit_card_details.card_number}, ${credit_card_details.name}, ${credit_card_details.credit_limit}, 0)
            `)

            resolve({
               success: true
            })
         }

         catch (err) {
            console.error(new Date().toISOString(), __dirname, err)

            resolve({
               success: false,
               reason: "There was a technical error adding the new credit card, please try again later"
            })
         }
      })

      return await add_to_database
   } else {
      return {
         success: false,
         reason: luhn_10_check.reason
      }
   }
}

module.exports = addCreditCardToDB