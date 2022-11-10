module.exports = (server) => {
    const postController = require("../controllers/postController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');

server.route("/posts")
.get(jwtMiddleware.authenticateUser, cors(), postController.listAllPosts)
.post(jwtMiddleware.authenticateAdmin,cors(),  postController.createAPost);
}