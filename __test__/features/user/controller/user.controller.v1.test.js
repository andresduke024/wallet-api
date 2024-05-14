jest.mock("../../../../src/features/user/service/user.service.js");
jest.mock("../../../../src/features/user/mappers/user.mapper.js");

const { UserMapper } = require("../../../../src/features/user/mappers/user.mapper.js");
const { UserService } = require("../../../../src/features/user/service/user.service.js");
const { UserControllerV1 } = require("../../../../src/features/user/controller/user.controller.v1.js");
const { MockResponse } = require("../../../mocks/mock.response.js");
const { ApiError } = require("../../../../src/utils/errors/api.error.js");

describe("User controller tests", () => {

  let sut
  let serviceMock
  let mapperMock

  let mockRequest = {}
  let mockResponse;

  beforeEach(() => {
    serviceMock = new UserService()
    mapperMock = new UserMapper()

    mockResponse = new MockResponse()

    sut = new UserControllerV1(serviceMock, mapperMock);
  })

  afterEach(() => {
    UserService.mockClear()
    UserMapper.mockClear()

    sut = null
  })

  test("It should response 201 status code and the new user data", async () => {
    let mockResponseBody = {
        user: {},
        token: ""
    }

    mapperMock.mapUser.mockResolvedValue({})
    serviceMock.create.mockResolvedValue({...mockResponseBody})
    
    await sut.create(mockRequest, mockResponse)

    expect(mockResponse.statusCode).toBe(201)
    expect(mockResponse.jsonData).toStrictHaveProperties([ "user", "token" ])
  })

  test("It should response 400 status code", async () => {
    let mockErrorDescription = "Mock error"

    let mockResponseBody = {
        error: mockErrorDescription
    }

    mapperMock.mapUser.mockResolvedValue({})
    serviceMock.create.mockRejectedValue(new ApiError(400, mockErrorDescription))

    await sut.create(mockRequest, mockResponse)

    expect(mockResponse.statusCode).toBe(400)
    expect(mockResponse.jsonData).toStrictEqual(mockResponseBody);
  })
})