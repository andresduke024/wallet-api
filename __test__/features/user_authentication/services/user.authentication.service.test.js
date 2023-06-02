jest.mock( "../../../../src/features/user_authentication/repository/user.authentication.repository");
jest.mock("../../../../src/utils/validations/validator.js")

const { UserAuthenticationRepository } = require("../../../../src/features/user_authentication/repository/user.authentication.repository");
const { Validator } = require("../../../../src/utils/validations/validator.js")

const mockAuthenticator = require("../../../auth/mock.authenticator.js");
const mockEncrypter = require("../../../utils/encrypter/mock.encrypter.js");

const { UserAuthenticationService } = require("../../../../src/features/user_authentication/services/user.authentication.service.js");

const { ApiError } = require("../../../../src/utils/errors/api.error.js");
const { UserAuthenticationErrors } = require("../../../../src/features/user_authentication/errors/user.authentication.errors.js");

describe("User authentication service Tests", () => {

    let mockRepository;
    let mockValidator;

    let sut;

    const mockUser = {
        username: "test",
        password: "123456"
    }

    const mockUserResult = {
        ...mockUser,
        toJSON: () => {
            return mockUser
        }
    }

    beforeEach(() => {
        UserAuthenticationRepository.mockClear();
        Validator.mockClear();
        mockRepository = new UserAuthenticationRepository();
        mockValidator = new Validator();

        sut = new UserAuthenticationService(mockRepository, mockEncrypter, mockAuthenticator, mockValidator);
    });

    test("It should return token and user data", async () => {
        const generatedToken = "auth_token";
        mockRepository.find.mockResolvedValue(mockUserResult);
        mockValidator.isValidObject.mockReturnValue(true);
        mockEncrypter.compare.mockResolvedValue(true);
        mockAuthenticator.createToken.mockReturnValue(generatedToken);

        const result = await sut.validateLogin(mockUser);

        const expected = {
            user: { username: mockUser.username }, 
            token: generatedToken 
        };

        expect(result).toStrictEqual(expected);
    });

    test("It should thrown an exception due to invalid repository data", async () => {
        mockRepository.find.mockResolvedValue({});
        mockValidator.isValidObject.mockReturnValue(false);

        const expectedError = new ApiError(401, UserAuthenticationErrors.USER_NOT_FOUND);

        await expect(async () => await sut.validateLogin(mockUser)).toThrowApiError(expectedError);
    });

    test("It should thrown an exception due to invalid password", async () => {
        mockRepository.find.mockResolvedValue(mockUser);
        mockValidator.isValidObject.mockReturnValue(true);
        mockEncrypter.compare.mockResolvedValue(false)

        const expectedError = new ApiError(401, UserAuthenticationErrors.INVALID_CREDENTIALS);

        await expect(async () => await sut.validateLogin(mockUser)).toThrowApiError(expectedError);
    });
});


