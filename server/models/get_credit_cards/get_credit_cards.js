const { db, databasePrepare } = require("../../configuration/sqlite_config/prepare_sqlite")
const { sql } = require('@databases/sqlite');

const getCreditCards = async () => {
   // Get all credit cards from DB
   const get_credit_cards = new Promise( async (resolve) => {
      try {
         await databasePrepare;
         const results = await db.query(sql`
            SELECT * FROM credit_card_data;
         `);
         if (results.length) {
            resolve({
               success: true,
               data: results
            })
         } else {
            resolve({
               success: false,
               reason: "There are currently no credit cards in the database"
            })
         }
      }

      catch (err) {
         resolve({
            success: false,
            reason: "There was a technical error retrieving the requested credit card data, please try again later"
         })
      }
   })

   return get_credit_cards
}

module.exports = getCreditCards