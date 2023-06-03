const request = require("supertest");

const dbConnectionManager = require("../../../src/db/connection.manager.js");
const app = require("../../../src/app.js")

describe("User authentication router tests /auth", () => {

    beforeAll(async () => {
        await dbConnectionManager.start();
    })

    afterAll(async () => {
        await dbConnectionManager.disconnect();
    });

    describe("Test POST /login", () => {
        test("It should response with 200 status code", async () => {
            const response = await request(app)
                .post("/auth/login")
                .send({
                    username: "test",
                    password: "12345"
                });

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperties(["user", "token"]);
        });

        test("It should response with 400 status code due to missing username", async () => {
            const response = await request(app)
                .post("/auth/login")
                .send({ password: "12345" });

            expect(response.statusCode).toBe(400);
            expect(response.body.errors).toContain("Invalid username");
        });

        test("It should response with 400 status code due to missing password", async () => {
            const response = await request(app)
                .post("/auth/login")
                .send({ username: "test" });

            expect(response.statusCode).toBe(400);
            expect(response.body.errors).toContain("Invalid password");
        });
    })


})