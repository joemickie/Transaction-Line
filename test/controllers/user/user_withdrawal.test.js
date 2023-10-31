// import user_withdrawal

const user_withdrawal = require('../../../controllers/user/user_withdrawal');

describe('user_withdrawal function', () => {
  test('should return an object', () => {
    expect(typeof user_withdrawal).toBe('object');
    expect(typeof user_withdrawal.withdrawal).toBe('function');
  });
});
