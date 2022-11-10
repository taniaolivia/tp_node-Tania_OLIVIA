const express = require('express');
const session = require("express-session");

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mongo/mongodb", {
    useNewUrlParser: true,
    user: "mongo",
    pass: "mongopass"
}).then(() => {
    console.log('Connexion à la base de données avec succès');
}).catch(err => {
    console.log('Erreur de connexion à la base de données');
    process.exit();
});

server.use(express.urlencoded());
server.use(express.json());
server.use(session({
    name: 'SESSION_ID',      
    secret: 'secret', 
    cookie: {
        maxAge: 30 * 86400000, 
    }
}));

const postRoute = require("./api/routes/postRoute");
postRoute(server);

const userRoute = require("./api/routes/userRoute");
userRoute(server);

server.listen(port, hostname);

