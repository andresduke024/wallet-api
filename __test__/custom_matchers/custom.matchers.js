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
                return mismatchResult(
                    `Received data "${error.data}" different from expected "${expected.data}"`
                );
            }

            if (error.statusCode !== expected.statusCode) {
                return mismatchResult(
                    `Received statusCode "${error.statusCode}" different from expected "${expected.statusCode}"`
                );
            }

            return {
                pass: true,
                message: () => ``,
            };
        }

        return {
            pass: false,
            message: () => `Expected to throw, but didn't`,
        };
    },
});