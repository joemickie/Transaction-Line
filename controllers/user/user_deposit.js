const User = require('../../models/account');
const Transaction = require('../../models/transaction');

// user deposit function
exports.deposit = async (req, res)=>{
  const {account_number, amount} = req.body;
  const userId = req.user._id;
  console.log(userId);
  try{
    const user = await User.findOne({account_number: account_number});
    if(!user){
      return res.status(401).send({error: 'User account not found'});
    }
    // check if account is disabled
    if(user.is_activated === false){
      return res.status(401).send({error: 'Account is disabled, plz contact your bank'});
    }
    // check if amount is valid
    if(amount < 0){
      return res.status(401).send({error: 'Invalid amount, plz enter a valid amount'});
    }
    // update the user balance
    const oldBalance = parseInt(user.account_balance);
    const intAmount = parseInt(amount);
    const newBalance = intAmount + oldBalance ;
    console.log(newBalance);
    const updatedUser = await User.findOneAndUpdate({account_number: account_number},{account_balance: newBalance},{new: true});

    // create a failure transaction
    if(!updatedUser){
      const transaction = new Transaction({
        userId: user._id,
        amount: amount,
        transaction_type: 'deposit',
        transaction_status: 'failed'
      });
      await transaction.save();
      return res.status(401).send({error: 'Transaction failed, plz try again'});
    }
    // create a success transaction
    const transaction = new Transaction({
      userId: user._id,
      amount: amount,
      transaction_type: 'deposit',
      transaction_status: 'success'
    });
    await transaction.save();
    res.status(200).send({message: 'User account updated successfully', updatedUser});
  }catch(err){
    res.status(500).send(err);
  }
};