const userAuthenticationRouterV1 = require("../features/user_authentication/user.authentication.router.v1.js");

module.exports = {
    routes: [
        {
            router: userAuthenticationRouterV1.router,
            path: "v1/auth"
        }
    ]
}