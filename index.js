const PORT = 5001;
const express = require("express");
const app = express();

app.get("/about", (req, res) => {
    res.json({
        msg: "Click Gateway"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
