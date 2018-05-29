
const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const check = require("./middleware/checkForSession")
const read = require("./controller/swaf_controller")
require("dotenv").config();

const app = express()

const { SERVER_PORT, SESSION_SECRET} = process.env;

app.use(bodyParser.json())
app.use( session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.get("/api/swag", read.read)

const PORT = SERVER_PORT || 3000

app.listen(PORT, () => console.log("Listening to: " + PORT))