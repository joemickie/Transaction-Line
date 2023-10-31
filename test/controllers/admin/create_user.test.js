// import create_user
const create_user = require('../../../controllers/admin/create_user');

describe('create_user function', () => {
  test('should return an object', () => {
    expect(typeof create_user).toBe('object');
    expect(typeof create_user.add_user).toBe('function');
  });
});