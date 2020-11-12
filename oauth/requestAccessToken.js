/**
 * Request a cloud server access token
 *
 * Robin Branders
 */

const fetch = require("node-fetch");
const { genToken } = require("./generateRequestToken");

const requestToken = (serverUrl, callback) => {
    const body = {
        token: genToken()
    };
    fetch(`http://${serverUrl}/auth/token`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    })
        .then((res) => res.text())
        .then((res) => {
            try {
                const { accessToken } = JSON.parse(res);
                if (typeof callback === "function") callback(null, accessToken);
            } catch (err) {
                console.log(res);
                if (typeof callback === "function") callback(err, null);
            }
        })
        .catch((err) => {
            if (typeof callback === "function") callback(err, null);
        });
};

module.exports = { requestToken };
