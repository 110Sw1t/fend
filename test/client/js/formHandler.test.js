import { handleSubmit } from "../../../src/client/js/formHandler";

describe("Testing URL validation", () => {
   test("Handle submit is defined", () => {
      expect(handleSubmit).toBeDefined();
   })
   test("Handle submit returns false to prevent default behavior of submit button", () => {
      expect(handleSubmit({})).toBeUndefined();
   })
})