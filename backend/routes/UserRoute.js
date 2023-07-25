const express = require("express");
const {
  GetAllUser,
  GetUserById,
  Register,
  UpdateUser,
  DeleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/user", GetAllUser);
router.get("/user/:id", GetUserById);
router.post("/user", Register);
router.patch("/user/:id", UpdateUser);
router.delete("/user/:id", DeleteUser);

module.exports = router;
