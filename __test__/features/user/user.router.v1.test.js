const request = require("supertest");

const app = require("../../../src/app.js")

jest.mock("../../../src/features/user/controller/user.controller")

const { UserControllerFactory } = require('../../../src/features/user/controller/user.controller.factory')
const { UserController } = require("../../../src/features/user/controller/user.controller")

describe("User router tests /user", () => {
    const userEndpoint = "/api/v1/user";

    let controllerMock
    let mockFactory = jest.fn()

    let genericMockBody = {
        identificationNumber: 1818,
        name: "test2",
        email: "test18@tests.com",
        cellphone: "3192286272",
        password: "12345",
        passwordConfirmation: "12345"
    }

    beforeAll(() => {
        controllerMock = new UserController()
        mockFactory.mockReturnValue(controllerMock)
        UserControllerFactory.get = mockFactory
    })

    afterEach(() => {
        UserController.mockClear()
    })

    describe("Test POST", () => {
        test("It should response with 200 status code", async () => {
            controllerMock.create.mockImplementation((_, res) => {
                return res.status(200).json({
                    user: {},
                    token: ""
                })
            })

            const response = await request(app)
                .post(userEndpoint)
                .send(genericMockBody);

            expect(response.statusCode).toBe(200);
            expect(response.body).toStrictHaveProperties(["user", "token"]);
        })

        test("It should response with 400 status code due to invalid identification number", async () => {
            const body = {
                ...genericMockBody,
                identificationNumber: "1234a2"
            }
            const response = await request(app)
                .post(userEndpoint)
                .send(body);

            expect(response.statusCode).toBe(400);
        })

        test("It should response with 400 status code due to invalid email", async () => {
            const body = {
                ...genericMockBody,
                email: "abc"
            }
            const response = await request(app)
                .post(userEndpoint)
                .send(body);

            expect(response.statusCode).toBe(400);
        })

        test("It should response with 400 status code due to invalid cellphone", async () => {
            const body = {
                ...genericMockBody,
                cellphone: "5550a"
            }
            const response = await request(app)
                .post(userEndpoint)
                .send(body);

            expect(response.statusCode).toBe(400);
        })

        test("It should response with 400 status code due to invalid password", async () => {
            const body = {
                ...genericMockBody,
                password: ""
            }
            const response = await request(app)
                .post(userEndpoint)
                .send(body);

            expect(response.statusCode).toBe(400);
        })


        test("It should response with 400 status code due to mismatch password", async () => {
            const body = {
                ...genericMockBody,
                passwordConfirmation: "asdf"
            }
            const response = await request(app)
                .post(userEndpoint)
                .send(body);

            expect(response.statusCode).toBe(400);
        })
    })
})