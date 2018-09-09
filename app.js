const { pathify } = require("lane-js/use/pathify")

const Lane = require("lane-js")

let app = Lane({ urls: require("./urlConfig") })

app.listen(3000, () => console.log('Server is up and running at 3000'))