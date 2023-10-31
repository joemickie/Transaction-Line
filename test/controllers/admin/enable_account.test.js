// import enable_acccount
const enable_acccount = require('../../../controllers/admin/enable_account');

describe('enable_acccount function', () => {
  test('should return an object', () => {
    expect(typeof enable_acccount).toBe('object');
    expect(typeof enable_acccount.enable_account).toBe('function');
  });
});