const { compareTrue } = require('../src/challenges');

describe('1 - Crie uma função usando o operador &&', () => {
  it('Retorne false, passado um valor false e um true na função compareTrue', () => {
    expect(compareTrue(false, true)).toBe(false);
    expect(compareTrue(true, false)).toBe(false);
  });

  it('Retorne false, passado dois valores false na função compareTrue', () => {
    expect(compareTrue(false, false)).toBe(false);
  });
  
  it('Retorne true, passado dois valores true na função compareTrue', () => {
    expect(compareTrue(true, true)).toBe(true);
  });
});
