module.exports = (server) => {
    const postController = require("../controllers/postController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");

server.route("/posts")
.get(jwtMiddleware.authenticateUser, postController.listAllPosts)
.post(jwtMiddleware.authenticateAdmin, postController.createAPost);

/*server.route("/posts/:post_id")
.get(postController.getAPost)
.put(postController.updateAPost)
.delete(postController.deleteApost);*/
}