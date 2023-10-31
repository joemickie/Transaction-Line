const User = require('../../models/account');
const Transaction = require('../../models/transaction');

// user transfer function
exports.transfer = async (req, res)=>{
  // get the data from the request
  const {account_number, amount, receiver_account_number} = req.body;
  console.log(account_number, amount, receiver_account_number);
  try{
    // check to know if the account numbers entered are valid
    const sender = await User.findOne({account_number: account_number});
    const receiver = await User.findOne({account_number: receiver_account_number});
    if(!sender){
      return res.status(401).send({error: 'Sender account not found'});
    }
    if(!receiver){
      return res.status(401).send({error: 'Receiver account not found'});
    }
    // check if amount is valid
    if(amount < 0){
      return res.status(401).send({error: 'Invalid amount, plz enter a valid amount'});
    }
    // check if senders account is disabled
    if(sender.is_activated === false){
      return res.status(401).send({error: 'Your account is disabled, plz contact your bank'});
    }
    // check if sender has enough balance
    if(amount > sender.account_balance){
      return res.status(401).send({error: 'Insufficient balance'});
    }
    // update the sender balance
    const oldBalance = parseInt(sender.account_balance);
    const intAmount = parseInt(amount);
    const newBalance = oldBalance - intAmount ;
    const updatedSender = await User.findOneAndUpdate({account_number: account_number},{account_balance: newBalance},{new: true});

    // create a failure transaction
    if(!updatedSender){
      const transaction = new Transaction({
        userId: sender._id,
        sent_to: receiver_account_number,
        amount: amount,
        transaction_type: 'transfer',
        transaction_status: 'failed'
      });
      await transaction.save();
      return res.status(401).send({error: 'Transaction failed, plz try again'});
    }
    // create a success transaction
    const transaction = new Transaction({
      userId: sender._id,
      sent_to: receiver_account_number,
      amount: amount,
      transaction_type: 'transfer',
      transaction_status: 'success'
    });
    await transaction.save();

    // update the receiver balance
    const oldBalanceReceiver = parseInt(receiver.account_balance);
    const newBalanceReceiver = intAmount + oldBalanceReceiver ;
    const updatedReceiver = await User.findOneAndUpdate({account_number: receiver_account_number},{account_balance: newBalanceReceiver},{new: true});

    // create a success transaction for the receiver
    const transactionReceiver = new Transaction({
      userId: receiver._id,
      received_from: account_number,
      amount: amount,
      transaction_type: 'transfer',
      transaction_status: 'success'
    });
    await transactionReceiver.save();
    
    // send the response
    res.status(200).send({message: 'Transfer successfully', updatedSender, updatedReceiver}); 
  }catch(err){
    res.status(500).send(err);
  }
}