const userAuthenticationRouter = require("../features/user_authentication/user.authentication.router.js");

module.exports = {
    routes: [
        {
            router: userAuthenticationRouter.router,
            path: "/auth"
        }
    ]
}