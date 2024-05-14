const { UserAuthenticationMapperV1 } = require("../../../../src/features/user_authentication/mappers/user.authentication.mapper.v1.js");

describe("User authentication mapper tests", () => {
    let mockUser = {
        username: "test",
        password: "123456"
    };

    let sut;

    beforeEach(() => {
        sut = new UserAuthenticationMapperV1();
    })

    test("It should return a valid user object", async () => {
        const mockRequest = { body: mockUser };

        const result = await sut.mapLoginRequestData(mockRequest);

        expect(result).toStrictEqual(mockUser);
    })
});