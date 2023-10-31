const bcrypt = require("bcrypt");
const Bank_Account = require("../../models/account");

// delete user function
exports.delete_user = async (req, res) => {
  const { account_number, account_pin } = req.body;

  // check if the account exists
  const account = await Bank_Account.findOne({
    account_number: account_number,
  });
  // handle account not found
  if (!account) {
    return res.status(401).send({ error: "account not found" });
  }
  // check if the pin matches
  const isMatch = await bcrypt.compare(account_pin, account.account_pin);

  if (!isMatch) {
    return res.status(401).send({ error: "Invalid Pin" });
  }
  // check if the account_balance is lower than 500 before deleting
  if ((account, isMatch)) {
    if (account.account_balance > 500) {
      return res.status(401).send({
        error: "please withdraw all your money before deleting your account",
      });
    } else {
      // delete the account
      await Bank_Account.deleteOne({ account_number: account_number });
      return res.status(200).send({ message: "account deleted successfully" });
    }
  }
};
