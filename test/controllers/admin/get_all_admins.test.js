// import get_all_admins
const get_all_admins = require('../../../controllers/admin/get_all_admins');

describe('get_all_admins function', () => {
  test('should return an object', () => {
    expect(typeof get_all_admins).toBe('object');
    expect(typeof get_all_admins.get_admin_details).toBe('function');
  });
});