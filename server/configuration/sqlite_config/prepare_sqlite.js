const connect = require('@databases/sqlite');
const {sql} = require('@databases/sqlite');

const db = connect();

const prepareDB = async () => {
   await db.query(sql`
   CREATE TABLE credit_card_data (
     card_number VARCHAR NOT NULL PRIMARY KEY,
     name VARCHAR NOT NULL,
     credit_limit FLOAT NOT NULL,
     balance FLOAT NOT NULL
   );
 `);
}

const databasePrepare = prepareDB();

module.exports = { databasePrepare, db}