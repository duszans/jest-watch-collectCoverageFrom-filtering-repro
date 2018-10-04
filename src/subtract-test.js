const subtract = require('./subtract');
describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(1, 2)).toBe(-1);
  });
});
