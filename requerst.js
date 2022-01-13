// working but needs VPN

const https = require("https");

const request = (url, sucCallback, failCallback) => {
  const req = https.request(url, res => {
    let data = "";
    res.on("data", res => data += res);
    res.on("end", () => sucCallback(data));
  });

  req.on("error", err => failCallback(err));

  req.end();
};

module.exports = request;
