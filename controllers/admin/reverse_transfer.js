const Bank_Account = require("../../models/account");
const Transaction = require("../../models/transaction");

// reverse transfer function
exports.reverse_transfer = async (req, res) => {
  try {
    const { account_number, amount, receiver_account_number } = req.body;
    const sender_account = await Bank_Account.findOne({
      account_number: account_number,
    });
    const receiver_account = await Bank_Account.findOne({
      account_number: receiver_account_number,
    });
    if (!sender_account || !receiver_account) {
      return res.status(401).send({ error: "account not found" });
    }

    const userId = sender_account._id;
    const receiverId = receiver_account._id;

    // check if the transaction exists
    const transaction = await Transaction.find({
      userId: userId,
      transaction_type: "transfer",
      sent_to: receiver_account_number,
      amount: amount,
    });
    console.log(transaction);
    // handle the error
    if (!transaction || transaction.length === 0) {
      return res.status(401).send({ error: "no such transaction found!" });
    }

    // reverse the transaction
    let calcAmount = parseInt(amount);
    let calc_senders_bal = parseInt(sender_account.account_balance);
    let calc_receivers_bal = parseInt(receiver_account.account_balance);
    let new_senders_bal = calc_senders_bal + calcAmount;
    let new_receivers_bal = calc_receivers_bal - calcAmount;

    // save the updated sender's account
    await Bank_Account.updateOne(
      { account_number: account_number },
      { account_balance: new_senders_bal }
    );
    // make a new transaction
    const new_transaction = new Transaction({
      userId: userId,
      transaction_type: "reverse-transfer",
      transaction_status: "success",
      sent_to: receiver_account_number,
      amount: amount,
    });
    await new_transaction.save();
    // save the updated receiver's account
    await Bank_Account.updateOne(
      { account_number: receiver_account_number },
      { account_balance: new_receivers_bal }
    );
    // send the response
    res.status(200).send({
      message: "transaction reversed successfully",
      transaction: new_transaction,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
