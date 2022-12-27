const performLuhn10Check = require("./perform_luhn_10_check");

describe("Test card number validation", () => {
   // Credit card number variations
   const variation_1 = "4263982640269299"; // Visa correct
   const variation_2 = "1234839293748392"; // Random incorrect
   const variation_3 = "374245455400126"; // Amex correct
   const variation_4 = "5425233430109903"; // Mastercard correct
   const variation_5 = "3530111333300001"; // JCB incorrect;
   const variation_6 = "3566000020000410"; // JCB correct
   const variation_7 = "5895626746595650"; // Naranja correct

   // Tests
   test('Credit card variation #1', () => {
      expect(performLuhn10Check(variation_1).success).toBe(true)
   })

   test('Credit card variation #2', () => {
      expect(performLuhn10Check(variation_2).success).toBe(false)
   })

   test('Credit card variation #3', () => {
      expect(performLuhn10Check(variation_3).success).toBe(true)
   })

   test('Credit card variation #4', () => {
      expect(performLuhn10Check(variation_4).success).toBe(true)
   })

   test('Credit card variation #5', () => {
      expect(performLuhn10Check(variation_5).success).toBe(false)
   })

   test('Credit card variation #6', () => {
      expect(performLuhn10Check(variation_6).success).toBe(true)
   })

   test('Credit card variation #7', () => {
      expect(performLuhn10Check(variation_7).success).toBe(true)
   })
})