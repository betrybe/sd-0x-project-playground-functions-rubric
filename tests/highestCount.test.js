const { highestCount } = require('../src/challenges');

describe('6 - Crie uma função que calcule a repetição do maior número', () => {
  it('Retorne 2 caso o parâmetro passado na funcão highestCount seja [9, 1, 2, 3, 9, 5, 7]', () => {
    expect(highestCount([9, 1, 2, 3, 9, 5, 7])).toBe(2);
  });

  it('Retorne 1 caso o parâmetro passado na funcão highestCount seja [0, 4, 4, 4, 9, 2, 1]', () => {
    expect(highestCount([0, 4, 4, 4, 9, 2, 1])).toBe(1);
  });

  it('Retorne 3 caso o parâmetro passado na funcão highestCount seja [0, 0, 0]', () => {
    expect(highestCount([0, 0, 0])).toBe(3);
  });
});
