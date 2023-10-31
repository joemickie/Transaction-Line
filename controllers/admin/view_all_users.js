const Bank_Account = require("../../models/account");

// view all users function
exports.view_all_users = async (req, res) => {
  const users = await Bank_Account.find();
  res.send(users);
};
