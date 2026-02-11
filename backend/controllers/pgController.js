const PG = require("../models/PG");

// Add PG  (Owner only)
exports.addPG = async (req, res) => {
  try {
    const pg = await PG.create({
      ...req.body,
      owner: req.user.id, // from JWT
    });
    res.status(201).json(pg);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get PG by Area
exports.getPGByArea = async (req, res) => {
  const { area } = req.query;

  const pgs = await PG.find({ area }).populate("owner", "name email");

  res.json(pgs);
};
// Get PGs added by logged-in owner
exports.getMyPGs = async (req, res) => {
  try {
    const pgs = await PG.find({ owner: req.user.id });
    res.json(pgs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete PG
exports.deletePG = async (req, res) => {
  const pg = await PG.findById(req.params.id);

  if (!pg) return res.status(404).json({ message: "PG not found" });

  if (pg.owner.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await pg.deleteOne();
  res.json({ message: "PG deleted" });
};
// Update PG
exports.updatePG = async (req, res) => {
  const pg = await PG.findById(req.params.id);

  if (!pg) return res.status(404).json({ message: "PG not found" });

  if (pg.owner.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  const updatedPG = await PG.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedPG);
};


