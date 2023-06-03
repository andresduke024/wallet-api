const Encrypter = require("../../../src/utils/encrypter/encrypter.js");

describe("Encrypter tests", () => {
    test("It should return a valid encrypter object", () => {
        const result = Encrypter();

        expect(result).toHaveProperties(["encrypt", "compare"])
    })
});