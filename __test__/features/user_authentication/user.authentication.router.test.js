const request = require("supertest");

const dbConnectionManager = require("../../../src/db/connection.manager.js");
const app = require("../../../src/app.js")

describe("User authentication router tests /auth", () => {

    const mockUsername = "test@tests.com";
    const mockPassword = "12345";

    const loginEndpoint = "/api/v1/auth/login";

    beforeAll(async () => {
        await dbConnectionManager.start();
    })

    afterAll(async () => {
        await dbConnectionManager.disconnect();
    });

    describe("Test POST /login", () => {
        test("It should response with 200 status code", async () => {
            const response = await request(app)
                .post(loginEndpoint)
                .send({
                    username: mockUsername,
                    password: mockPassword
                });

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperties(["user", "token"]);
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
            const response = await request(app)
                .post(loginEndpoint)
                .send({
                    username: "test2@tests.com",
                    password: mockPassword
                });

            expect(response.statusCode).toBe(401);
            expect(response.body.error).toBe("USER_NOT_FOUND");
        });

        test("It should response with 401 status code due to invalid password", async () => {
            const response = await request(app)
                .post(loginEndpoint)
                .send({
                    username: mockUsername,
                    password: "abcde"
                });

            expect(response.statusCode).toBe(401);
            expect(response.body.error).toBe("INVALID_CREDENTIALS");
        });
    })


});