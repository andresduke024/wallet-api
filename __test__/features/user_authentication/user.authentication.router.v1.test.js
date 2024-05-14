const request = require("supertest");

const app = require("../../../src/app.js")

jest.mock('../../../src/features/user_authentication/controller/user.authentication.controller.js')

const { UserAuthenticationControllerFactory } = require('../../../src/features/user_authentication/controller/user.authentication.controller.factory.js')
const { UserAuthenticationController } = require('../../../src/features/user_authentication/controller/user.authentication.controller.js')

describe("User authentication router tests /auth", () => {

    const mockUsername = "test@tests.com";
    const mockPassword = "12345";

    const loginEndpoint = "/api/v1/auth/login";

    let controllerMock
    let mockFactory = jest.fn()

    beforeEach(async () => {
        controllerMock = new UserAuthenticationController()
        mockFactory.mockReturnValue(controllerMock)

        UserAuthenticationControllerFactory.get = mockFactory

        controllerMock.login.mockImplementation((_, res) => {
            return res.status(500).json({error: "Generic mock implementation"})
        })
    })

    afterEach(async () => {
        UserAuthenticationController.mockClear()
    });

    describe("Test POST /login", () => {
        test("It should response with 200 status code", async () => {
            controllerMock.login.mockImplementation((_, res) => {
                return res.status(200).json({
                    user: {},
                    token: ""
                })
            })

            const response = await request(app)
                .post(loginEndpoint)
                .send({
                    username: mockUsername,
                    password: mockPassword
                });

            expect(response.statusCode).toBe(200);
            expect(response.body).toStrictHaveProperties(["user", "token"]);
        });

        test("It should response with 400 status code due to missing username", async () => {
            const response = await request(app)
                .post(loginEndpoint)
                .send({ password: mockPassword });

            expect(response.statusCode).toBe(400);
            expect(response.body.errors).toContain("Invalid username");
        });

        test("It should response with 400 status code due to missing password", async () => {
            const response = await request(app)
                .post(loginEndpoint)
                .send({ username: mockUsername });

            expect(response.statusCode).toBe(400);
            expect(response.body.errors).toContain("Invalid password");
        });

        test("It should response with 401 status code due to user not found", async () => {
            const expectedErrorDescription = "USER_NOT_FOUND"

            controllerMock.login.mockImplementation((_, res) => {
                return res.status(401).json({error: expectedErrorDescription})
            })

            const response = await request(app)
                .post(loginEndpoint)
                .send({
                    username: "notExists@tests.com",
                    password: mockPassword
                });

            expect(response.statusCode).toBe(401);
            expect(response.body.error).toBe(expectedErrorDescription);
        });

        test("It should response with 401 status code due to invalid password", async () => {
            const expectedErrorDescription = "INVALID_CREDENTIALS"

            controllerMock.login.mockImplementation((_, res) => {
                return res.status(401).json({error: expectedErrorDescription})
            })

            const response = await request(app)
                .post(loginEndpoint)
                .send({
                    username: mockUsername,
                    password: "abcde"
                });

            expect(response.statusCode).toBe(401);
            expect(response.body.error).toBe(expectedErrorDescription);
        });
    })


});