//  import delete_user
const delete_user = require('../../../controllers/admin/delete_user');

describe('delete_user function', ()=>{
  test('should return an object', ()=>{
    expect(typeof delete_user).toBe('object');
    expect(typeof delete_user.delete_user).toBe('function');
  });
});