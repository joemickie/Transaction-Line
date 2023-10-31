const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../../models/admin");

// admin login function
exports.admin_login = async (req, res) => {
  const { Admin_Name, Admin_pin } = req.body;
  // check if the admin exists
  const admin = await Admin.findOne({
    Admin_Name: Admin_Name,
  });
  if (!admin) {
    return res.status(401).send({ error: "admin not found" });
  }
  // check if the pin matches
  const isMatch = await bcrypt.compare(Admin_pin, admin.Admin_pin);
  if (!isMatch) {
    return res.status(401).send({ error: "Invalid Pin" });
  }

  if ((isMatch, admin)) {
    // create a jwt token
    const token = jwt.sign({ _id: admin._id }, process.env.TOKEN_SECRET);
    res.header("admin-token", token);
    res
      .status(200)
      .send({ message: "Admin logged in successfully", token: token });
  }
};
