const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const liveReload = require("livereload");
const connectliveReload = require("connect-livereload");

const publicDirectory = path.join(__dirname, "../frontend/static");
const liveReloadServer = liveReload.createServer();
liveReloadServer.watch(publicDirectory);
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
})

const app = express();
app.use(connectliveReload());

// Frontend 
// app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/views"));
 
app.use("/static", express.static(path.join(__dirname, "../frontend/static")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const appRoute = require("./routes/app");

app.use("/", appRoute);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`listening to port: ${PORT}`);
}) 



