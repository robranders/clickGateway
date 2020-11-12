/**
 *  Generate a request token
 *
 *  Robin Branders
 */

const TOKEN_EXP_LENGTH = "10s";
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const privateKey = fs.readFileSync(
    path.join(__dirname, "keys", "clickGateway_private.pem")
);

const genToken = () => {
    const requestToken = jwt.sign(
        {
            clientId: "abc",
            clientSecret: "123"
        },
        privateKey,
        {
            algorithm: "RS256",
            expiresIn: TOKEN_EXP_LENGTH
        }
    );

    return requestToken;
};

module.exports = { genToken };
