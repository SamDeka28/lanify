const { render } = require("lane-js")
const urlConfig = {
    "paths": {
        "/": { method: 'GET', handler: (req, res) => render(res, "index.ejs", { title: "LaneJs" }) }
    }
}

module.exports = urlConfig