jest.mock("../../../../src/features/user_authentication/services/user.authentication.service.js");
jest.mock("../../../../src/features/user_authentication/mappers/user.authentication.mapper.js");

const { MockResponse } = require("../../../mocks/mock.response.js");
const { UserAuthenticationService } = require("../../../../src/features/user_authentication/services/user.authentication.service.js");
const { UserAuthenticationMapper } = require("../../../../src/features/user_authentication/mappers/user.authentication.mapper.js");
const { UserAuthenticationController } = require("../../../../src/features/user_authentication/controller/user.authentication.controller.js");

const { ApiError } = require("../../../../src/utils/errors/api.error.js");

describe("User authentication controller tests", () => {

    let sut;
    let service;
    let mapper;

    const mockError = "mocked error";
    const mockStatusCode = 401;

    let mockResponse;
    let mockRequest;

    const mockResponseData = {
        user: { username: "test" }, 
        token: "auth_token" 
    };

    beforeEach(() => {
        mockResponse = new MockResponse();
        mockRequest = {};
        service = new UserAuthenticationService();
        mapper = new UserAuthenticationMapper();

        sut = new UserAuthenticationController(service, mapper);
    });

    test("It should response a 200 status code and the user data", async () => {
        const mockResponse = new MockResponse();
        const mockRequest = {};
    
        mapper.mapLoginRequestData.mockResolvedValue({});
        service.validateLogin.mockResolvedValue(mockResponseData);

        await sut.login(mockRequest, mockResponse);

        expect(mockResponse.statusCode).toBe(200);
        expect(mockResponse.jsonData).toStrictEqual(mockResponseData);
    });

    test("It should response with a 401 status code and an error description due to invalid login", async () => {
        const mockResponseBody = {
            error: mockError
        }
    
        mapper.mapLoginRequestData.mockResolvedValue({});
        service.validateLogin.mockRejectedValue(new ApiError(mockStatusCode, mockError));

        await sut.login(mockRequest, mockResponse);

        expect(mockResponse.statusCode).toBe(mockStatusCode);
        expect(mockResponse.jsonData).toStrictEqual(mockResponseBody);
    });
})