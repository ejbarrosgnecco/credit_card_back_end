const { db, databasePrepare } = require("../../configuration/sqlite_config/prepare_sqlite")
const { sql } = require('@databases/sqlite');

const duplicateCheckCreditCard = async (card_number) => {
   await databasePrepare;
   const results = await db.query(sql`
      SELECT * FROM credit_card_data
      WHERE card_number = ${card_number}
   `);
   if (results.length > 0) {
      return {
         duplicate: true
      }
   } else {
      return {
         duplicate: false
      }
   }
}

module.exports = duplicateCheckCreditCard