// import view_all_users
const view_all_users = require('../../../controllers/admin/view_all_users');

describe('view_all_users function', () => {
  test('should return an object', () => {
    expect(typeof view_all_users).toBe('object');
    expect(typeof view_all_users.view_all_users).toBe('function');
  });
});