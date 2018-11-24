const { Server } = require("lane-js");
const urlConfig = require('./urlConfig')

const serverOptions = {
  urls: urlConfig,
  template_directory: "views",
  template_engine: 'hbs',
  template_static: "public"
}

let app = Server(serverOptions)

app.listen(3000, _ => console.log("Server is up and running at 3000"))