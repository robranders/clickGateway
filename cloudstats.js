/**
 *  Request an access token and make a request
 *
 *  Robin Branders
 */

const fetch = require("node-fetch");
const { requestToken } = require("./oauth/requestAccessToken");

const sysInfo = (serverUrl) => {
    requestToken(serverUrl, (err, token) => {
        if (err) return console.log(err);
        fetch(`http://${serverUrl}/system/info`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    });
};
sysInfo("cristal.robinbranders.be");
