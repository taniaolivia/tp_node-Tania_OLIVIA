module.exports = (server) => {
    const userController = require("../controllers/userController");

server.post("/user/register", userController.userRegister);
server.post("/user/login", userController.userLogin);
server.post("/user/logout", userController.userLogout);
}