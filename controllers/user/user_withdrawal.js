const User = require('../../models/account');
const Transaction = require('../../models/transaction');

// user withdrawal funtion
exports.withdrawal = async (req,res)=>{
  // get the data from the request
  const {account_number, amount} = req.body;
  try{
    // find the user
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
    // check if user has enough balance
    if(amount > user.account_balance){
      return res.status(401).send({error: 'Insufficient balance, plz enter a valid amount'});
    }
    // update the user balance
    const oldBalance = parseInt(user.account_balance);
    const intAmount = parseInt(amount);
    const newBalance = oldBalance - intAmount;
    const updatedUser = await User.findOneAndUpdate({account_number: account_number},{account_balance: newBalance},{new: true});
    // create a failure transaction
    if(!updatedUser){
      const transaction = new Transaction({
        userId: user._id,
        amount: amount,
        transaction_type: 'withdrawal',
        transaction_status: 'failed'
      });
      await transaction.save();
      return res.status(401).send({error: 'Transaction failed, plz try again'});
    }
    // create a success transaction
    const transaction = new Transaction({
      userId: user._id,
      amount: amount,
      transaction_type: 'withdrawal',
      transaction_status: 'success'
    });
    await transaction.save();
    res.status(200).send({message: 'withdrawal successfully', updatedUser});
  }catch(err){
    res.status(500).send(err); 
  }
};