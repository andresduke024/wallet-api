const { Validator } = require("../../../src/utils/validations/validator.js");

describe("Validator test", () => {
    let sut;

    beforeEach(() => {
        sut = new Validator;
    })

    test("It should return true", () => {
        const mock = { data: "mock_data" }
        const result = sut.isValidObject(mock);
        
        expect(result).toBe(true);
    })

    test("It should return false due to empty object", () => {
        const result = sut.isValidObject({});
        
        expect(result).toBe(false);
    })

    test("It should return false (number)", () => {
        const result = sut.isValidObject(1);
        
        expect(result).toBe(false);
    })

    test("It should return false (string)", () => {
        const result = sut.isValidObject("test");
        
        expect(result).toBe(false);
    })

    test("It should return false (boolean)", () => {
        const result = sut.isValidObject(false);
        
        expect(result).toBe(false);
    })

    test("It should return false (array)", () => {
        const result = sut.isValidObject([]);
        
        expect(result).toBe(false);
    })
})