const { JWTAuthManager } = require("../../src/auth/jwt.auth.manager.js");

describe("JWT Manager tests", () => {

    const mockJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2ODU3MjcyODR9.H2QE2WUujRQSaMq-9Qd9w86OAnyK2grkNFfMIrY-l88"

    const mockUser = {
        username: "test"
    }

    let mockRequest;
    let sut;

    beforeEach(() => {
        mockRequest = { headers: {} }
        sut = new JWTAuthManager();
    })

    test("It should be able to get token from request headers", () => {
        const mockToken = "mock_token";
        mockRequest.headers["x-access-token"] = mockToken;

        const result = sut.tryGetToken(mockRequest);
        expect(result).toBe(mockToken);
    });

    test("It should thrown an error due to missing token header", () => {
        expect(() => sut.tryGetToken(mockRequest)).toThrow("Auth token required");
    });

    test("It should create a token successfully", () => {
        const token = sut.createToken(mockUser);
        expect(token).toBeTruthy()
    })

    test("It should authenticate a valid token", () => {
        // For this test to work you need to set the environment var 'token Secret Key' as 'test'
        const result = sut.authenticate(mockJWT);
        expect(result).toBeTruthy()
    })

    test("It should thrown an error due to invalid token", () => {
        expect(() => sut.authenticate("")).toThrow("Invalid token");
    })
})