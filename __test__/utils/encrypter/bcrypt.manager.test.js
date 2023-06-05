const { BCryptEncrypter } = require("../../../src/utils/encrypter/bcrypt.encrypter.js");

describe("BCrypt manager tests", () => {
    const mockEncryptedData = "$2a$10$p/vFZCDgiEzHYRVcGP4IVuxh22j7qrVG12TyR/8X/6.vDYsU9XEVy";

    let sut;

    beforeEach(() => {
        sut = new BCryptEncrypter();
    });

    test("It should return an encrypted data", async () => {
        const result = await sut.encrypt("mock_data");
        expect(result).toBeTruthy();
    })

    test("It should thrown an error due to invalid data to encrypt", async () => {
        expect(async () => await sut.encrypt(mockData)).rejects.toThrow();
    })

    test("It should return true", async () => {
        const result = await sut.compare("12345", mockEncryptedData);
        expect(result).toBe(true);
    })

    test("It should return false", async () => {
        const result = await sut.compare("123456", mockEncryptedData);
        expect(result).toBe(false);
    })
})