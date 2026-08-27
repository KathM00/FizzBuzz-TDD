import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo numero si no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("deberia generar otro numero que no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

   it("deberia devolver 'Fizz' para múltiplos de 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
   
});
