const express = require("express");
const router = express.Router();
const { protect, ownerOnly } = require("../middlewares/authMiddleware");
// const { addPG, getPGByArea } = require("../controllers/pgController");
const { addPG, getPGByArea, getMyPGs } = require("../controllers/pgController");
const { deletePG } = require("../controllers/pgController");
const { updatePG } = require("../controllers/pgController");

router.post("/add", protect, ownerOnly, addPG);
router.get("/search", getPGByArea);
router.get("/my", protect, ownerOnly, getMyPGs);
router.delete("/:id", protect, ownerOnly, deletePG);
router.put("/:id", protect, ownerOnly, updatePG);


module.exports = router;
