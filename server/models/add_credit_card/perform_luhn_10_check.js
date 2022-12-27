const performLuhn10Check = (card_number) => {
   // First check syntax
   if (/[^0-9-\s]+/.test(card_number)) {
      return {
         success: false,
         reason: "Card number should only contain numbers, dashes or spaces"
      }
   };

   // Now perform luhn 10 algorithmic check
   let nDigits = card_number.length; // Number of digits
 
   let nSum = 0; // Sum
   let isSecond = false; // Is second

   for (let i = nDigits - 1; i >= 0; i--) {
      let d = card_number[i].charCodeAt() - '0'.charCodeAt(); // digit index

      if (isSecond == true) d = d * 2;

      nSum += parseInt(d / 10, 10);
      nSum += d % 10;

      isSecond = !isSecond;
   }

   if((nSum % 10) == 0) {
      
      return {
         success: true
      }
   } else {
      return {
         success: false,
         reason: "The card number provided is invalid, please double check your input"
      }
   }
}

module.exports = performLuhn10Check
