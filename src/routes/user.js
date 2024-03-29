const router = require("express").Router();
const userController = require("../controllers/UserController");
const middlewareController = require("../controllers/MiddlewareController");

router.get("/:id", userController.getUserById);
router.get("/", middlewareController.verifyToken, userController.getAllUser);
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUserById
);

module.exports = router;
