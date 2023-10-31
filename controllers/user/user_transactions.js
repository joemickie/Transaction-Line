const Transaction = require('../../models/transaction');

// user transactions function
exports.transactions = async (req, res)=>{
  const requestingId = req.user._id;
  console.log(requestingId);
  try{
    const transactions = await Transaction.find({userId: requestingId});
    res.status(200).send({transactions});
  }catch(err){
    res.status(500).send(err);
  }
};