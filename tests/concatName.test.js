const { concatName } = require('../src/challenges');

describe('4 - Crie uma função que use concatenação de strings', () => {
  it('Retorne \'Paolillo, Lucas\' caso o parâmetro passado na funcão concatName seja [\'Lucas\', \'Cassiano\', \'Ferraz\', \'Paolillo\']', () => {
    expect(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])).toBe('Paolillo, Lucas');
  });

  it('Retorne \'ré, foguete\' caso o parâmetro passado na funcão concatName seja [\'foguete\', \'não\', \'tem\', \'ré\']', () => {
    expect(concatName(['foguete', 'não', 'tem', 'ré'])).toBe('ré, foguete');
  });
  
  it('Retorne \'captain, captain\' caso o parâmetro passado na funcão concatName seja [\'captain\', \'my\', \'captain\']', () => {
    expect(concatName(['captain', 'my', 'captain'])).toBe('captain, captain');
  });
});
