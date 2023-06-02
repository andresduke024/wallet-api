const Authenticator = require("../../src/auth/authenticator.js");

describe("Authenticator tests", () => {
    test("It should return a valid authenticator manager object", () => {
        const result = Authenticator();
        expect(result).toHaveProperty("createToken", "authenticate", "tryGetToken");
    });
});