const { User } = require("../helper/relation.js");

exports.GetAllUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json({ msg: "Success Get All User", response });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.GetUserById = async (req, res) => {
  try {
    const respone = await User.findOne();
    res.status(200).json({ msg: "Success Get User by id", respone });
} catch (error) {
    res.status(400).json({ msg: error.message });
}
};

exports.Register = async (req,res) => {
    const { username, user_email, user_password, user_noHp, user_nik } = req.body
    try {
        const respone = await User.create({
            username,
            user_email,
            user_password,
            user_noHp,
            user_nik
        });
        res.status(200).json({ msg: "Create Success", respone });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

exports.UpdateUser = async (req, res) => {
    try {
        const respone = await User.update(req.body, {
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json({ msg: "Update Success", respone });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

exports.DeleteUser = async (req, res) => {
    try {
        await User.destroy({
            where : {
                id: req.params.id,
            }
        })
        res.status(200).json({ msg: "Delete Success" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}