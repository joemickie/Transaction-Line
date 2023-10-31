// import user_login
const user_login = require('../../../controllers/user/user_login');

describe('user_login function', () => {
  test('should return an object', () => {
    expect(typeof user_login).toBe('object');
    expect(typeof user_login.login).toBe('function');
  });
});