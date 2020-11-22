/**
 *  Request an access token and post data
 *
 *  Robin Branders
 */

const fetch = require("node-fetch");
const { requestToken } = require("./oauth/requestAccessToken");
const uuid = require("uuid");

const sysInfo = (serverUrl) => {
    requestToken(serverUrl, (err, token) => {
        if (err) return console.log(err);

        const body = {
            requestId: uuid.v4(),
            data: [
                {
                    s: ["2c9375ef-220c-4244-bd8f-4dd56174895d", "41", "18"],
                    v: 18.3,
                    t: new Date(new Date().getTime() - 1000 * 60)
                },
                {
                    s: ["2c9375ef-220c-4244-bd8f-4dd56174895d", "41", "18"],
                    v: 12.1,
                    t: new Date()
                }
            ]
        };

        fetch(`http://${serverUrl}/sensors/rawdata`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    });
};
sysInfo("localhost:5000");
