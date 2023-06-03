const { ApiError } = require("../../src/utils/errors/api.error.js");

const mismatchResult = (message) => ({
    pass: false,
    message: () => message,
});

expect.extend({
    async toThrowApiError(received ,expected) {
        try {
            await received();
        } catch (error) {
            const isApiError = error instanceof ApiError;

            if (!isApiError) {
                return mismatchResult('Not an ApiError instance');
            }

            if (error.data !== expected.data) {
                return mismatchResult(`Received data "${error.data}" different from expected "${expected.data}"`);
            }

            if (error.statusCode !== expected.statusCode) {
                return mismatchResult(`Received statusCode "${error.statusCode}" different from expected "${expected.statusCode}"`);
            }

            return {
                pass: true,
                message: () => ``,
            };
        }

        return mismatchResult(`Expected to throw, but didn't`);
    },
});

expect.extend({
    async toHaveProperties(received, expectedProperties) {

        if (typeof received !== "object") {
            return mismatchResult("Received value it's not an object");
        }

        if (!Array.isArray(expectedProperties)) {
            return {
                pass: received.hasOwnProperty(expectedProperties),
                message: () => ""
            }
        }

        const result = expectedProperties.every(element => received.hasOwnProperty(element));

        if (!result) {
            return mismatchResult(`Expected property '${element}' is missing in received value`);
        }

        return {
            pass: true,
            message: () => {}
        }
    },
});