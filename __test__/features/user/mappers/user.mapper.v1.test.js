jest.mock("../../../../src/utils/encrypter/encrypter.js");

const { UserMapperV1 } = require("../../../../src/features/user/mappers/user.mapper.v1.js");
const { Encrypter } = require("../../../../src/utils/encrypter/encrypter.js");

describe("User mapper v1 tests", () => {

    const mockUser = {
        identificationNumber: 1111,
        name: "test",
        email: "test@tests.com",
        cellphone: "3187654321",
        password: "12345",
        passwordConfirmation: "12345"
    }

    let sut;

    beforeEach(() => {
        Encrypter.mockClear();
        const encrypter = new Encrypter();
        sut = new UserMapperV1(encrypter);
    });

    test("It should return a valid user object", async () => {
        const mockRequest = { body: mockUser }
        const result = await sut.mapUser(mockRequest);

        expect(result).toStrictHaveProperties(["identificationNumber", "name", "email", "cellphone", "password"]);
    })
});