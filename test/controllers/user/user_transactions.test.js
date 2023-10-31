// import user_transactions

const user_transactions = require('../../../controllers/user/user_transactions');

describe('user_transactions function', () => {
  test('should return an object', () => {
    expect(typeof user_transactions).toBe('object');
    expect(typeof user_transactions.transactions).toBe('function');
  });
});
