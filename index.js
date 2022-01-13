const requester = require('./requerst.js');

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    requester(
        "https://give-me-the-ip.herokuapp.com/forJson",
        r => res.send(r),
        err => res.send(err),
    );
});

app.listen(3200, () => console.log("listening on port 3200"));
