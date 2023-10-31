// import login_admin
const login_admin = require('../../../controllers/admin/login_admin');

describe('login_admin function', () => {
  test('should return an object', () => {
    expect(typeof login_admin).toBe('object');
    expect(typeof login_admin.admin_login).toBe('function');
  });
});