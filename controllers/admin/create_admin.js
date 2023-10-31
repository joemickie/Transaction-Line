const bcrypt = require("bcrypt");
const Admin = require("../../models/admin");

// create admin function
exports.create_admin = async (req, res) => {
  try {
    const { Admin_Name, Admin_pin } = req.body;

    const new_admin = new Admin({
      Admin_Name,
      Admin_pin,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(new_admin.Admin_pin, salt);
    new_admin.Admin_pin = hash;
    const admin = await new_admin.save();
    res.status(200).json({
      message: "Admin created successfully",
      admin,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating admin",
      error,
    });
  }
};
