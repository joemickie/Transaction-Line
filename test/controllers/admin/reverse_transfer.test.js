// import reverse_transfer
const reverse_transfer = require('../../../controllers/admin/reverse_transfer');

describe('reverse_transfer function', () => {
  test('should return an object', () => {
    expect(typeof reverse_transfer).toBe('object');
    expect(typeof reverse_transfer.reverse_transfer).toBe('function');
  });
});