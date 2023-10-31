// import user_deposit
const user_deposit = require('../../../controllers/user/user_deposit');

describe('user_deposit function', () => {
  test('should return an object', () => {
    expect(typeof user_deposit).toBe('object');
    expect(typeof user_deposit.deposit).toBe('function');
  });
});