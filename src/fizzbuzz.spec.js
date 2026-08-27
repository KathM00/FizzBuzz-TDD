describe('FizzBuzz', () => {
  it('Deberia devolver el mismo numero si no cumple la regla', () => {
    expect(fizzBuzz(2)).toEqual(2);
  });
});

describe('FizzBuzz', () => {
  it('Deberia generar otro numero que no sigue la regla', () => {
    expect(fizzBuzz(1)).toEqual(1);
  });
});

