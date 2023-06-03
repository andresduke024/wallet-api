const { UserAuthenticationMapper } = require("../../../../src/features/user_authentication/mappers/user.authentication.mapper.js");

describe("User authentication mapper tests", () => {
    let mockUser = {
        username: "test",
        password: "123456"
    };

    let sut;

    beforeEach(() => {
        sut = new UserAuthenticationMapper();
    })

    test("It should return a valid user object", async () => {
        const mockRequest = { body: mockUser };

        const result = await sut.mapLoginRequestData(mockRequest);

        expect(result).toStrictEqual(mockUser);
    })
});