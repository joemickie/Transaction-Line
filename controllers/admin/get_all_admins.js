const Admin = require("../../models/admin");

// get all get_admin_details function
exports.get_admin_details = async (req, res) => {
  const admin = await Admin.find();
  res.send(admin);
};
