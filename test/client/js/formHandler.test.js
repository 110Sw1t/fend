/**
 * @jest-environment jsdom
 */
// ^^Must be at the very top of the file 


import { handleSubmit } from "../../../src/client/js/formHandler";

describe("Testing URL validation", () => {
   test("Handle submit is defined", () => {
      expect(handleSubmit).toBeDefined();
   })
   test("Handle submit is working as expected", () => {
      // Pre conditions
      document.getElementById('name').value = "https://en.wikipedia.org/wiki/Fare_basis_code"
      const event = { preventDefault() {} }
      // Execute behavior
      handleSubmit(event);
      // Check post conditions
      const resultsHTMLElement = document.getElementById("results");
      expect(resultsHTMLElement.children).toBeGreaterThan(0);
   })
   test("Handle submit returns false to prevent default behavior of submit button", () => {
      expect(handleSubmit({})).toBeFalsy();
   })
})