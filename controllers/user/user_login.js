const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/account");

// the login function
exports.login = async (req, res) => {
  const { account_number, account_pin } = req.body;
  try {
    const user = await User.findOne({ account_number: account_number });
    if (!user) {
      return res.status(401).send({ error: "User account not found" });
    }
    const isMatch = await bcrypt.compare(account_pin, user.account_pin);
    if (!isMatch) {
      return res.status(401).send({ error: "Invalid password" });
    }

    if ((isMatch, user)) {
      // create a jwt token
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      res.header("auth-token", token);
      res
        .status(200)
        .send({ message: "User logged in successfully", token: token });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
