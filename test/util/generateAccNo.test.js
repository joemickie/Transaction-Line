// import generateAccNo

const generateAccNo = require('../../util/generateAccNo');

describe('generateAccNo function', () => {
  test('should return an object', () => {
    expect(typeof generateAccNo).toBe('object');
    expect(typeof generateAccNo.generateAccountNumber).toBe('function');
  });
});


