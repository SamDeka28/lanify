const { route } = require("lane-js/use/router")

module.exports = (req, res) => {
    route(req, res).get("/", function (err, req, res) {
        res.end("Hello World")
    })
}