// import user_transfer

const user_transfer = require('../../../controllers/user/user_transfer');

describe('user_transfer function', () => {
  test('should return an object', () => {
    expect(typeof user_transfer).toBe('object');
    expect(typeof user_transfer.transfer).toBe('function');
  });
});
