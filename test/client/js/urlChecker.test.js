import { validURL } from "../../../src/client/js/urlChecker";


describe("Testing URL validation", () => {
   test("Testing positive cases", () => {
      const validURLs = [
         "https://www.ebnbatota.com/",
         "https://www.youtube.com/watch?v=FgnxcUQ5vho",
         "https://stackabuse.com/get-query-strings-and-parameters-in-express-js",
      ]
      for (let url of validURLs) {
         expect(validURL(url)).toBeTruthy();
      }
      
})
   test("Testing negative cases", () => {
      const invalidURLs = [
         "0",
         `asaswswqsd`,
         '',
         'wwwgooglecom',
         'www.google.com/213213?123'
      ]
      for (let url of invalidURLs) {
         expect(validURL(url)).toBeFalsy();
      }
   })
});

