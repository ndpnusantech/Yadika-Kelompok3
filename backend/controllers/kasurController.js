const { Kasur } = require("../helper/relation.js");

exports.createKasur = async (req, res) => {
  try {
    const { nama_kasur } = req.body;

    const response = await Kasur.create({
      nama_kasur,
    });
    res.status(200).json({ msg: "created", response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
