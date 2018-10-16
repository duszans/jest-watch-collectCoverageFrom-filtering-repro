const square = require('./square');
describe('square', () => {
  it('should return square of number', () => {
    expect(square(2)).toBe(4);
  });
});
