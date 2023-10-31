//  import disable_account
const disable_account = require('../../../controllers/admin/disable_account');

describe('disable_account function', ()=>{
  test('should return an object', ()=>{
    expect(typeof disable_account).toBe('object');
    expect(typeof disable_account.disable_account).toBe('function');
  });
});