const Bank_Account = require("../../models/account");

// enable account function
exports.enable_account = async (req, res) => {
  const { account_number } = req.body;
  // check if the account exists
  const account = await Bank_Account.findOne({
    account_number: account_number,
  });
  if (!account) {
    return res.status(401).send({ error: "account not found" });
  }
  // check if the account is activated
  if (account.is_activated === true) {
    return res.status(401).send({ error: "account is active" });
  } else {
    // activate the account
    await Bank_Account.updateOne(
      { account_number: account_number },
      { $set: { is_activated: true } },
      { new: true }
    );
    return res.status(200).send({ message: "account activated successfully" });
  }
};