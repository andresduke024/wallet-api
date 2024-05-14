jest.mock("../../../../src/features/user/repository/user.repository")
jest.mock("../../../../src/utils/validations/validator.js")
jest.mock("../../../../src/auth/auth.manager.js")

const { UserRepository } = require("../../../../src/features/user/repository/user.repository.js")
const { Validator } = require("../../../../src/utils/validations/validator.js")
const { UserServiceV1 } = require("../../../../src/features/user/service/user.service.v1.js")
const { AuthManager } = require("../../../../src/auth/auth.manager.js.js")
const { UserErrors } = require("../../../../src/features/user/errors/user.errors.js")
const { ApiError } = require("../../../../src/utils/errors/api.error.js")

describe("User service tests", () => {

    let repositoryMock
    let validatorMock
    let authManagerMock

    let sut;

    let genericMockUser = {
        identificationNumber: 1000,
        name: "test",
        email: "test@test.com",
        cellphone: "3192286272",
        password: "12345",
        passwordConfirmation: "12345"
    }

    beforeEach(() => {
        repositoryMock = new UserRepository()
        validatorMock = new Validator()
        authManagerMock = new AuthManager()

        sut = new UserServiceV1(repositoryMock, authManagerMock, validatorMock)
    })

    afterEach(() => {
        UserRepository.mockClear()
        Validator.mockClear()
        AuthManager.mockClear()

        sut = null
    })

    test("Should throw error due to existing email", async () => {

        let mockEmail = "test@tests.com"

        let mockUser = {
            ...genericMockUser,
            email: mockEmail,
        }

        repositoryMock.find.mockResolvedValue([
            buildMockUser({ id: 123, identificationNumber: 456, email: mockEmail })
        ])

        const expectedError = new ApiError(400, UserErrors.EMAIL_NOT_AVAILABLE )

        await expect(async () => await sut.create(mockUser)).toThrowApiError(expectedError)
    })

    test("Should throw error due to existing identification number", async () => {

        let mockIdentificationNumber = "101010"

        let mockUser = {
            ...genericMockUser,
            identificationNumber: mockIdentificationNumber,
        }

        repositoryMock.find.mockResolvedValue([
            buildMockUser({ id: 123, identificationNumber: mockIdentificationNumber, email: "" })
        ])

        const expectedError = new ApiError(400, UserErrors.IDENTIFICATION_NUMBER_NOT_AVAILABLE )

        await expect(async () => await sut.create(mockUser)).toThrowApiError(expectedError)
    })

    test("Should throw error due to invalid data", async () => {
        repositoryMock.find.mockResolvedValue([])
        repositoryMock.create.mockResolvedValue({})
        validatorMock.isValidObject.mockReturnValue(false)

        const expectedError = new ApiError(400, UserErrors.INVALID_USER_DATA)

        await expect(async () => await sut.create(genericMockUser)).toThrowApiError(expectedError)
    })

    test("Should success", async () => {
        let mockResult = { data: {} }

        repositoryMock.find.mockResolvedValue([])
        repositoryMock.create.mockResolvedValue(mockResult)
        validatorMock.isValidObject.mockReturnValue(true)

        const result = await sut.create(genericMockUser)

        expect(result).toStrictHaveProperties(["user", "token"])
    })

    const buildMockUser = ({ id, identificationNumber, email }) => {
        const user = { id, identificationNumber, email }

        return {
            ...user,
            toJSON: () => {
                return mockUser
            }
        }
    }
})