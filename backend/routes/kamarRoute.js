const express = require("express");
const {
  GetKamarById,
  GetAllKamar,
  CreateKamar,
  UpdateKamar,
  DeleteKamar,
} = require("../controllers/kamarController");

const router = express.Router();

router.get("/kamar", GetAllKamar);
router.get("/kamar/:id", GetKamarById);
router.post("/kamar", CreateKamar);
router.patch("/kamar/:id", UpdateKamar);
router.delete("/kamar/:id", DeleteKamar);

module.exports = router;
