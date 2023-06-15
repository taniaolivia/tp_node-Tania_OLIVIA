const express = require('express');
const cors = require('cors');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.MONGODB_SERVER}/${process.env.MONGODB_AUTH_DATABASE}`, {
    useNewUrlParser: true,
    user: process.env.MONGODB_AUTH_USERNAME,
    pass: process.env.MONGODB_AUTH_PASSWORD
}).then(() => {
    console.log('Connexion à la base de données avec succès');
}).catch(err => {
    console.log('Erreur de connexion à la base de données');
    process.exit();
});

server.use(express.urlencoded());
server.use(express.json());

server.use(cors());

const postRoute = require("./api/routes/postRoute");
postRoute(server);

const userRoute = require("./api/routes/userRoute");
userRoute(server);

server.listen(port, hostname);

