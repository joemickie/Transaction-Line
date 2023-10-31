const bcrypt = require("bcrypt");
const Bank_Account = require("../../models/account");
const account_number = require("../../util/generateAccNo");

//  add_user function
exports.add_user = async (req, res, next) => {
  const {
    account_owner,
    account_pin,
    account_email,
    account_balance,
    account_phone_number,
  } = req.body;

  // hash the pin
  const salt = await bcrypt.genSalt(10);
  hashedPin = await bcrypt.hash(account_pin, salt);

  // create user's account
  const user_account = new Bank_Account({
    account_owner: account_owner,
    account_number: account_number.generateAccountNumber().account_number,
    account_pin: hashedPin,
    account_email: account_email,
    account_balance: account_balance,
    account_phone_number: account_phone_number,
    is_activated: true,
  });

  try {
    const savedUser = await user_account.save();
    res.status(201).send({
      message: "User's bank_account created successfully!",
      user: savedUser,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
