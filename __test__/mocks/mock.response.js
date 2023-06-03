
class MockResponse {
    constructor() {
        this.statusCode = null;
        this.jsonData = null;
    }

    status(code) {
        this.statusCode = code;
        return this;
    }

    json(data) {
        this.jsonData = data;
        return this;
    }
}

module.exports = {
    MockResponse
}