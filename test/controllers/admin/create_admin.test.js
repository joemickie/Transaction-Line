// import create_admin
const create_admin = require('../../../controllers/admin/create_admin');

describe('create_admin function', () => {
  test('should return an object', () => {
    expect(typeof create_admin).toBe('object');
    expect(typeof create_admin.create_admin).toBe('function');
  });
});
